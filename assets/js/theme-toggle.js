/* Dark / light theme toggle.
   Kept as an external file (not inline) so the production HTML compressor
   (compress_html) never collapses it into a broken single line — inline // line
   comments would otherwise swallow the rest of the script after minification. */
(function () {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  // Follow OS changes unless the user has made an explicit choice
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      try { if (localStorage.getItem('theme')) return; } catch (err) {}
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
    });
  }
})();
