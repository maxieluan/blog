(function(){const v=document.getElementById("lang"),p=document.getElementById("btn-navbar"),s=document.getElementById("navbar-menu"),a=document.getElementById("toc-collapse"),r=document.getElementById("toc"),c=document.querySelectorAll("#toc a"),l=[],d=document.querySelector("main .home"),u=document.querySelector(".featured");v.addEventListener("change",n=>{const o=n.target.value;if(document.getElementById("currentLang").innerHTML.trim()==="en"){const t=window.location.pathname.split("/");window.location.href=`/${o}/${t.filter(i=>i!="").slice(0).join("/")}`}else if(o==="en"){const t=window.location.pathname.split("/");window.location.href=`/${t.filter(i=>i!="").slice(1).join("/")}`}}),p.addEventListener("click",()=>{s.classList.toggle("menu-hide"),localStorage.setItem("menu-show",!s.classList.contains("menu-hide"))});function L(){localStorage.getItem("menu-show")==="true"&&(s.classList.toggle("menu-hide"),localStorage.setItem("menu-show",!s.classList.contains("menu-hide")))}document.addEventListener("DOMContentLoaded",()=>{L()}),a&&a.addEventListener("click",()=>{const n=document.getElementById("TableOfContents");if(!n)return;n.classList.toggle("small-hidden"),a.querySelectorAll("span").forEach(e=>{e.classList.toggle("hidden")})}),document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelectorAll("pre"),o=document.querySelectorAll(".highlight");n.forEach(e=>{const t=document.createElement("button");t.className="copy-button hidden",t.type="button",t.innerText="Copy",t.addEventListener("click",()=>{navigator.clipboard.writeText(e.innerText),t.innerText="Copied!",setTimeout(()=>{t.innerText="Copy"},1e3)}),e.parentNode.insertBefore(t,e)}),o.forEach(e=>{e.addEventListener("mouseenter",()=>{e.querySelector(".copy-button").classList.remove("hidden")})}),o.forEach(e=>{e.addEventListener("mouseleave",()=>{e.querySelector(".copy-button").classList.add("hidden")})})}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("table").forEach(o=>{const e=document.createElement("div");e.className="table-container",o.parentNode.insertBefore(e,o),e.appendChild(o)})}),document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector("main.post");if(!n)return;n.querySelectorAll("h2, h3, h4, h5, h6").forEach(e=>{const t=document.createElement("a");t.className="anchor",t.href=`#${e.id}`,t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3V4m10 4h2.31l.32-3h2l-.32 3h2l.32-3h2l-.32 3H23v2h-1.9l-.2 2H23v2h-2.31l-.32 3h-2l.32-3h-2l-.32 3h-2l.32-3H13v-2h1.9l.2-2H13V8m4.1 2l-.2 2h2l.2-2h-2Z"/></svg>',e.insertBefore(t,e.firstChild)})});function y(){const n=window.scrollY,e=document.querySelector("main").getBoundingClientRect();n>=e.top&&r.classList.add("float"),n<=48&&r.classList.remove("float")}function E(){var n;for(let o=0;o<c.length;o++){let e=document.getElementById(c[o].attributes.href.value.slice(1)),t=document.getElementById((n=c[o+1])==null?void 0:n.attributes.href.value.slice(1));if(!(!e||!t))if(e.getBoundingClientRect().top<=0){if((t==null?void 0:t.getBoundingClientRect().top)<=0){c[o].classList.remove("active");continue}c[o].classList.add("active")}else c[o].classList.remove("active")}}function h(){const n=d.querySelectorAll("li");function o(e){e.classList.add("fade-in-from-side")}n.length>0&&n.forEach((e,t)=>{setTimeout(()=>{o(e)},100*t)})}function w(){const n=u.querySelectorAll("li");let o=window.innerHeight*.8;function e(t){t.classList.add("fade-in-from-side")}u.getBoundingClientRect().top<=o&&n.forEach(t=>{n.forEach((i,g)=>{setTimeout(()=>{e(i)},100*g)})})}let S=[h,w];function B(n,o){let e=l[n],t=l[o],i=e.getBoundingClientRect().top,b=t.getBoundingClientRect().top-i;return new Promise(C=>{window.scrollBy({top:b,behavior:"smooth"}),setTimeout(()=>{C(),S[o]()},1e3)})}let f=!1;r!==null&&window.addEventListener("scroll",()=>{f||(window.requestAnimationFrame(()=>{y(),E()}),f=!0)});let m=!1;if(d!==null){let e=function(t){if(t.preventDefault(),!m){let i=n;m=!0,n+=1,n>=l.length&&(n=0),Promise.all([B(i,n)]).then(()=>{m=!1})}};var T=e;let n=0;h(),l.push(d),l.push(u);const o=document.querySelector("main");o.addEventListener("wheel",e),o.addEventListener("scroll",t=>{t.preventDefault()}),o.addEventListener("touchmove",e)}})();
