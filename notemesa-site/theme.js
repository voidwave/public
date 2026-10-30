// Apply the saved theme before first paint to avoid a flash.
try {
  const t = localStorage.getItem('gitnote:theme');
  if (/^(light|dark|paper|blueprint|chalkboard|neon|terminal|amber)$/.test(t || '')) document.documentElement.dataset.theme = t;
} catch {}
