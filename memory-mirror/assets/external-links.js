/* Open external links (different host) in a new tab, with rel="noopener
   noreferrer" for safety. Internal links and in-page anchors are left alone.
   Instant-navigation safe: re-runs on every page via Material's document$. */
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

  if (typeof document$ !== 'undefined' && document$ && document$.subscribe) {
    document$.subscribe(markExternalLinks); // Material for MkDocs (instant nav)
  } else {
    document.addEventListener('DOMContentLoaded', markExternalLinks);
  }
})();
