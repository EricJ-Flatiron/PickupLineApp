const createPickuplineContainer = document.querySelector('.create-pickupline-container form')
createPickuplineContainer.addEventListener('submit', (e) => {
  e.preventDefault();

  const category = document.querySelector("#category").value
  const content = document.querySelector("input[name='content']").value

  fetch('http://localhost:3000/pickuplines', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      category: category, 
      content: content
    })
  })
  .then(res => res.json())
  .then(json => {
    console.log(json)
    // window.location.href = './index.html'
  })
})

