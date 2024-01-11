import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const logo = "/_app/immutable/assets/littlelite_logo.GWj-aTC3.png";
const css = {
  code: "img.rounded-corners.svelte-8hzq6v{border-radius:30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `  <div class="px-4 py-5 my-5 text-center" data-svelte-h="svelte-1gnr2qr"><img class="d-block mx-auto mb-4 rounded-corners svelte-8hzq6v" alt="LittleLite Software"${add_attribute("src", logo, 0)} width="400px"> <h1 class="display-5 fw-bold"> </h1> <div class="col-lg-6 mx-auto"><div class="d-grid gap-2 d-sm-flex justify-content-sm-center"><a href="/more" type="button" class="btn btn-outline-secondary btn-lg px-4">Enter</a></div></div> </div>`;
});
export {
  Page as default
};
