window.addEventListener("DOMContentLoaded", () => {
  const aNavLink = document.querySelectorAll(".nav-link");
  const divNavLink = document.querySelectorAll(".div-nav-link");
  const header = document.querySelector("header");
  const homeSection = document.querySelector("#home");
  const sections = document.querySelectorAll("section");

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

  btn.onclick = () => {
    const iframe = document.querySelector(".iframe");
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.0110728054447!2d20.464108815535347!3d44.80096297909864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a700bd270319f%3A0x9c9658c39d9277d!2sBulevar%20oslobo%C4%91enja%2015%2C%20Beograd!5e0!3m2!1sen!2srs!4v1590094052860!5m2!1sen!2srs";
    console.log(iframe);
  };
});
