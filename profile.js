let myFavColor = document.querySelector("#color");
let myFavPlace = document.querySelector("#place");
let myFavRitual = document.querySelector("#ritual");

myFavColor.addEventListener("click", () => {
  alert("My fav color is green!");
});

myFavPlace.addEventListener("click", () => {
  alert("My favorite place is the mountains");
});

myFavRitual.addEventListener("click", () => {
  alert("My favorite ritual is cleaning");
});

function handleSubmit(evt) {
  evt.preventDefault();

  alert("You made it");
}

