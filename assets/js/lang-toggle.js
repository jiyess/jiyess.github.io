/* Bilingual 中文 / English toggle.
   External file (not inline) so the production HTML compressor never collapses
   it into a broken single line. The initial language is set before paint by the
   no-flash script in _includes/head.html. */
(function () {
  var btn = document.querySelector('.lang-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var current = document.documentElement.getAttribute('data-lang') === 'zh' ? 'zh' : 'en';
    var next = current === 'zh' ? 'en' : 'zh';
    document.documentElement.setAttribute('data-lang', next);
    document.documentElement.setAttribute('lang', next);
    try { localStorage.setItem('lang', next); } catch (e) {}
  });
})();
