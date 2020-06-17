const createPickuplineDiv = document.querySelector('.create-pickupline-container');
const createPickuplineButton = document.querySelector('#create-pickupline-button');

createPickuplineButton.addEventListener('click', () => {
  const visibility = createPickuplineDiv.style.visibility
  if (visibility === "hidden") {
    createPickuplineDiv.style.visibility = "initial"
  } else {
    createPickuplineDiv.style.visibility = "hidden"
  }
})