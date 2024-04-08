import utils from "../utils.js";

class ShowText {
  constructor() {
    const thisShowText = this;

    thisShowText.initShowText();
  }

  initShowText() {
    const thisShowText = this;

    thisShowText.showText = utils.showContent(
      "myService-button",
      "myService-show-content",
      "Ukryj"
    );
  }
}

export default ShowText;
