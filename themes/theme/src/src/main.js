(function () {
  const language = document.getElementById("lang");
  const btnNavbar = document.getElementById("btn-navbar");
  const menu = document.getElementById("navbar-menu");
  const btnTocCollapse = document.getElementById("toc-collapse");
  const toc = document.getElementById("toc");
  const tocLinks = document.querySelectorAll("#toc a");
  const sections = [];
  const homeDiv = document.querySelector("main .home");
  const featuredDiv = document.querySelector(".featured");

  language.addEventListener("change", (e) => {
    const newLanguage = e.target.value;
    const currentLanguage = document.getElementById("currentLang").innerHTML;

    if (currentLanguage.trim() === "en") {
      const subdirectory = window.location.pathname.split("/");

      window.location.href = `/${newLanguage}/${subdirectory
        .filter((e) => {
          return e != "";
        })
        .slice(0)
        .join("/")}`;
    } else {
      if (newLanguage === "en") {
        const subdirectory = window.location.pathname.split("/");
        window.location.href = `/${subdirectory
          .filter((e) => {
            return e != "";
          })
          .slice(1)
          .join("/")}`;
      }
    }
  });

  btnNavbar.addEventListener("click", () => {
    menu.classList.toggle("menu-hide");

    // write to local storage

    localStorage.setItem("menu-show", !menu.classList.contains("menu-hide"));
  });

  function loadLocalStorage() {
    const menuShow = localStorage.getItem("menu-show");
    if (menuShow === "true") {
      menu.classList.toggle("menu-hide");

      // write to local storage
      localStorage.setItem("menu-show", !menu.classList.contains("menu-hide"));
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    loadLocalStorage();
  });

  // let mousemoving = false;
  // document.body.addEventListener("mousemove", () => {
  //     if (!mousemoving) {
  //         document.body.classList.add("show-scrollbar");
  //         mousemoving = true;
  //         setTimeout(() => {
  //             mousemoving = false;
  //             document.body.classList.remove("show-scrollbar");
  //         }, 1000);
  //     }
  // });

  // let wheeling = false;
  // document.body.addEventListener("wheel", () => {
  //     if (!wheeling) {
  //         document.body.classList.add("show-scrollbar");
  //         wheeling = true;
  //         setTimeout(() => {
  //             wheeling = false;
  //             document.body.classList.remove("show-scrollbar");
  //         }, 1000);
  //     }
  // });

  if (btnTocCollapse) {
    btnTocCollapse.addEventListener("click", () => {
      const toc = document.getElementById("TableOfContents");
      if (!toc) {
        return;
      }
      toc.classList.toggle("small-hidden");
      // find by selector, btnTocCollapse > span
      const btnTocCollapseSpan = btnTocCollapse.querySelectorAll("span");
      // span toggle hidden
      btnTocCollapseSpan.forEach((span) => {
        span.classList.toggle("hidden");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    const preBlocks = document.querySelectorAll("pre");
    const highlights = document.querySelectorAll(".highlight");

    preBlocks.forEach((preBlock) => {
      const copyButton = document.createElement("button");
      copyButton.className = "copy-button hidden";
      copyButton.type = "button";
      copyButton.innerText = "Copy";
      copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(preBlock.innerText);
        copyButton.innerText = "Copied!";

        setTimeout(() => {
          copyButton.innerText = "Copy";
        }, 1000);
      });
      preBlock.parentNode.insertBefore(copyButton, preBlock);
    });

    highlights.forEach((highlight) => {
      highlight.addEventListener("mouseenter", () => {
        const copyButton = highlight.querySelector(".copy-button");
        copyButton.classList.remove("hidden");
      });
    });

    highlights.forEach((highlight) => {
      highlight.addEventListener("mouseleave", () => {
        const copyButton = highlight.querySelector(".copy-button");
        copyButton.classList.add("hidden");
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const tables = document.querySelectorAll("table");
    tables.forEach((table) => {
      const div = document.createElement("div");
      div.className = "table-container";
      // wrap table with div
      table.parentNode.insertBefore(div, table);
      div.appendChild(table);
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const postMain = document.querySelector("main.post");
    if (!postMain) {
      return;
    }
    const headings = postMain.querySelectorAll("h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      const anchor = document.createElement("a");
      anchor.className = "anchor";
      anchor.href = `#${heading.id}`;
      anchor.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3V4m10 4h2.31l.32-3h2l-.32 3h2l.32-3h2l-.32 3H23v2h-1.9l-.2 2H23v2h-2.31l-.32 3h-2l.32-3h-2l-.32 3h-2l.32-3H13v-2h1.9l.2-2H13V8m4.1 2l-.2 2h2l.2-2h-2Z"/></svg>';
      heading.insertBefore(anchor, heading.firstChild);
    });
  });

  function updateTocFloat() {
    const scrollPosition = window.scrollY;
    const main = document.querySelector("main");
    const mainRect = main.getBoundingClientRect();

    if (scrollPosition >= mainRect.top) {
      toc.classList.add("float");
    }

    if (scrollPosition <= 48) {
      toc.classList.remove("float");
    }
  }

  function updateTocHighlight() {
    for (let i = 0; i < tocLinks.length; i++) {
      let section = document.getElementById(
        tocLinks[i].attributes.href.value.slice(1)
      );
      let nextSection = document.getElementById(
        tocLinks[i + 1]?.attributes.href.value.slice(1)
      );

      if (!section || !nextSection) {
        continue;
      }

      if (section.getBoundingClientRect().top <= 0) {
        if (nextSection?.getBoundingClientRect().top <= 0) {
          tocLinks[i].classList.remove("active");
          continue;
        }

        tocLinks[i].classList.add("active");
      } else {
        tocLinks[i].classList.remove("active");
      }
    }
  }

  function homePageHeIsAnimation() {
    const home_lis = homeDiv.querySelectorAll("li");

    function liFadeInFromSide(li) {
      li.classList.add("fade-in-from-side");
    }
    if (home_lis.length > 0) {
      home_lis.forEach((li, idx) => {
        setTimeout(() => {
          liFadeInFromSide(li);
        }, 100 * idx);
      });
    }
  }

  function featuredAnimation() {
    const featured_lis = featuredDiv.querySelectorAll("li");

    let eightyPercent = window.innerHeight * 0.8;
    function liFadeInFromSide(li) {
      li.classList.add("fade-in-from-side");
    }
    if (featuredDiv.getBoundingClientRect().top <= eightyPercent) {
      featured_lis.forEach((li) => {
        featured_lis.forEach((li, idx) => {
          setTimeout(() => {
            liFadeInFromSide(li);
          }, 100 * idx);
        });
      });
    }
  }

  let animations = [homePageHeIsAnimation, featuredAnimation]

  function scrollToSection(prevIdx, currentIdx) {
    let prev = sections[prevIdx];
    let section = sections[currentIdx];
    let currentPos = prev.getBoundingClientRect().top;
    let targetPos = section.getBoundingClientRect().top;
    let distance = targetPos - currentPos;

    // scroll window 'distance' pixels
    return new Promise((resolve) => {
      window.scrollBy({
        top: distance,
        behavior: "smooth",
      });
      setTimeout(() => {
        resolve();
        
      animations[currentIdx]();
      }, 500);
    });
  }

  let updatePending = false;
  if (toc !== null) {
    window.addEventListener("scroll", () => {
      if (!updatePending) {
        window.requestAnimationFrame(() => {
          updateTocFloat();
          updateTocHighlight();
        });
  
        updatePending = true;
      }
    });
  }

  let scrolling = false;
  if (homeDiv !== null) {
    let currentSection = 0;
    homePageHeIsAnimation();
    sections.push(homeDiv);
    sections.push(featuredDiv);
    const target = document.querySelector("main");

    function handleScroll(e) {
      if (!menu.classList.contains("menu-hide")) {
        btnNavbar.click();
      }
        // prevent default scroll
        e.preventDefault();
  
        if (!scrolling) {
          let prevIdx = currentSection;
          scrolling = true;
          currentSection += 1;
          if (currentSection >= sections.length) {
            currentSection = 0;
          }
          Promise.all([
            scrollToSection(prevIdx, currentSection)
          ]).then(() => {
            scrolling = false;
          })
        }
  
    }

    target.addEventListener("wheel", handleScroll);
    target.addEventListener("scroll", (e) => {
      e.preventDefault();
    });
    target.addEventListener("touchmove", handleScroll);
  }
})();
