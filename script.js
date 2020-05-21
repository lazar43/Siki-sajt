window.addEventListener("DOMContentLoaded", () => {
  const aNavLink = document.querySelectorAll(".nav-link");
  const header = document.querySelector("header");
  const homeSection = document.querySelector("#home");
  const sections = document.querySelectorAll("section");

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
  // First IntersectionObserver
  const height = homeSection.offsetHeight / 2;

  const options = {
    rootMargin: `-${height}px`,
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

  observer.observe(homeSection);

  window.onscroll = () => {
    const scrollPosition = window.scrollY + 74;

    sections.forEach((item) => {
      // console.log(item.offsetTop);
      if (item.offsetTop <= scrollPosition) {
        const activeElement = document.querySelectorAll(".nav-link");

        activeElement.forEach((item) => {
          item.classList.remove("active");
        });

        let link = document.querySelector(`a[href='#${item.id}']`);
        link.classList.add("active");
      }
    });
  };
});
