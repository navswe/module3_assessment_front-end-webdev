function favColor(event) {
  event.preventDefault();
  alert("I think you can tell from this page.... my favorite color pink!");
}

const colorBtn = document.querySelector("#color");
colorBtn.addEventListener("click", favColor);

const favPlace = (event) => {
  event.preventDefault();
  alert("My favorite place is at home. I'm kind of a hermit...");
};

const favPlaceBtn = document.querySelector("#place");
favPlaceBtn.addEventListener("click", favPlace);

const favRitualBtn = document.querySelector("#ritual");
favRitualBtn.addEventListener("click", () => {
  alert(
    "My favorite ritual is to drink warm honey & lemon water when I wake up follow by a coffee about an hour after."
  );
});
