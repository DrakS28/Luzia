/* Native SVG links work without JavaScript; this applies optional destinations. */
'use strict';
for (const link of document.querySelectorAll('[data-link]')) {
  const value = (window.LUZIA_LINKS || {})[link.dataset.link];
  if (typeof value !== 'string' || !/^(https?:\/\/|mailto:|tel:|#)/i.test(value.trim())) continue;
  link.setAttribute('href', value.trim());
  link.removeAttribute('aria-disabled');
  link.removeAttribute('tabindex');
  const title = link.querySelector('title');
  if (title) title.textContent = link.getAttribute('aria-label');
}
