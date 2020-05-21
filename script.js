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
  const header = document.querySelector("header");
  const target = document.querySelector("#home");

  const options = {
    rootMargin: `-${target.offsetHeight / 2}px`,
  };

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        header.style.transform = "translateY(-100%)";
      } else {
        header.style.transform = "translateY(0)";
      }
    });
  }, options);

  observer.observe(target);
});
