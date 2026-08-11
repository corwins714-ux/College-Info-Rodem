console.log("NAV JS LOADED");





document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const overlay = document.getElementById('menu-overlay');
  const triggers = document.querySelectorAll('a[href="#menu"]');

  if (!menu) {
    return;
  }

  const closeMenu = e => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    document.body.classList.remove('is-menu-visible');
  };

  const openMenu = e => {
    e.preventDefault();
    e.stopPropagation();
    document.body.classList.add('is-menu-visible');
  };

  triggers.forEach(trigger => {
    trigger.addEventListener('click', openMenu);
  });

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

menu.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('is-menu-visible');
  });
});

  const closeLink = menu.querySelector('.close');
  if (closeLink) {
    closeLink.addEventListener('click', closeMenu);
  }

  document.addEventListener('click', e => {
    if (!document.body.classList.contains('is-menu-visible')) {
      return;
    }

    if (menu.contains(e.target) || (overlay && overlay.contains(e.target)) || e.target.closest('.hamburger-nav')) {
      return;
    }

    document.body.classList.remove('is-menu-visible');
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.body.classList.remove('is-menu-visible');
    }
  });
});
