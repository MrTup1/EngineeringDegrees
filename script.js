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

  if (height >= 870) {
    header.style.height = "12vh";
    footer.style.height = "13vh";
  }

  if (height >= 972) {
    header.style.height = "10vh";
    footer.style.height = "10vh";
  }

  if (banner != null) {
    if (height >= 870) {
      banner.style.height = "24vh";
      pageTitle.style.top = "14vh";
    }

    if (height >= 972) {
      banner.style.height = "20vh";
      pageTitle.style.top = "12vh";
    }
  } else if (banner2 != null) {
    if (height >= 870) {
      banner2.style.height = "24vh";
      pageTitle.style.top = "14vh";
    }

    if (height >= 972) {
      banner2.style.height = "20vh";
      pageTitle.style.top = "12vh";
    }
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
