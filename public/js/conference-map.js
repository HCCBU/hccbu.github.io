(function() {
  var mapElement = document.getElementById('conference-map-canvas');
  var mapDataElement = document.getElementById('conference-map-data');

  if (!mapElement || !mapDataElement || typeof L === 'undefined') {
    return;
  }

  var mapItems = [];

  try {
    mapItems = JSON.parse(mapDataElement.textContent);
  } catch (error) {
    console.error('Unable to load conference map data.', error);
    return;
  }

  if (!Array.isArray(mapItems) || !mapItems.length) {
    mapElement.innerHTML = '<p class="conference-map-empty">No conference locations are available yet.</p>';
    return;
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function mergeEventEntries(items) {
    return items.reduce(function(accumulator, item) {
      if (!item || typeof item.lat !== 'number' || typeof item.lng !== 'number') {
        return accumulator;
      }

      var key = [item.location_id, item.conference, item.year].join('::');
      var event = accumulator[key];

      if (!event) {
        event = {
          location_id: item.location_id,
          city: item.city,
          country: item.country,
          lat: item.lat,
          lng: item.lng,
          conference: item.conference,
          year: item.year,
          event_title: item.event_title,
          image_url: item.image_url || '',
          events_url: '',
          events_label: 'Events post',
          publication_url: '',
          publication_label: 'Publications'
        };
        accumulator[key] = event;
      }

      if (!event.image_url && item.image_url) {
        event.image_url = item.image_url;
      }

      if (item.events_url && !event.events_url) {
        event.events_url = item.events_url;
        event.events_label = item.events_label || event.events_label;
      }

      if (item.publication_url && !event.publication_url) {
        event.publication_url = item.publication_url;
        event.publication_label = item.publication_label || event.publication_label;
      }

      return accumulator;
    }, {});
  }

  function buildPopupContent(item) {
    var imageMarkup = item.image_url
      ? '<div class="conference-map-popup-image-wrapper"><img class="conference-map-popup-image" src="' + escapeHtml(item.image_url) + '" alt="' + escapeHtml(item.event_title) + '"></div>'
      : '';

    var links = [];

    if (item.events_url) {
      links.push('<a class="conference-map-popup-link" href="' + escapeHtml(item.events_url) + '">' + escapeHtml(item.events_label || 'Events post') + '</a>');
    }

    if (item.publication_url) {
      links.push('<a class="conference-map-popup-link" href="' + escapeHtml(item.publication_url) + '">' + escapeHtml(item.publication_label || 'Publications') + '</a>');
    }

    if (!links.length) {
      links.push('<span class="conference-map-popup-link">No links available yet.</span>');
    }

    return [
      '<article class="conference-map-popup">',
      imageMarkup,
      '<h3>' + escapeHtml(item.event_title) + '</h3>',
      '<div class="conference-map-popup-links">' + links.join('') + '</div>',
      '</article>'
    ].join('');
  }

  var mergedEvents = mergeEventEntries(mapItems);
  var mergedMapItems = Object.keys(mergedEvents).map(function(key) {
    return mergedEvents[key];
  });

  var map = L.map(mapElement, {
    scrollWheelZoom: false,
    worldCopyJump: true,
    maxBounds: [[-85, -180], [85, 180]]
  }).setView([20, 10], 2);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
  }).addTo(map);

  var hccPinSvg = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="38" viewBox="0 0 28 38">',
    '<filter id="pin-shadow" x="-40%" y="-10%" width="180%" height="140%">',
    '<feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.28)"/>',
    '</filter>',
    '<g filter="url(#pin-shadow)">',
    '<path d="M14 1C7.373 1 2 6.373 2 13c0 8.5 12 24 12 24S26 21.5 26 13C26 6.373 20.627 1 14 1z"',
    ' fill="#FF0000" stroke="#fff" stroke-width="2"/>',
    '</g>',
    '<circle cx="14" cy="13" r="5" fill="#fff" opacity="0.95"/>',
    '</svg>'
  ].join('');

  var hccIcon = L.divIcon({
    className: 'hcc-map-pin',
    html: hccPinSvg,
    iconSize: [28, 38],
    iconAnchor: [14, 38],
    popupAnchor: [0, -40]
  });

  var bounds = [];

  mergedMapItems.forEach(function(item) {
    bounds.push([item.lat, item.lng]);

    var marker = L.marker([item.lat, item.lng], { icon: hccIcon })
      .addTo(map)
      .bindPopup(buildPopupContent(item), {
        maxWidth: 160,
        minWidth: 160
      });

    marker.on('mouseover', function() {
      var element = marker.getElement();
      if (element) {
        element.classList.add('is-hovered');
      }
    });

    marker.on('mouseout', function() {
      var element = marker.getElement();
      if (element) {
        element.classList.remove('is-hovered');
      }
    });
  });

  if (bounds.length === 1) {
    map.setView(bounds[0], 5);
  } else if (bounds.length > 1) {
    map.fitBounds(bounds, {
      padding: [40, 40]
    });
  }

  window.requestAnimationFrame(function() {
    map.invalidateSize();
  });

  window.addEventListener('resize', function() {
    map.invalidateSize();

    if (bounds.length === 1) {
      map.setView(bounds[0], map.getZoom());
    } else if (bounds.length > 1) {
      map.fitBounds(bounds, {
        padding: [40, 40]
      });
    }
  });
})();