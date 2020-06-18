fetch('http://localhost:3000/pickuplines')
  .then(res => res.json())
  .then((pickuplines) => {

    pickuplines.forEach(displayPickupLine)
  })

const displayPickupLine = (pickupline) => {
  const div = document.querySelector('.pickuplines');
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
  const crispyLikeEle = createButton(pickupline, pickupline.crispyLikeCount, "crispy", "./assets/crispy.png")
  crispyLikeEle.id = "crispyid";

  reactionContainer.append(fireLikeEle, cryLikeEle, evilLikeEle, thinkingLikeEle, crispyLikeEle)
  
  content.textContent = pickupline.content
  category.textContent = `category: ${pickupline.category}`
  createdBy.textContent = `created by: ${pickupline.createdBy}`
  
  innerDiv.append(content, category, createdBy, reactionContainer)
  div.append(innerDiv);
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
          cryingMove();
          break;
        case "seenoevil":
          seenoevilMove();
          break;
        case "thinking":
          thinkingMove();
          break;
        case "crispy":
          crispyMove();
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
        const div = document.querySelector('.pickuplines');
        div.textContent = ''
        pickuplinesFiltered.forEach(displayPickupLine)
      }
    }) 
})


function fireMove() {
  const body = document.querySelector('body');

  const elem1 = addFireElement();
  elem1.id = "fireAnimate1";

  const elem2 = addFireElement();
  elem2.id = "fireAnimate2";

  const elem3 = addFireElement();
  elem3.id = "fireAnimate3";

  const elem4 = addFireElement();
  elem4.id = "fireAnimate4";

  const elem5 = addFireElement();
  elem5.id = "fireAnimate5";

  const elem6 = addFireElement();
  elem6.id = "fireAnimate6";

  const elem7 = addFireElement();
  elem7.id = "fireAnimate7";

  const elem8 = addFireElement();
  elem8.id = "fireAnimate8";

  const elem9 = addFireElement();
  elem9.id = "fireAnimate9";

  const all_elements = [elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9]
  body.append(elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9);

  let pos = 0;
  let id = setInterval(frame, 2);
  function frame() {
    if (pos == 1000) {
      all_elements.forEach(elem => elem.remove());  // remove from dom

      clearInterval(id);
    } else {
      pos += 2; 
      all_elements.forEach(elem => elem.style.bottom = pos + 'px')
    }
  }
}

function addFireElement(){
  const element = document.createElement('div');

  const img = document.createElement('img');
  img.src = './assets/fire.png'
  img.style.width = '100px';
  img.style.height = '100px';

  element.append(img);
  return element;
}

function cryMove() {
  const body = document.querySelector('body');

  const elem1 = createCryElement();
  elem1.id = "cryAnimate1";

  const elem2 = createCryElement();
  elem2.id = "cryAnimate2";

  const elem3 = createCryElement();
  elem3.id = "cryAnimate3";

  const elem4 = createCryElement();
  elem4.id = "cryAnimate4";

  const elem5 = createCryElement();
  elem5.id = "cryAnimate5";

  const elem6 = createCryElement();
  elem6.id = "cryAnimate6";

  const elem7 = createCryElement();
  elem7.id = "cryAnimate7";

  const elem8 = createCryElement();
  elem8.id = "cryAnimate8";

  const elem9 = createCryElement();
  elem9.id = "cryAnimate9";

  const all_elements = [elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9]
  body.append(elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9);


  let pos = 0;
  let id = setInterval(frame, 2);
  function frame() {
    if (pos == 1000) {
      all_elements.forEach(elem => elem.remove());  // remove from dom

      clearInterval(id);
    } else {
      pos += 2; 
      all_elements.forEach(elem => elem.style.top = pos + 'px')
    }
  }
}

function createCryElement(){
  const element = document.createElement('div');

  const img = document.createElement('img');
  img.src = './assets/crying.png'
  img.style.width = '50px';
  img.style.height = '50px';

  element.append(img);
  return element;
}

function seenoevilMove() {
  const body = document.querySelector('body');

  const elem1 = addseenoevilElement();
  elem1.id = "seenoevilAnimate1";

  const elem2 = addseenoevilElement();
  elem2.id = "seenoevilAnimate2";

  const elem3 = addseenoevilElement();
  elem3.id = "seenoevilAnimate3";

  const elem4 = addseenoevilElement();
  elem4.id = "seenoevilAnimate4";

  const elem5 = addseenoevilElement();
  elem5.id = "seenoevilAnimate5";

  const elem6 = addseenoevilElement();
  elem6.id = "seenoevilAnimate6";

  const elem7 = addseenoevilElement();
  elem7.id = "seenoevilAnimate7";

  const elem8 = addseenoevilElement();
  elem8.id = "seenoevilAnimate8";

  const elem9 = addseenoevilElement();
  elem9.id = "seenoevilAnimate9";

  const all_elements = [elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9]
  body.append(elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9);

  let pos = 0;
  let id = setInterval(frame, 2);
  function frame() {
    if (pos == 1000) {
      all_elements.forEach(elem => elem.remove());  // remove from dom

      clearInterval(id);
    } else {
      pos += 2; 
      all_elements.forEach(elem => elem.style.bottom = pos + 'px')
    }
  }
}

function addseenoevilElement(){
  const element = document.createElement('div');

  const img = document.createElement('img');
  img.src = './assets/seenoevil.png'
  img.style.width = '50px';
  img.style.height = '50px';

  element.append(img);
  return element;
}

function crispyMove() {
  const body = document.querySelector('body');

  const elem1 = addcrispyElement();
  elem1.id = "crispyAnimate1";

  const elem2 = addcrispyElement();
  elem2.id = "crispyAnimate2";

  const elem3 = addcrispyElement();
  elem3.id = "crispyAnimate3";

  const elem4 = addcrispyElement();
  elem4.id = "crispyAnimate4";

  const elem5 = addcrispyElement();
  elem5.id = "crispyAnimate5";

  const elem6 = addcrispyElement();
  elem6.id = "crispyAnimate6";

  const elem7 = addcrispyElement();
  elem7.id = "crispyAnimate7";

  // const elem8 = addcrispyElement();
  // elem8.id = "crispyAnimate8";

  // const elem9 = addcrispyElement();
  // elem9.id = "crispyAnimate9";

  //, elem8, elem9
  const all_elements = [elem1, elem2, elem3, elem4, elem5 , elem6, elem7]
  body.append(elem1, elem2, elem3, elem4, elem5 , elem6, elem7);

  let pos = 0;
  let id = setInterval(frame, 2);
  function frame() {
    if (pos == 1000) {
      all_elements.forEach(elem => elem.remove());  // remove from dom

      clearInterval(id);
    } else {
      pos += 2; 
      all_elements.forEach(elem => elem.style.bottom = pos + 'px')
    }
  }
}

function addcrispyElement(){
  const element = document.createElement('div');

  const img = document.createElement('img');
  img.src = './assets/crispy.png'
  img.style.width = '100px';
  img.style.height = '100px';

  element.append(img);
  return element;
}
function thinkingMove() {
  const body = document.querySelector('body');

  const elem1 = addthinkingElement();
  elem1.id = "thinkingAnimate1";

  const elem2 = addthinkingElement();
  elem2.id = "thinkingAnimate2";

  const elem3 = addthinkingElement();
  elem3.id = "thinkingAnimate3";

  const elem4 = addthinkingElement();
  elem4.id = "thinkingAnimate4";

  const elem5 = addthinkingElement();
  elem5.id = "thinkingAnimate5";

  const elem6 = addthinkingElement();
  elem6.id = "thinkingAnimate6";

  const elem7 = addthinkingElement();
  elem7.id = "thinkingAnimate7";

  const elem8 = addthinkingElement();
  elem8.id = "thinkingAnimate8";

  const elem9 = addthinkingElement();
  elem9.id = "thinkingAnimate9";

  const all_elements = [elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9]
  body.append(elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9);

  let pos = 0;
  let id = setInterval(frame, 2);
  function frame() {
    if (pos == 1000) {
      all_elements.forEach(elem => elem.remove());  // remove from dom

      clearInterval(id);
    } else {
      pos += 2; 
      all_elements.forEach(elem => elem.style.bottom = pos + 'px')
    }
  }
}

function addthinkingElement(){
  const element = document.createElement('div');

  const img = document.createElement('img');
  img.src = './assets/thinking.png'
  img.style.width = '50px';
  img.style.height = '50px';

  element.append(img);
  return element;
}


function cryingMove() {
  const body = document.querySelector('body');

  const elem1 = addcryingElement();
  elem1.id = "cryingAnimate1";

  const elem2 = addcryingElement();
  elem2.id = "cryingAnimate2";

  const elem3 = addcryingElement();
  elem3.id = "cryingAnimate3";

  const elem4 = addcryingElement();
  elem4.id = "cryingAnimate4";

  const elem5 = addcryingElement();
  elem5.id = "cryingAnimate5";

  const elem6 = addcryingElement();
  elem6.id = "cryingAnimate6";

  const elem7 = addcryingElement();
  elem7.id = "cryingAnimate7";

  const elem8 = addcryingElement();
  elem8.id = "cryingAnimate8";

  const elem9 = addcryingElement();
  elem9.id = "cryingAnimate9";

  const all_elements = [elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9]
  body.append(elem1, elem2, elem3, elem4, elem5, elem6, elem7, elem8, elem9);

  let pos = 0;
  let id = setInterval(frame, 2);
  function frame() {
    if (pos == 1000) {
      all_elements.forEach(elem => elem.remove());  // remove from dom

      clearInterval(id);
    } else {
      pos += 2; 
      all_elements.forEach(elem => elem.style.bottom = pos + 'px')
    }
  }
}

function addcryingElement(){
  const element = document.createElement('div');

  const img = document.createElement('img');
  img.src = './assets/crying.png'
  img.style.width = '50px';
  img.style.height = '50px';

  element.append(img);
  return element;
}