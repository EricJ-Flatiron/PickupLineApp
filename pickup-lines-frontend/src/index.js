fetch('http://localhost:3000/pickuplines')
 .then(res => res.json())
 .then((pickuplines) => displayPickuplines(pickuplines))

const displayPickuplines = (pickuplines) => {
  const div = document.querySelector('.pickuplines');
  div.textContent = ''
  console.log(pickuplines)
  pickuplines.forEach((pickupline) => {
    const innerDiv = document.createElement("div");
    innerDiv.className = "card"
    const content = document.createElement('h4'); 
    const category = document.createElement('h5');
    const createdBy = document.createElement('h5');

    
    const reactionContainer = document.createElement('div');
    reactionContainer.className = "reaction-container";
    const fireLikeEle = createButton(pickupline, pickupline.fireLikeCount, "fire", "./assets/fire.png")
    const cryLikeEle = createButton(pickupline, pickupline.cryLikeCount, "cry", "./assets/crying.png")
    const evilLikeEle = createButton(pickupline, pickupline.seenoevilLikeCount, "seenoevil", "./assets/seenoevil.png")
    const thinkingLikeEle = createButton(pickupline, pickupline.thinkingLikeCount, "thinking", "./assets/thinking.png")
    reactionContainer.append(fireLikeEle, cryLikeEle, evilLikeEle, thinkingLikeEle)
    
    content.textContent = pickupline.content
    category.textContent = pickupline.category
    createdBy.textContent = `created by: ${pickupline.createdBy}`
    
    innerDiv.append(content, category, createdBy, reactionContainer)
    div.append(innerDiv);
  });
}



const createButton = (pickupline, likeCount, buttonType, imgSrc) => {
    const buttonContainer = document.createElement('div'); 
    buttonContainer.className = "button-container"
    const img = document.createElement('img');
    img.src = imgSrc;
    img.className = "reaction-img"
    const count = document.createElement('p');
    count.className = "reaction-count"
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
       switch (buttonType){
         case "fire":
           fireMove();
           break;
         case "cry":
           cryMove();
           break;  
       }

    })
     
    buttonContainer.append(img, count)
    return buttonContainer
    
}


const filterDiv = document.querySelector('header .filter');
filterDiv.addEventListener('click', (e) => {
  console.log(e.target.id)
  fetch('http://localhost:3000/pickuplines')
    .then(res => res.json())
    .then(pickuplines => {
      pickuplinesFiltered = pickuplines.filter((pickupline) => {
        if (pickupline.category == e.target.id) {
          return pickupline
        }
      })
      console.log(pickuplinesFiltered)
      if (pickuplinesFiltered.length > 0) {
        displayPickuplines(pickuplinesFiltered)
      }
    }) 
})


function fireMove() {
  const img = document.createElement('img');
  img.src = './assets/fire.png'
  img.style.width = '50px';
  img.style.height = '50px';

  // let elem1 = document.getElementById("fireAnimate1");

  let elem1 = document.createElement('div');
  elem1.id = "fireAnimate1"
  elem1.append(img);
  document.body.append(elem1);
  // let elem2 = document.getElementById("fireAnimate2");
  // let elem3 = document.getElementById("fireAnimate3");
  // let elem4 = document.getElementById("fireAnimate4");
  // let elem5 = document.getElementById("fireAnimate5");
  // let elem6 = document.getElementById("fireAnimate6");  
  // let elem7 = document.getElementById("fireAnimate7");
  // let elem8 = document.getElementById("fireAnimate8");
  // let elem9 = document.getElementById("fireAnimate9");
  let pos = 0;
  let id = setInterval(frame, 2);
  function frame() {
    if (pos == 1300) {
      // remove from dom
      elem1.remove();
      clearInterval(id);
    } else {
      pos += 2; 
      elem1.style.bottom = pos + 'px'; 
      elem2.style.bottom = pos + 'px'; 
      elem3.style.bottom = pos + 'px'; 
      elem4.style.bottom = pos + 'px'; 
      elem5.style.bottom = pos + 'px'; 
      elem6.style.bottom = pos + 'px'; 
      elem7.style.bottom = pos + 'px';
      elem8.style.bottom = pos + 'px';
      elem9.style.bottom = pos + 'px';
      // elem.style.left = pos + 'px'; 
    }
  }
}

function cryMove() {
  let elem1 = document.getElementById("cryAnimate1"); 
  let elem2 = document.getElementById("cryAnimate2");
  let elem3 = document.getElementById("cryAnimate3");
  let elem4 = document.getElementById("cryAnimate4");
  let elem5 = document.getElementById("cryAnimate5");
  let elem6 = document.getElementById("cryAnimate6");  
  let elem7 = document.getElementById("cryAnimate7");
  let elem8 = document.getElementById("cryAnimate8");
  let elem9 = document.getElementById("cryAnimate9");
  let pos = -50;
  let id = setInterval(frame, 2);
  function frame() {
    if (pos == 1500) {
      clearInterval(id);
    } else {
      pos += 2; 
      elem1.style.top = pos + 'px'; 
      elem2.style.top = pos + 'px'; 
      elem3.style.top = pos + 'px'; 
      elem4.style.top = pos + 'px'; 
      elem5.style.top = pos + 'px'; 
      elem6.style.top = pos + 'px'; 
      elem7.style.top = pos + 'px';
      elem8.style.top = pos + 'px';
      elem9.style.top = pos + 'px';
      // elem.style.left = pos + 'px'; 
    }
  }
}