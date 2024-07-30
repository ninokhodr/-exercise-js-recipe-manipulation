  // 1. The logo text of the site has the wrong color. Change it to the correct one.

  document.addEventListener("DOMContentLoaded", function () {
  let logoText = document.querySelector(".logo-text");

  logoText.style.color = "#384241";

  // 2. The alignment of the elements inside the header element are wrong. Change it to the correct one. Hint,
  // check the flex properties for the correct alignment. Here is a link that might help: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

  const header = document.querySelector("header");
  header.style.display = "flex";
  header.style.justifyContent = "left";

  // 3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.

  header.style.borderBottomColor = "lightgray";

  // 4. The recipe name is wrong, change it to the correct one.

  let recipeName = document.getElementById("recipe-name");
  recipeName.textContent = "Frozen Cheesecake";

  // 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead. This can be fixed by adding a class to that element.

  let timeContainer = document.querySelector(".time-container");
  let timeIcon = timeContainer.querySelector("span");
  timeIcon.classList.add("material-icons");

  // 6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.

  let time = document.querySelector(".time");
  time.textContent = "60+ min";

  // 7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one. The available images can be found in the assets folder

  let imageElement = document.querySelector(".image-container img");
  imageElement.src = "assets/frozen-cheesecake-slice.jpg";
  imageElement.alt = "Slice of Frozen Cheesecake";

  // 8. The background color of the ingredients list container is wrong. Fix it.

  let ingredientBackground = document.querySelector(".ingredients-container");
  ingredientBackground.style.backgroundColor = "#f9f9f9";

  // 9. The ingredients are divided in to two parts, one for the bottom and one for the paste. In the list of the ingredients to the bottom, there is a text instead of two list items.
  // Remove the text and add those two list items.

  let ingredientsBottom = document.querySelector(".ingredients-list-bottom");
  if (ingredientsBottom) {
    // Clear any existing text content
    ingredientsBottom.innerHTML = "";

    // Create and append the list items
    let item1 = document.createElement("li");
    item1.textContent = "15st digestivetex";
    ingredientsBottom.appendChild(item1);

    let item2 = document.createElement("li");
    item2.textContent = "Lite smör";
    ingredientsBottom.appendChild(item2);
  }

  // 10. The third ingredient in the list of ingredients to the paste is wrong. Change that specific ingredient to the correct one.

  let pasteIngredients = document.querySelectorAll(
    ".ingredients-list-paste li"
  );
  pasteIngredients.forEach((item) => {
    if (item.textContent.includes("1dl lakrispulver")) {
      item.textContent = "3tsk vaniljsocker";
    }
  });

  // 11. There is also a missing ingredient in the list of ingredients to the paste. Look and see what it is and add that one the the end of the list.

  let ingredientsPaste = document.querySelector(".ingredients-list-paste");
  if (ingredientsPaste) {
    let existingItem = Array.from(ingredientsPaste.children).find((item) =>
      item.textContent.includes("400g naturell philadelphiaost")
    );
    if (!existingItem) {
      let newItem = document.createElement("li");
      newItem.textContent = "400g naturell philadelphiaost";
      ingredientsPaste.appendChild(newItem);
    }
  }

  // 12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.

  let instructionsHeading = document.querySelector(".instructions.shadow");
  if (instructionsHeading) {
    instructionsHeading.classList.remove("shadow");
  }

  // 13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.

  let instructionsList = document.querySelectorAll(".instructions-list li");
  instructionsList.forEach((item) => {
    if (item.innerText.trim() === "Separera ägggulor och äggvitor. Kasta äggvitorna på din partner och drick upp äggulorna som om du vore Rocky Balboa"){
      item.innerText = "Separera äggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";
    }
    if (item.innerText.trim() === "Gå in till din granne och släng det över deras vardagsrumsgolv!"){
      item.innerText = "Ställ in i frysen över natten.";
    }
  });
});
