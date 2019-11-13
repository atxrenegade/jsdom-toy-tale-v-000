{

    "id": 1,
    "name": "Woody",
    "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
    "likes": 5

}

let likeButtons = document.querySelectorAll("button.like-btn");
likeButtons = Array.from(likeButtons);

likeButtons.forEach(function(button){
	button.addEventListener('click', (el) => {
		let likeCountDisplay = document.querySelector('div.card p')
		//set likeCount to event.target["likes"].value
		//likeCountDisplay.innerHTML = `${likeCount =+ 1} Likes`;
	})
})
