const width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
const height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;
window.onload = sizeAdjust();
function sizeAdjust() {
  let header = document.querySelector("#trapezoid1");
  let footer = document.querySelector("#trapezoid2");
  let headerRight = document.querySelector("#headerRight");
  let banner = document.querySelector("#introBanner");
  let banner2 = document.querySelector("#aboutBanner");
  let pageTitle = document.querySelector("#pageTitle");
  let homeIcon = document.querySelector(".homeIcon");

  if (homeIcon != null) {
    footer.style.marginTop = "300px";
  }

  /* Collapsible Menu */
  document.querySelectorAll(".menuButton").forEach((button) => {
    button.addEventListener("click", () => {
      const menuContent = button.nextElementSibling;

      button.classList.toggle("menuButton--active");

      if (button.classList.contains("menuButton--active")) {
        menuContent.style.marginTop = "10px";
        menuContent.style.maxHeight = menuContent.scrollHeight + "px";
      } else {
        menuContent.style.maxHeight = 0;
        menuContent.style.marginTop = "-30px";
      }
    });
  });
}
