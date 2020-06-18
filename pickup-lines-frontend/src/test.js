
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