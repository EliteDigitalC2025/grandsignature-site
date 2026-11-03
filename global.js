/* Shared navigation, footer and contact links for GrandSignature Properties. */
(() => {
  "use strict";
  const nav = [
    ["Home","index.html"],["About","about.html"],
    ["Property Collection","portfolio.html"],["Land Collection","lands.html"],
    ["Blog","blog.html"],["Contact","contact.html"]
  ];
  const page = location.pathname.split("/").pop() || "index.html";
  const active = ({"pdp.html":"portfolio.html","land-pdp.html":"lands.html"})[page] || page;
  const header = document.getElementById("gs-header");
  const footer = document.getElementById("gs-footer");
  if (header) {
    const links = nav.map(([label,url]) => `<li><a href="${url}" ${active === url ? 'aria-current="page"' : ''}>${label}</a></li>`).join("");
    header.innerHTML = `<nav class="gs-nav" aria-label="Main navigation"><a class="gs-logo" href="index.html">GRAND<span>SIGNATURE</span></a><button class="gs-menu" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="gs-nav-links">☰</button><ul class="gs-links" id="gs-nav-links">${links}</ul></nav>`;
    const toggle = header.querySelector(".gs-menu");
    const linksElement = header.querySelector(".gs-links");
    const close = () => {linksElement.classList.remove("is-open");toggle.setAttribute("aria-expanded","false");toggle.textContent="☰"};
    toggle.addEventListener("click", () => {const open=linksElement.classList.toggle("is-open");toggle.setAttribute("aria-expanded",String(open));toggle.textContent=open?"✕":"☰"});
    linksElement.querySelectorAll("a").forEach(a => a.addEventListener("click",close));
    document.addEventListener("keydown",e => {if(e.key==="Escape")close()});
  }
  if (footer) {
    const sitemap = [["Home","index.html"],["About Us","about.html"],["Property Collection","portfolio.html"],["Land Collection","lands.html"],["Contact","contact.html"],["Blog","blog.html"]];
    const cities = [["Lagos","Lagos"],["Abuja","Abuja"],["Port Harcourt","Port Harcourt"],["Ibadan","Ibadan"],["Asaba","Asaba"],["Ogun","Ogun"],["Enugu","Enugu"],["Aba","Aba"]];
    const items = list => list.map(([label,url]) => `<li><a href="${url}">${label}</a></li>`).join("");
    footer.innerHTML = `<div class="gs-inner"><div class="gs-grid"><div class="gs-about"><a href="index.html" class="gs-brand">GRAND<span>SIGNATURE</span></a><p class="gs-description">Curating real estate opportunities across Nigeria. We assist clients with property enquiries, viewings and consultations.</p><div class="gs-contact"><strong>Office</strong><p>Tina Johnson Close, Coastal Road,<br>Salem Okun-Ajah, beside Avista Beach,<br>Lekki-Epe Expressway, Eti-Osa LGA,<br>Lagos 106104, Nigeria.</p></div><div class="gs-contact"><strong>WhatsApp</strong><a href="https://wa.me/2348114452433">+234 811 445 2433</a></div><div class="gs-contact"><strong>Email</strong><a href="mailto:info@grandsignatureproperties.com">info@grandsignatureproperties.com</a></div></div><div><h4>Sitemap</h4><ul>${items(sitemap)}</ul></div><div><h4>Focus Cities</h4><ul>${items(cities.map(([label,city])=>[label,"lands.html?city="+encodeURIComponent(city)]))}</ul></div><div><h4>Legal</h4><ul>${items([["Privacy Policy","privacy-policy.html"],["Terms of Use","terms.html"],["FAQ","faq.html"]])}</ul></div><div><h4>Social</h4><ul><li><span>Instagram</span></li><li><span>LinkedIn</span></li><li><span>YouTube</span></li><li><span>X / Twitter</span></li><li><span>TikTok</span></li></ul></div></div><div class="gs-bottom">© 2026 GrandSignature Properties. All Rights Reserved.</div></div>`;
  }
  if (!document.getElementById("gs-whatsapp")) {
    const a = document.createElement("a");
    a.id="gs-whatsapp";a.href="https://wa.me/2348114452433";a.target="_blank";a.rel="noopener noreferrer";a.setAttribute("aria-label","Chat on WhatsApp");
    a.innerHTML='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 .8A15.1 15.1 0 0 0 2.9 23.4L.8 31l7.8-2A15.2 15.2 0 1 0 16 .8zm0 27.6c-2.4 0-4.7-.6-6.7-1.9l-.5-.3-4.6 1.2 1.2-4.5-.3-.5a12.5 12.5 0 1 1 10.9 6zm6.9-9.4c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.6-.2-.8.2-.2.4-.9 1.2-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.2-2.9c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1.1.5-.4.4-1.4 1.4-1.4 3.3s1.5 3.7 1.7 4c.2.2 3 4.5 7.2 6.3 1 .4 1.8.6 2.4.8 1 .3 2 .2 2.7.1.8-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z"/></svg>';
    document.body.appendChild(a);
  }
})();
