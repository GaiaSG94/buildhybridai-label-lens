/** Escape model or user text before it goes into a template string. */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Build one element from an HTML string. */
export function el(html: string): HTMLElement {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  const first = template.content.firstElementChild;
  if (!first) throw new Error('empty template');
  return first as HTMLElement;
}

export function formatMs(ms: number): string {
  if (ms <= 0) return '—';
  return ms >= 1000 ? `${(ms / 1000).toFixed(1)} s` : `${Math.round(ms)} ms`;
}

export function formatDate(timestamp: number, withTime = true): string {
  const options: Intl.DateTimeFormatOptions = withTime
    ? { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }
    : { day: '2-digit', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-GB', options).format(new Date(timestamp));
}

/** The tag motif: LOCAL is a flat fill, CLOUD is always hatched. */
export function provenanceTag(provenance: 'local' | 'cloud'): string {
  return provenance === 'local'
    ? '<span class="tag l">LOCAL</span>'
    : '<span class="tag c">CLOUD</span>';
}

export function zoneTag(zone: number | undefined, text: string, kind = 'n'): string {
  const number = zone === undefined ? '' : String(zone).padStart(2, '0');
  return `<span class="tag ${kind}">${number}${number ? ' ' : ''}${escapeHtml(text)}</span>`;
}
