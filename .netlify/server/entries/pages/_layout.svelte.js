import { c as create_ssr_component } from "../../chunks/index2.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-evnycn{border:0;margin:0;margin:0;font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1c0579h_START --><link rel="${"stylesheet"}" href="${"https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"}" class="${"svelte-evnycn"}"><!-- HEAD_svelte-1c0579h_END -->`, ""}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
