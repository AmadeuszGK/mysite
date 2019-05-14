const websiteContent = document.querySelector(".website-content");
const menuButton = document.querySelector(".menu-button");
const mainContentButton = document.querySelector(".main-content-button");
const navButtons = document.querySelectorAll(".navButton");
const menuButtonIcon = document.querySelector("#nav-icon3");

menuButton.addEventListener("click", function() {
  menuButtonIcon.classList.toggle("open");
  if (websiteContent.hasAttribute("showmenu")) {
    websiteContent.removeAttribute("showmenu");
  } else {
    websiteContent.setAttribute("showmenu", true);
  }
});

mainContentButton.addEventListener("click", function() {
  websiteContent.removeAttribute("showmenu");
  menuButtonIcon.classList.toggle("open");
});

for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener("click", function() {
    websiteContent.removeAttribute("showmenu");
    menuButtonIcon.classList.toggle("open");
  });
}
