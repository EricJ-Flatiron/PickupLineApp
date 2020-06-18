const createPickuplineContainerForm = document.querySelector('.create-pickupline-container form')
createPickuplineContainerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const category = document.querySelector("#category").value
  const content = document.querySelector("input[name='content']").value

  fetch('http://localhost:3000/pickuplines', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: username, 
        password: password
    })
  })
  .then(res => res.json())
  .then(pickupline => {
    console.log(pickupline)
    createPickuplineDiv.style.visibility = "hidden"
    displayPickupLine(pickupline)
    // window.location.href = './index.html'
  })
})
