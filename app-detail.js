/* Shared product-page renderer: used by Node at publication and by new page shells. */
((scope) => {
  const escape = (value) => String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  const link = (label, url, classes) => `<a class="${escape(classes)}" href="${escape(url)}" target="_blank" rel="noopener noreferrer">${escape(label)}</a>`;
  const list = (items, classes, tag = "ul") => `<${tag} class="${classes}">${(items || []).map((text) => `<li>${escape(text)}</li>`).join("")}</${tag}>`;

  function renderAppDetail(app) {
    const terms = app.storeTerms ? `<p class="download-terms">${escape(app.storeTerms)}</p>` : "";
    const buttons = [
      app.storeUrl ? link(app.storeLabel, app.storeUrl, "button primary") : "",
      link(app.downloadLabel, app.downloadUrl, app.storeUrl ? "button secondary" : "button primary"),
      app.itchUrl ? link(app.itchLabel || "Get it on itch.io", app.itchUrl, "button secondary") : ""
    ].join("");
    const guides = app.guides || [];
    const dimensions = Number.isInteger(app.imageWidth) && Number.isInteger(app.imageHeight) && app.imageWidth > 0 && app.imageHeight > 0
      ? ` width="${app.imageWidth}" height="${app.imageHeight}"` : "";
    return `
    <section class="app-detail-hero">
      <div class="app-detail-copy">
        <a class="back-link" href="index.html#apps">← All apps</a>
        <div class="app-meta"><span class="badge badge-${escape(app.statusTone).replace(/[^a-z0-9-]/gi, "").toLowerCase()}">${escape(app.status)}</span><span class="platform">${escape([app.platform, app.version].filter(Boolean).join(" · "))}</span></div>
        <h1>${escape(app.name)}</h1>
        <p class="detail-tagline">${escape(app.tagline)}</p>
        <p class="hero-text">${escape(app.description)}</p>
        ${terms}
        <div class="hero-actions">${buttons}${link(app.downloadNotice.detailsLabel, app.downloadNotice.detailsUrl, "button secondary")}</div>
      </div>
      <div class="detail-visual"><img src="${escape(app.image)}" alt="${escape(app.imageAlt)}"${dimensions}></div>
    </section>
    <aside class="download-notice detail-notice"><h2>${escape(app.downloadNotice.title)}</h2><p>${escape(app.downloadNotice.text)}</p></aside>
    <section class="detail-section">
      <div class="detail-section-heading"><p class="eyebrow">What it does</p><h2>Built around the useful part.</h2></div>
      ${list(app.features, "detail-feature-grid")}
    </section>
    <section class="detail-section detail-two-column">
      <article class="detail-panel"><p class="eyebrow">Get started</p><h2>From download to ready.</h2>${list(app.installSteps, "step-list", "ol")}</article>
      <article class="detail-panel"><p class="eyebrow">Good to know</p><h2>Clear before you install.</h2>${list(app.goodToKnow, "plain-list")}</article>
    </section>
    ${guides.length ? `<section class="detail-section">
      <div class="detail-section-heading"><p class="eyebrow">Windows guides</p><h2>Start with the problem you are trying to solve.</h2></div>
      <div class="guide-grid">${guides.map((guide) => `<a class="guide-card" href="${escape(guide.url)}"><h3>${escape(guide.title)}</h3><p>${escape(guide.description)}</p><span>Read guide →</span></a>`).join("")}</div>
    </section>` : ""}
    <section class="detail-cta">
      <div><p class="eyebrow">Version ${escape(app.version)}</p><h2>Ready to try ${escape(app.name)}?</h2>${terms}</div>
      <div class="detail-cta-actions">${buttons}</div>
    </section>
  `.replace(/[ \t]+$/gm, "");
  }

  if (typeof module !== "undefined" && module.exports) module.exports = renderAppDetail;
  if (typeof document !== "undefined") {
    const root = document.getElementById("app-detail");
    // Published pages already contain the full content. Never replace it on load.
    if (!root || root.children.length) return;
    const app = (scope.PILOT_LIGHT_APPS || []).find((item) => item.slug === document.body.dataset.appSlug);
    if (app) root.innerHTML = renderAppDetail(app);
  }
})(typeof window !== "undefined" ? window : globalThis);
