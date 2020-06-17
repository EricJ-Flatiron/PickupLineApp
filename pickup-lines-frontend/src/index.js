fetch('http://localhost:3000/pickuplines')
 .then(res => res.json())
 .then((pickuplines) => displayPickuplines(pickuplines))


 
const displayPickuplines = (pickuplines) => {
  const div = document.querySelector('.pickuplines');

  pickuplines.forEach((pickupline) => {
    console.log(pickupline)
    const innerDiv = document.createElement("div");
    const content = document.createElement('h5');
    const category = document.createElement('h6');
    const createdBy = document.createElement('p');

    const fireLikeEle = createFireLike(pickupline)

    const fireLikeCount = document.createElement('p');
    fireLikeCount.className = "fire-like"
    fireLikeCount.dataset.fireId = `${pickupline.id}`
    fireLikeCount.textContent = pickupline.fireLikeCount

    // const fireLikeEle = createLike(pickupline.fireLikeCount, pickupline.id)
  


    content.textContent = pickupline.content
    category.textContent = pickupline.category
    createdBy.textContent = `created by ${pickupline.createdBy}`
    
    innerDiv.append(content, category, createdBy, fireLikeEle, fireLikeCount)
    div.append(innerDiv);
  });
}



const createFireLike = (pickupline) => {
    const firelikeBtn = document.createElement('img');
    const p = document.createElement('p');
    firelikeBtn.src = "./assets/fire.png"
    
    firelikeBtn.addEventListener('click', () => {
        const options = {
            credentials: 'include',
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fireLikeCount: ++pickupline.fireLikeCount
            })
        };
        fetch(`http://localhost:3000/pickuplines/${pickupline.id}`, options)
        .then(res => res.json())
        .then(pickupline => {
            p.textContent = `${pickupline.fireLikeCount}`;
            console.log(pickupline)
        })

    })
    return firelikeBtn
    
}

function fireMove() {
    let elem1 = document.getElementById("fireAnimate1"); 
    let elem2 = document.getElementById("fireAnimate2");
    let elem3 = document.getElementById("fireAnimate3");
    let elem4 = document.getElementById("fireAnimate4");
    let elem5 = document.getElementById("fireAnimate5");
    let elem6 = document.getElementById("fireAnimate6");  
    let elem7 = document.getElementById("fireAnimate7");
    let elem8 = document.getElementById("fireAnimate8");
    let elem9 = document.getElementById("fireAnimate9");
    let pos = 1300;
    let id = setInterval(frame, 2);
    function frame() {
      if (pos == -300) {
        clearInterval(id);
      } else {
        pos -= 2; 
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