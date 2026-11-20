/* Local-only interaction; no external libraries or network calls. */
(() => {
  const section = document.querySelector('.brands-section');
  if (!section) return;
  const toggle = section.querySelector('.marquee-toggle');
  toggle.addEventListener('click', () => {
    const paused = section.classList.toggle('is-paused');
    toggle.setAttribute('aria-pressed', String(paused));
    toggle.innerHTML = paused ? 'Resume movement <span aria-hidden="true">▶</span>' : 'Pause movement <span aria-hidden="true">Ⅱ</span>';
  });
  new IntersectionObserver(entries => {
    section.classList.toggle('is-offscreen', !entries[0].isIntersecting);
  }).observe(section);
  const updateVisibility = () => section.classList.toggle('is-hidden', document.hidden);
  document.addEventListener('visibilitychange', updateVisibility);
  updateVisibility();
})();
