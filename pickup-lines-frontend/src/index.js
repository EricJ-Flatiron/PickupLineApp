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

    const fireLikeCount = document.createElement('p');
    fireLikeCount.className = "fire-like"
    fireLikeCount.dataset.fireId = `${pickupline.id}`
    fireLikeCount.textContent = pickupline.fireLikeCount

    const fireLikeEle = createLike(pickupline.fireLikeCount, pickupline.id)

    content.textContent = pickupline.content
    category.textContent = pickupline.category
    createdBy.textContent = `created by ${pickupline.createdBy}`
    
    innerDiv.append(content, category, createdBy, fireLikeCount)
    div.append(innerDiv);
  });
}

const createFireLike = (likeCount, pickuplineId) => {
    const like = document.createElement('p');
    fireLikeCount.className = "fireLike"
    fireLikeCount.dataset.fireId = `${pickuplineId}`
    fireLikeCount.textContent = likeCount
    like.addEventListener('click', () => {
        const options = {
            method: "PATCH",
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'appliction.json'
            },
            body: JSON.stringify({
                
            })
        }
    })
    return like;
}