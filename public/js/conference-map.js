(function() {
  var mapElement = document.getElementById('conference-map-canvas');
  var mapDataElement = document.getElementById('conference-map-data');
  var sidebarElement = document.getElementById('map-sidebar');
  var emptyStateElement = document.getElementById('map-empty-state');
  var detailElement = document.getElementById('map-detail');
  var closeButton = document.getElementById('map-sidebar-close');





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
          title: item.event_title,
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



  function showSidebarDetail(item) {
    // Update sidebar content
    document.getElementById('map-detail-name').textContent = item.conference
    document.getElementById('map-detail-city').textContent = item.city || '';
    document.getElementById('map-detail-country').textContent = item.country || '';
    
   
    
    // Handle event link
    var eventLink = document.getElementById('map-detail-events-link');
    if (item.events_url) {
      eventLink.href = item.events_url;
      eventLink.textContent = item.events_label || 'Events post';
      eventLink.hidden = false;
    } else {
      eventLink.hidden = true;
    }
    
    // Handle publication link
    var pubLink = document.getElementById('map-detail-pub-link');
    if (item.publication_url) {
      pubLink.href = item.publication_url;
      pubLink.textContent = item.publication_label || 'Publications';
      pubLink.hidden = false;
    } else {
      pubLink.hidden = true;
    }
    
    // Show detail, hide empty state
    emptyStateElement.style.display = 'none';
    detailElement.classList.add('is-visible');
    closeButton.hidden = false;
  }

  function hideSidebarDetail() {
    detailElement.classList.remove('is-visible');
    emptyStateElement.style.display = '';
    closeButton.hidden = true;
  }

  var mergedEvents = mergeEventEntries(mapItems);
  var mergedMapItems = Object.keys(mergedEvents).map(function(key) {
    return mergedEvents[key];
  });

  var map = L.map(mapElement, {
    scrollWheelZoom: false,
    worldCopyJump: true,
    minZoom: 1,
    maxZoom: 20

  }).setView([19, 0], 2);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
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
  var markers = {};

  function fitMapToBounds() {
    if (bounds.length > 1) {
      map.fitBounds(bounds, {
        padding: [40, 40],
        maxZoom: 5
      });
    }
    // If 0 or 1 bounds, keep the initial setView
  }

  mergedMapItems.forEach(function(item) {
    bounds.push([item.lat, item.lng]);

    var marker = L.marker([item.lat, item.lng], { icon: hccIcon })
      .addTo(map);

    var markerId = item.location_id + '_' + item.year;
    markers[markerId] = { marker: marker, item: item };

    marker.on('click', function() {
      showSidebarDetail(item);
      marker.getElement().classList.add('is-hovered');
    });

    marker.on('mouseover', function() {
      marker.getElement().classList.add('is-hovered');
    });

    marker.on('mouseout', function() {
      marker.getElement().classList.remove('is-hovered');
    });
  });

  // fitMapToBounds();

  // Close button handler
  closeButton.addEventListener('click', function() {
    hideSidebarDetail();
  });

  window.addEventListener('resize', function() {
    map.invalidateSize();
    fitMapToBounds();
  });
})();