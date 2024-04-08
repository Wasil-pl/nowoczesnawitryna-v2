const utils = {}; // eslint-disable-line no-unused-vars

utils.showContent = (buttonId, contentId, altButtonName) => {
  const button = document.getElementById(buttonId);
  const content = document.getElementById(contentId);
  const buttonName = button.innerHTML;

  if (!button || !content) {
    return;
  }

  button.addEventListener("click", () => {
    button.innerHTML =
      button.innerHTML === buttonName ? altButtonName : buttonName;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
};

export default utils;
