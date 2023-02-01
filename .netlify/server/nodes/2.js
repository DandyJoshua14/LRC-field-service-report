import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export const file = '_app/immutable/components/pages/_page.svelte-4ee9a300.js';
export { server };
export const imports = ["_app/immutable/components/pages/_page.svelte-4ee9a300.js","_app/immutable/chunks/index-75f36661.js","_app/immutable/chunks/forms-64815c41.js","_app/immutable/chunks/singletons-05d66957.js","_app/immutable/chunks/parse-b67c4dc9.js"];
export const stylesheets = ["_app/immutable/assets/_page-c6e6236d.css","_app/immutable/assets/forms-60614438.css"];
export const fonts = [];
