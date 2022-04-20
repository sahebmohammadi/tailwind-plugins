// icons
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

const themeSwicherBtns = document.querySelectorAll(".theme-swithcer");

// theme vars :

const userThme = localStorage.getItem("theme");
const systemThme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (userThme === "dark" || (!userThme && systemThme)) {
  document.documentElement.classList.add("dark");
  sunIcon.classList.add("hidden");
} else {
  document.documentElement.classList.remove("dark");
  moonIcon.classList.add("hidden");
}

function iconSwith(theme) {
  if ((theme = "dark")) {
    sunIcon.classList.add("hidden");
    moonIcon.classList.remove("hidden");
  } else if (theme === "light") {
    sunIcon.classList.remove("hidden");
    moonIcon.classList.add("hidden");
  }
}

// switcher :
themeSwicherBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    const theme = e.target.dataset.theme; //dark, light, system :
    switch (theme) {
      case "dark": {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        iconSwith("dark");
        break;
      }
      case "light": {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconSwith("light");
        break;
      }
      case "system": {
        localStorage.removeItem("theme");
        if (systemThme) {
          document.documentElement.classList.add("dark");
          iconSwith("dark");
        } else {
          document.documentElement.classList.remove("dark");
          iconSwith("light");
        }
        break;
      }
      default:
        break;
    }
  });
});
