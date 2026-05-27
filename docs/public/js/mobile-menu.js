// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  // Open menu
  function openMenu() {
    menuToggle.classList.add('active');
    mobileMenu.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close menu
  function closeMenu() {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  // Toggle menu on button click
  menuToggle.addEventListener('click', function() {
    if (mobileMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu on close button click
  mobileMenuClose.addEventListener('click', closeMenu);

  // Close menu when overlay is clicked
  mobileMenuOverlay.addEventListener('click', closeMenu);

  // Close menu when a nav link is clicked
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close menu on window resize when going back to desktop view
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });
});
