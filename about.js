console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Submitted!")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const alertUser = () => {
	alert("Hey there")
}

let myPhoto = document.querySelector("img");

myPhoto.addEventListener("mouseover",function () {
	alertUser();
})