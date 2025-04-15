document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/recipes")
      .then(response => response.json())
      .then(recipes => {
        const recipeList = document.getElementById("recipe-list");
        recipes.forEach(recipe => {
          const recipeCard = document.createElement("div");
          recipeCard.innerHTML = `
            <div class="recipe-title" style="cursor: pointer;">
                <h2>${recipe.title}</h2>
                <div class="hover-square"></div>
            </div>
            <div class="details" style="display:none;">
                <img src="${recipe.image}" alt="${recipe.title}" width="300" />
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Directions:</strong> ${recipe.directions}</p>
                <button class="copy-btn">Copy Recipe</button>
            </div>
            `;

          recipeList.appendChild(recipeCard);
  
          const toggleBtn = recipeCard.querySelector(".recipe-title");
          const details = recipeCard.querySelector(".details");
          toggleBtn.addEventListener("click", () => {
            details.style.display = details.style.display === "none" ? "block" : "none";
          });
  
          const copyBtn = recipeCard.querySelector(".copy-btn");
          copyBtn.addEventListener("click", () => {
            const text = `Ingredients:\n${recipe.ingredients}\n\nDirections:\n${recipe.directions}`;
            navigator.clipboard.writeText(text).then(() => {
              alert("Recipe copied!");
            });
          });
        });
      })
      .catch(error => {
        console.error("Error fetching:", error);
      });
  });
  