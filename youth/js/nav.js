document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const inner = menu.querySelector(".inner");

  // Open menu
  document.querySelectorAll('a[href="#menu"]').forEach(trigger => {
    trigger.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.add('is-menu-visible');
    });
  });

  // Close menu when clicking outside inner box
  menu.addEventListener('click', e => {
    if (!inner.contains(e.target)) {
      document.body.classList.remove('is-menu-visible');
    }
  });

  // Close menu with ESC key
  document.addEventListener('keydown', e => {
    if (e.key === "Escape") {
      document.body.classList.remove('is-menu-visible');
    }
  });

  // Close menu with "Close" link
  const closeLink = menu.querySelector('.close');
  if (closeLink) {
    closeLink.addEventListener('click', e => {
      e.preventDefault();
      document.body.classList.remove('is-menu-visible');
    });
  }

  // Auto-close when clicking a nav link
  menu.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('is-menu-visible');
    });
  });
});
