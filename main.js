document.addEventListener('DOMContentLoaded', function () {
  // Select all submenu toggles within dropdown-submenu
  const submenuToggles = document.querySelectorAll('.dropdown-submenu > a');

  submenuToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();       // Prevent default link behavior
      e.stopPropagation();      // Stop event from bubbling up to avoid accidental menu closing

      const submenu = toggle.nextElementSibling;

      // Close all other submenus
      document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function (menu) {
        if (menu !== submenu) {
          menu.classList.remove('show');
        }
      });

      // Toggle visibility of the current submenu
      if (submenu) {
        submenu.classList.toggle('show');
      }
    });
  });

  // Close all submenus when clicking outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function (menu) {
      menu.classList.remove('show');
    });
  });
});
