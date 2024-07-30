document.addEventListener("DOMContentLoaded", function () {
  // 1. What is the name of the recipe?
  let recipeName = document.getElementById("recipe-name").textContent;
  console.log(recipeName);

  // 2. What HTML tag is used to display the Recipe name?
  let recipeTag = document.getElementById("recipe-name").tagName;
  console.log(recipeTag);

  // 3. What is the font size of the paragraph tag with the class "description".
  let descriptionFontSize = window.getComputedStyle(
    document.querySelector(".description")
  ).fontSize;
  console.log(descriptionFontSize);

  // 4. What is the value of the alt attribute on the image?
  let imageAlt = document.querySelector(".image-container img").alt;
  console.log(imageAlt);

  // 5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:

  let imageDim = document.querySelector(".image-container img");
  let imageUrl = imageDim.src;
  let imageDimensions = {
    url: imageUrl,
    height: imageDim.naturalHeight,
    width: imageDim.naturalWidth,
  };
  console.log(imageDimensions);

  // 6. How many ingredients has the paste?

  let bottenIngredients = document.querySelectorAll(
    ".ingredients-list-bottom li"
  );
  let smetenIngredients = document.querySelectorAll(
    ".ingredients-list-paste li"
  );
  let totalIngredientsCount =
    bottenIngredients.length + smetenIngredients.length;

  console.log(totalIngredientsCount);

  // 7. Which is the fourth element in the list containing the ingredients for the paste?

  let fourthPasteIngredient = smetenIngredients[3].textContent;
  console.log(fourthPasteIngredient);

  // 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:

  let instructionsList = document.querySelectorAll(".instructions-list li");
  let instructionsArray = Array.from(instructionsList).map(
    (instruction, index) => {
      return {
        order: index + 1,
        text: instruction.textContent,
      };
    }
  );
  console.log(instructionsArray);
});
