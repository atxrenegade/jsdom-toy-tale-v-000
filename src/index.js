const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

function postNewToy() {
	let newToy = buildNewToyObj()

	try {
		const url = 'http://localhost:3000/toys/:id'
		const data = postData(url, newToy);
		console.log(JSON.stringify(data));
	} catch (error) {
		console.error(error)
	}

	async function postData(url, data) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
			  "Content-Type": "application/json",
			  Accept: "application/json"
			},
			body: JSON.stringify(newToy)
		});
		return await response.json();
	}
}

function buildNewToyObj() {
	return {
	  "name": "Jessie",
	  "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
	  "likes": 0
	}
}

function getToysFromAPI() {
	const url = 'http://localhost:3000/toys';
	fetch(url)
		.then(resp => resp.json())
		.then(json => addToyToCollectionOnDOM(json));
}

function addToysToCollectionOnDOM(collection) {
	collection.forEach(buildToyCard(obj));
}

function buildToyCard(obj){
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
};


addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
  } else {
    toyForm.style.display = 'none'
  }
	postNewToy();
})

document.addEventListener("DOMContentLoaded", function(event)
{
	getToysFromAPI();
})
