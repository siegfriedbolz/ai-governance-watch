/* Small front-end enhancements. Instant-navigation safe: re-runs on every page
   via Material's document$.
   1) Open external links (different host) in a new tab, with rel="noopener".
   2) Fill the home-page "Last updated" subheadline from the git date that the
      git-revision-date-localized plugin exposes as <meta name="page-updated">. */
(function () {
  function markExternalLinks() {
    var here = location.host;
    document.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href') || "";
      if (/^https?:\/\//i.test(href) && a.host && a.host !== here) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }

  function fillLastUpdated() {
    var box = document.querySelector('.sb-updated');
    if (!box) return;
    var meta = document.querySelector('meta[name="page-updated"]');
    var span = box.querySelector('.js-updated');
    if (meta && meta.content) {
      if (span) span.textContent = meta.content;
      box.hidden = false;            // reveal only once we have a real date
    }
  }

  function run() { markExternalLinks(); fillLastUpdated(); }

  if (typeof document$ !== 'undefined' && document$ && document$.subscribe) {
    document$.subscribe(run);        // Material for MkDocs (instant nav)
  } else {
    document.addEventListener('DOMContentLoaded', run);
  }
})();
