function analyzeRecipe() {
  const name = document.getElementById("recipeName").value;
  const servings = document.getElementById("servings").value;
  const recipe = document.getElementById("recipeText").value;

  const resultBox = document.getElementById("resultBox");

  if (!name || !servings || !recipe) {
    alert("Please fill all fields");
    return;
  }

  // Fake Analysis (for demo)
  resultBox.classList.remove("hidden");

  resultBox.innerHTML = `
    <h3>Analysis Result</h3>
    <p><b>Recipe:</b> ${name}</p>
    <p><b>Servings:</b> ${servings}</p>
    <p><b>Calories:</b> ~250 kcal</p>
    <p><b>Ayurvedic Nature:</b> Warm (Pitta Increasing)</p>
    <p><b>Rasa:</b> Spicy, Bitter</p>
  `;
}