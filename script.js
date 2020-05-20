window.addEventListener("DOMContentLoaded", () => {
  const aNavLink = document.querySelectorAll(".nav-link");
  for (let link of aNavLink) {
    link.onclick = (e) => {
      const hrefValue = link.getAttribute("href");
      const divPage = document.querySelector(hrefValue);
      const oT = divPage.offsetTop;
      window.scroll({
        top: oT,
        left: 0,
        behavior: "smooth",
      });

      return false;
    };
  }

  window.onscroll = () => {
    if (window.scrollY > window.innerHeight / 2) {
      console.log("da");
    }
  };
});
