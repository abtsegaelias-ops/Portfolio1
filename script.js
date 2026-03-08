document.addEventListener("DOMContentLoaded", function(){

console.log("Portfolio Loaded");

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
card.addEventListener("mouseover", () => {
card.style.transform = "scale(1.05)";
});

card.addEventListener("mouseout", () => {
card.style.transform = "scale(1)";
});
});

});