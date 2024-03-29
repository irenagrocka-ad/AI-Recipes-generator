function generateRecipe(event) {
    event.preventDefault();
    const ingredients = document.getElementById('search').value;
    const dietType = document.querySelector('input[name="diet"]:checked').value;
    const servings = document.querySelector('input[name="servings"]:checked').value;
    const language = document.getElementById('language-selector').value;


    let prompt =
        `create me recipe with ${ingredients} in ${language} for ${dietType} and ${servings} servings`;
    let key = "3doat099fbcfb24e74ea400f10f43b8a";
    let context =
        `give me a recipe in format where list of ingredients (with quantity per ${servings}) is displayed as an list and cooking instructions as a paragraph. Provide me macros at the end. Please format answer in html format.Ingredients, Instruction and Macros titles style to be underlined.`;

    let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

    let outputElemtent = document.getElementById('output');
    outputElemtent.innerHTML = `<div class="generating">⏳ Please wait a ${ingredients} 🧑‍🍳 recipe is being generated for you</div>`;
    axios.get(url).then(showAnswer);
}

function showAnswer(response) {
    new Typewriter("#output", {
        strings: response.data.answer,
        autoStart: true,
        cursor: "",
    });
}

document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLanguage = this.value;
    updateTranslations(selectedLanguage);
});

document.querySelector('form').addEventListener('submit', generateRecipe);