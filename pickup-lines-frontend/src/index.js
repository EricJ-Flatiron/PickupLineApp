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
    firelikeBtn.src = "./assets/fire/png"
    
    firelikeBtn.addEventListener('click', () => {
        const options = {
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