const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

let likeButtons = document.querySelectorAll("button.like-btn");
likeButtons = Array.from(likeButtons);

likeButtons.forEach(function(button){
	button.addEventListener('click', (el) => {
		let likeCountDisplay = document.querySelector('div.card p')
		//set likeCount to event.target["likes"].value
		//likeCountDisplay.innerHTML = `${likeCount =+ 1} Likes`;
	})
})

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
})

let addToyToCollectionOnDOM = (collection) => {
	collection.forEach(function(obj) {
	//location to append card
	let cardCollection = document.getElementById('toy-collection')
	//create new card element
	let card = document.createElement('DIV');
	//create card contents
	card.innerHTML = `<div class="card">
        <h2>${obj['name']}</h2>
        <img src=${obj['image']} class="toy-avatar" />
        <p>${obj["likes"]} Likes </p>
        <button class="like-btn">Like <3</button>
      </div>`
	//append card to collection
	cardCollection.appendChild(card);
	});
}

const url = 'http://localhost:3000/toys';

fetch(url)
	.then(resp => resp.json())
	.then(json => addToyToCollectionOnDOM(json));
