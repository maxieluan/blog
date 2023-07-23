(function(){const i=document.getElementById("lang"),d=document.getElementById("btn-navbar"),s=document.getElementById("navbar-menu"),a=document.getElementById("toc-collapse"),c=document.querySelectorAll("#toc a");i.addEventListener("change",o=>{const e=o.target.value;if(document.getElementById("currentLang").innerHTML.trim()==="en"){const n=window.location.pathname.split("/");window.location.href=`/${e}/${n.filter(l=>l!="").slice(0).join("/")}`}else if(e==="en"){const n=window.location.pathname.split("/");window.location.href=`/${n.filter(l=>l!="").slice(1).join("/")}`}}),d.addEventListener("click",()=>{s.classList.toggle("menu-hide"),localStorage.setItem("menu-show",!s.classList.contains("menu-hide"))});function r(){localStorage.getItem("menu-show")==="true"&&(s.classList.toggle("menu-hide"),localStorage.setItem("menu-show",!s.classList.contains("menu-hide")))}document.addEventListener("DOMContentLoaded",()=>{r()}),a.addEventListener("click",()=>{document.getElementById("TableOfContents").classList.toggle("small-hidden"),a.querySelectorAll("span").forEach(t=>{t.classList.toggle("hidden")})}),document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("pre"),e=document.querySelectorAll(".highlight");o.forEach(t=>{const n=document.createElement("button");n.className="copy-button hidden",n.type="button",n.innerText="Copy",n.addEventListener("click",()=>{navigator.clipboard.writeText(t.innerText),n.innerText="Copied!",setTimeout(()=>{n.innerText="Copy"},1e3)}),t.parentNode.insertBefore(n,t)}),e.forEach(t=>{t.addEventListener("mouseenter",()=>{t.querySelector(".copy-button").classList.remove("hidden")})}),e.forEach(t=>{t.addEventListener("mouseleave",()=>{t.querySelector(".copy-button").classList.add("hidden")})})}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("table").forEach(e=>{const t=document.createElement("div");t.className="table-container",e.parentNode.insertBefore(t,e),t.appendChild(e)})}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("h2, h3, h4, h5, h6").forEach(e=>{const t=document.createElement("a");t.className="anchor",t.href=`#${e.id}`,t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3V4m10 4h2.31l.32-3h2l-.32 3h2l.32-3h2l-.32 3H23v2h-1.9l-.2 2H23v2h-2.31l-.32 3h-2l.32-3h-2l-.32 3h-2l.32-3H13v-2h1.9l.2-2H13V8m4.1 2l-.2 2h2l.2-2h-2Z"/></svg>',e.insertBefore(t,e.firstChild)})}),window.addEventListener("scroll",()=>{const o=window.scrollY,e=document.getElementById("toc"),n=document.querySelector("main").getBoundingClientRect();o>=n.top&&e.classList.add("float"),o<=48&&e.classList.remove("float")}),window.addEventListener("scroll",()=>{var o;for(let e=0;e<c.length;e++)if(section=document.getElementById(c[e].hash.slice(1)),nextSection=document.getElementById((o=c[e+1])==null?void 0:o.hash.slice(1)),section.getBoundingClientRect().top<=48){if((nextSection==null?void 0:nextSection.getBoundingClientRect().top)<=48){c[e].classList.remove("active");continue}c[e].classList.add("active")}else c[e].classList.remove("active")})})();
