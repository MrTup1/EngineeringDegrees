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
    footer.style.height = "12vh";
    banner.style.height = "24vh";
    pageTitle.style.top = "15vh";
  }

  if (height >= 972) {
    header.style.height = "10vh";
    footer.style.height = "8vh";
    banner.style.height = "20vh";
    pageTitle.style.top = "12.5vh";
  }
}
