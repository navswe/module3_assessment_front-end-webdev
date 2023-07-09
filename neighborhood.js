const restaurantRandomizer = (event) => {
  event.preventDefault();
  let restaurantsLinks = [
    "https://kimson.com/bellaire/",
    "https://malasichuan.com/",
    "https://crownseafoodrestaurant.com",
    "https://ordertonythai.com/",
    "https://www.mrwishusa.com/tx",
  ];
  const randomRestaurant =
    restaurantsLinks[Math.floor(Math.random() * restaurantsLinks.length)];
  alert(`Now redirecting you to ${randomRestaurant}. Hope you like it!`);
  window.location.href = randomRestaurant;
};

const restaurantRandomizerBtn = document.querySelector("#restaurantRandomizer");
restaurantRandomizerBtn.addEventListener("click", restaurantRandomizer);
