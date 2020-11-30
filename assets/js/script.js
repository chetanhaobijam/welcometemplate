const contactButton = document.querySelector(".contact-button");

const contacted = () => {
  alert("Thanks a lot for contacting us. Have a nice day :)");
}

contactButton.addEventListener("click", contacted);