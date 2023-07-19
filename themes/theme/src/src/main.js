const language = document.getElementById("lang");
const btnNavbar = document.getElementById("btn-navbar");
const menu = document.getElementById("navbar-menu");

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