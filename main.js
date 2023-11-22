import "./style.css";

// Récupérez l'élément d'entrée de rayon et l'élément du cercle
const radiusInput = document.getElementById("radius");
const circle = document.getElementById("circle");
const radius = document.getElementById("radius");

const updateCircle = (event) => {
  const radiusValue = Math.max(100,radiusInput.value);
  circle.style.left = (event.clientX - radiusValue)  + "px";
  circle.style.top = (event.clientY - radiusValue ) + "px";
  circle.style.width = radiusValue * 2 + "px";
  circle.style.height = radiusValue * 2 + "px";
};

radiusInput.addEventListener("input", updateCircle);
document.addEventListener("mousemove", updateCircle);
