window.addEventListener("DOMContentLoaded", () => {
  const aNavLink = document.querySelectorAll(".nav-link");
  const divNavLink = document.querySelectorAll(".div-nav-link");
  const header = document.querySelector("header");
  const homeSection = document.querySelector("#home");
  const sections = document.querySelectorAll("section");
  const adrese = document.querySelectorAll(".adresa");

  for (let link of aNavLink) {
    link.onclick = (e) => {
      const hrefValue = link.getAttribute("href");
      const divPage = document.querySelector(hrefValue);
      const oT = divPage.offsetTop;
      window.scroll({
        top: oT - header.offsetHeight,
        left: 0,
        behavior: "smooth",
      });

      return false;
    };
  }

  for (let link2 of divNavLink) {
    link2.onclick = (e) => {
      const hrefValue = link2.getAttribute("href");
      const divPage = document.querySelector(hrefValue);
      const oT = divPage.offsetTop;
      window.scroll({
        top: oT - header.offsetHeight,
        left: 0,
        behavior: "smooth",
      });

      return false;
    };
  }

  window.onscroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= homeSection.offsetHeight / 2 - header.offsetHeight) {
      header.style.transform = "translateY(0)";
    } else {
      header.style.transform = "translateY(-100%)";
    }

    sections.forEach((item) => {
      if (item.offsetTop <= scrollPosition + header.offsetHeight) {
        const activeElement = document.querySelectorAll(".nav-link");

        activeElement.forEach((item) => {
          item.classList.remove("active");
        });

        let link = document.querySelector(`a[href='#${item.id}']`);
        link.classList.add("active");
      }
    });
  };

  adrese.forEach((adresa) => {
    const src = adresa.getAttribute("data-src");
    const iframe = document.querySelector(".iframe");

    if (src) {
      adresa.onclick = () => {
        iframe.src = src;
      };
    }
  });
});
