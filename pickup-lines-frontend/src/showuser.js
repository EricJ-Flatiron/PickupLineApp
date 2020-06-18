// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const userContentDiv = document.querySelector('.user-content');
const userNameEle = document.createElement('h5')
userContentDiv.append(userNameEle)
userNameEle.textContent = "BobXOXO"
fetch('http://localhost:3000/pickuplines')
  .then(res => res.json())
  .then(pickuplines => {
    pickuplinesFiltered = pickuplines.filter((pickupline) => {
      if (pickupline.createdBy == "BobXOXO") {
        return pickupline
      }
    })
    pickuplinesFiltered.forEach((pickupline) => {

      const innerDiv = document.createElement("div");
      innerDiv.className = "card"
      innerDiv.id = pickupline.createdBy
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

      innerDiv.append(content, category, createdBy, reactionContainer, createDeleteButton(pickupline))
      userContentDiv.append(innerDiv)
    })
  }) 


const createDeleteButton = (pickupline) => {
    const deleteBtn = document.createElement('btn');
    deleteBtn.textContent = "Delete this pickupline"
    deleteBtn.addEventListener('click', () => {
      fetch(`http://localhost:3000/pickuplines/${pickupline.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then((json) => {
        const pickuplineToDelete = document.querySelector(`#${pickupline.createdBy}`)
        pickuplineToDelete.remove()
      })  
    })
    return deleteBtn
}