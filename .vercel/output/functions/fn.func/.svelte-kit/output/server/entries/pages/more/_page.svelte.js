import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
const other = "/_app/immutable/assets/littlelite_other.sHYQIJdT.jpeg";
const sub = "/_app/immutable/assets/littlelite_sub.vadyBrSE.jpeg";
const offices = "/_app/immutable/assets/littlelite_offices.WGXFMpW9.jpeg";
const css = {
  code: ".shift.svelte-1sx9jpm{margin-left:140px}.llcard.svelte-1sx9jpm{width:22rem;height:500px\n}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `  <div class="row pt-5 mt-5 text-center" data-svelte-h="svelte-1a3pvgd"><div class="col"><div class="card llcard svelte-1sx9jpm"><img${add_attribute("src", other, 0)} class="card-img-top" alt="LittleLite Offices #1"> <div class="card-body"><h5 class="card-title">Mission</h5> <p class="card-text"><a href="/">LittleLite Software</a> is a software factory
              specialized in niche online services and cryptography.</p></div></div></div> <div class="col"><div class="card llcard svelte-1sx9jpm"><img${add_attribute("src", sub, 0)} class="card-img-top" alt="LittleLite Offices #2"> <div class="card-body"><h5 class="card-title">Products</h5> <p class="card-text">LLCryptoLib - Alexandria - Travax</p></div></div></div> <div class="col"><div class="card llcard svelte-1sx9jpm"><img${add_attribute("src", offices, 0)} class="card-img-top" alt="LittleLite Offices #3"> <div class="card-body"><h5 class="card-title">Contacts</h5> <p class="card-text">Write to: <a>info21@littlelite.eu</a></p></div></div></div></div> <div class="row pt-5 mt-5" data-svelte-h="svelte-1xjieoq"><div class="col"></div> <div class="col"><a href="/" class="shift btn btn-outline-secondary svelte-1sx9jpm">Home</a></div> <div class="col"></div> </div>`;
});
export {
  Page as default
};
