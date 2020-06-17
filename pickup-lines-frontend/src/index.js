fetch('http://localhost:3000/pickuplines')
 .then(res => res.json())
 .then((pickuplines) => displayPickuplines(pickuplines))


 
const displayPickuplines = (pickuplines) => {
  const div = document.querySelector('.pickuplines');

  pickuplines.forEach((pickupline) => {
    const innerDiv = document.createElement("div");
    const content = document.createElement('h5');
    const category = document.createElement('h6');
    const createdBy = document.createElement('p');

    const fireLikeEle = createButton(pickupline, pickupline.fireLikeCount, "fire", "../assets/fire.png")
    const cryLikeEle = createButton(pickupline, pickupline.cryLikeCount, "cry", "../assets/fire.png")
    const evilLikeEle = createButton(pickupline, pickupline.seenoevilLikeCount, "seenoevil", "../assets/fire.png")
    const thinkingLikeEle = createButton(pickupline, pickupline.thinkingLikeCount, "thinking", "../assets/fire.png")

    content.textContent = pickupline.content
    category.textContent = pickupline.category
    createdBy.textContent = `created by ${pickupline.createdBy}`
    
    innerDiv.append(content, category, createdBy, fireLikeEle, cryLikeEle, evilLikeEle, thinkingLikeEle)
    div.append(innerDiv);
  });
}



const createButton = (pickupline, likeCount, buttonType, imgSrc) => {
    const buttonContainer = document.createElement('div'); 
    const img = document.createElement('img');
    img.src = imgSrc
    const count = document.createElement('p');
    count.textContent = likeCount
    
    img.addEventListener('click', () => {
        const options = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              buttonType: buttonType
            })
        };
        fetch(`http://localhost:3000/pickuplines/${pickupline.id}`, options)
        .then(res => res.json())
        .then(pickupline => {
            count.textContent = `${pickupline.likeCount}`;
            console.log(pickupline)
        })

    })
     
    buttonContainer.append(img, count)
    return buttonContainer
    
}


const filterDiv = document.querySelector('header .filter');
filterDiv.addEventListener('click', (e) => {
  console.log(e.target)
  fetch('http://localhost:3000/pickuplines')
    .then(res => res.json())
    .then(pickuplines => {
      pickuplinesFiltered = pickuplines.map(() => {
        
      })
      displayPickuplines(pickuplines)
    }) 
})
