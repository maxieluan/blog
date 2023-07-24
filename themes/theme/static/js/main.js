(function(){const u=document.getElementById("lang"),m=document.getElementById("btn-navbar"),l=document.getElementById("navbar-menu"),a=document.getElementById("toc-collapse"),r=document.getElementById("toc"),i=document.querySelectorAll("#toc a");u.addEventListener("change",o=>{const e=o.target.value;if(document.getElementById("currentLang").innerHTML.trim()==="en"){const n=window.location.pathname.split("/");window.location.href=`/${e}/${n.filter(c=>c!="").slice(0).join("/")}`}else if(e==="en"){const n=window.location.pathname.split("/");window.location.href=`/${n.filter(c=>c!="").slice(1).join("/")}`}}),m.addEventListener("click",()=>{l.classList.toggle("menu-hide"),localStorage.setItem("menu-show",!l.classList.contains("menu-hide"))});function h(){localStorage.getItem("menu-show")==="true"&&(l.classList.toggle("menu-hide"),localStorage.setItem("menu-show",!l.classList.contains("menu-hide")))}document.addEventListener("DOMContentLoaded",()=>{h()}),a&&a.addEventListener("click",()=>{const o=document.getElementById("TableOfContents");if(!o)return;o.classList.toggle("small-hidden"),a.querySelectorAll("span").forEach(t=>{t.classList.toggle("hidden")})}),document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelectorAll("pre"),e=document.querySelectorAll(".highlight");o.forEach(t=>{const n=document.createElement("button");n.className="copy-button hidden",n.type="button",n.innerText="Copy",n.addEventListener("click",()=>{navigator.clipboard.writeText(t.innerText),n.innerText="Copied!",setTimeout(()=>{n.innerText="Copy"},1e3)}),t.parentNode.insertBefore(n,t)}),e.forEach(t=>{t.addEventListener("mouseenter",()=>{t.querySelector(".copy-button").classList.remove("hidden")})}),e.forEach(t=>{t.addEventListener("mouseleave",()=>{t.querySelector(".copy-button").classList.add("hidden")})})}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("table").forEach(e=>{const t=document.createElement("div");t.className="table-container",e.parentNode.insertBefore(t,e),t.appendChild(e)})}),document.addEventListener("DOMContentLoaded",()=>{const o=document.querySelector("main.post");if(!o)return;o.querySelectorAll("h2, h3, h4, h5, h6").forEach(t=>{const n=document.createElement("a");n.className="anchor",n.href=`#${t.id}`,n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3V4m10 4h2.31l.32-3h2l-.32 3h2l.32-3h2l-.32 3H23v2h-1.9l-.2 2H23v2h-2.31l-.32 3h-2l.32-3h-2l-.32 3h-2l.32-3H13v-2h1.9l.2-2H13V8m4.1 2l-.2 2h2l.2-2h-2Z"/></svg>',t.insertBefore(n,t.firstChild)})});function f(){const o=window.scrollY,t=document.querySelector("main").getBoundingClientRect();o>=t.top&&r.classList.add("float"),o<=48&&r.classList.remove("float")}function g(){var o;for(let e=0;e<i.length;e++)if(section=document.getElementById(i[e].attributes.href.value.slice(1)),nextSection=document.getElementById((o=i[e+1])==null?void 0:o.attributes.href.value.slice(1)),!(!section||!nextSection))if(section.getBoundingClientRect().top<=0){if((nextSection==null?void 0:nextSection.getBoundingClientRect().top)<=0){i[e].classList.remove("active");continue}i[e].classList.add("active")}else i[e].classList.remove("active")}function p(){const e=document.querySelector("main .home").querySelectorAll("li");function t(n){n.classList.add("fade-in-from-side")}e.length>0&&e.forEach((n,c)=>{setTimeout(()=>{t(n)},100*c)})}function v(){const o=document.querySelector(".featured"),e=o.querySelectorAll("li");let t=window.innerHeight*.8;function n(c){c.classList.add("fade-in-from-side")}o.getBoundingClientRect().top<=t&&e.forEach(c=>{e.forEach((y,L)=>{setTimeout(()=>{n(y)},100*L)})})}let s=[];r!==null&&(s.push(f),s.push(g)),console.log(document.querySelector("main .home")),document.querySelector("main .home")!==null&&(p(),s.push(v));let d=!1;window.addEventListener("scroll",()=>{d||(window.requestAnimationFrame(()=>{s.forEach(o=>{o()}),d=!1}),d=!0)})})();
