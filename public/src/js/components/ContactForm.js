/* eslint-disable no-undef */
import { API_URL, emailRegex } from "../settings.js";

class ContactForm {
  constructor() {
    const thisForm = this;

    thisForm.initContactForm();
  }

  initContactForm() {
    const thisForm = this;

    thisForm.contactForm = document.querySelector(".contact-form");

    if (!thisForm.contactForm) {
      return;
    }

    thisForm.contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (thisForm.isValid()) {
        thisForm.sendEmail();
      }
    });
  }

  isValid() {
    const title = document.querySelector("#inputTitle").value;
    const email = document.querySelector("#inputEmail").value;
    const message = document.querySelector("#inputTextArea").value;

    if (title === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Proszę wpisać tytuł wiadomości",
      });

      return false;
    }

    if (email === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Proszę wpisać adres email",
      });

      return false;
    }

    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Proszę wpisać poprawny adres email",
      });

      return false;
    }

    if (message === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Proszę wpisać treść wiadomości",
      });

      return false;
    }

    return true;
  }

  sendEmail() {
    const data = {
      title: document.querySelector("#inputTitle").value,
      email: document.querySelector("#inputEmail").value,
      message: document.querySelector("#inputTextArea").value,
    };

    fetch(`${API_URL}/email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        document.querySelector("#inputTitle").value = "";
        document.querySelector("#inputEmail").value = "";
        document.querySelector("#inputTextArea").value = "";
        return Swal.fire({
          icon: "success",
          title: "Wysłano",
          text: "Wiadomość została wysłana",
        });
      } else {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong",
        });
      }
    });
  }
}

export default ContactForm;
