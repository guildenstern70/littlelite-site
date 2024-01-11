

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/more/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.U_T4rO8x.js","_app/immutable/chunks/scheduler.zMJaRgub.js","_app/immutable/chunks/index.PHW1MNHL.js"];
export const stylesheets = ["_app/immutable/assets/3.3HQGJAVf.css"];
export const fonts = [];
