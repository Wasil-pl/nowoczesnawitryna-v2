import { homePageTextWriter } from "./settings.js";
import ContactForm from "./components/ContactForm.js";
import Scroll from "./components/Scrool.js";
import TypingWriter from "./components/TypingWriter.js";

const app = {
  initContactForm: function () {
    const thisApp = this;

    thisApp.contactForm = new ContactForm();
  },

  initTypewriter: function () {
    const thisApp = this;

    const descryptionContainer = document.getElementById("description-main");

    if (!descryptionContainer) {
      return;
    }

    thisApp.typingWriter = new TypingWriter(
      descryptionContainer,
      homePageTextWriter
    );
  },

  initScroll: function () {
    const thisApp = this;

    thisApp.scroll = new Scroll();
  },

  init: function () {
    const thisApp = this;

    thisApp.initContactForm();
    thisApp.initTypewriter();
    thisApp.initScroll();
  },
};

app.init();
