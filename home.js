console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("form submit");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const giveCompliment = (event) => {
  event.preventDefault();
  alert("You are purrfect!");
};

let hoverOverImage = document.querySelector("#kitten");
hoverOverImage.addEventListener("mouseover", giveCompliment);
