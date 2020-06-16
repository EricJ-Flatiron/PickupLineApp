fetch('http://localhost:3000/pickuplines')
 .then(res => res.json())
 .then(() => displayPickuplines)

const displayPickuplines = (pickuplines) => {
  const ul = document.querySelector('.pickuplines');

  pickuplines.forEach((pickupline) => {
    const li = document.createElement('li');
    const h5 = document.createElement('h5');
    const h6 = document.createElement('h6');
    const a = document.createElement('a');

    h5.textContent = pickupline.content
    h6.textContent = pickupline.category
    p.textContent = `created by ${pickupline.}`
    

    li.textContent = pickupline;
    ul.append(li);
  });
}