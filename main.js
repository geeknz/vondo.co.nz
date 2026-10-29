// Theme toggle: light by default, remembers dark mode in localStorage.
// The initial class is set by an inline script in <head> to avoid a flash.
document.querySelectorAll('.theme-toggle').forEach(function (btn) {
  function sync() {
    var dark = document.documentElement.classList.contains('dark');
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }
  sync();
  btn.addEventListener('click', function () {
    var dark = document.documentElement.classList.toggle('dark');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
    sync();
  });
});

document.querySelectorAll('[data-year]').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});
