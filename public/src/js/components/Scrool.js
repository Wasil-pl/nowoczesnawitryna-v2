class Scroll {
  constructor() {
    const thisScroll = this;

    thisScroll.initScroll();
  }

  initScroll() {
    const thisScroll = this;

    thisScroll.elements = document.querySelectorAll(".animate");
    thisScroll.elementRight = document.querySelectorAll(".animate-right");
    thisScroll.elementLeft = document.querySelectorAll(".animate-left");

    const offset = 300;
    const windowHeight = window.innerHeight;

    window.addEventListener("scroll", () => {
      thisScroll.elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
          element.classList.add("fade-in");
        }
      });

      thisScroll.elementRight.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - offset) {
          element.classList.add("fade-in-right");
        }
      });

      thisScroll.elementLeft.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - offset) {
          element.classList.add("fade-in-left");
        }
      });
    });
  }
}

export default Scroll;
