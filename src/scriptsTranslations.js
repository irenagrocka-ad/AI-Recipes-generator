const translations = {
    English: {
        welcome: "Welcome to Cook Smarter AI Recipe Generator",
        dietType: "Please select your diet type",
        createRecipe: "Enter your ingredients and select meal type and let the AI generate unique delicious recipe for you",
        example: "Example: Try searching for 'chicken and broccoli for lunch'",
        dietTypes: {
            asian: "Asian",
            indian: "Indian",
            keto: "Keto",
            lowCarbohydrate: "Low-carbohydrate",
            mediterranean: "Mediterranean",
            vegan: "Vegan",
        },
        searchPlaceholder: "Enter ingredients and meal type",
        submitButton: "Create recipe",
        selectButton: "Select"
    },
    French: {
        welcome: "Bienvenue sur Cook Smarter AI Recipe Generator",
        dietType: "Veuillez sélectionner votre type de régime",
        createRecipe: "Saisissez vos ingrédients et sélectionnez le type de repas et laissez l'IA générer une recette unique et délicieuse pour vous",
        example: "Exemple: Essayez de rechercher 'poulet et brocoli pour le déjeuner'",
        dietTypes: {
            asian: "Asiatique",
            indian: "Indien",
            keto: "Keto",
            lowCarbohydrate: "Faible en glucides",
            mediterranean: "Méditerranéen",
            vegan: "Végétalien",
        },
        searchPlaceholder: "Entrez les ingrédients et le type de repas",
        submitButton: "Générer la recette",
        selectButton: "Sélectionner"
    },
    German: {
        welcome: "Willkommen beim Cook Smarter AI Rezeptgenerator",
        dietType: "Bitte wählen Sie Ihren Diättyp aus",
        createRecipe: "Geben Sie Ihre Zutaten ein und wählen Sie die Mahlzeit aus, und lassen Sie die KI ein einzigartiges und köstliches Rezept für Sie generieren",
        example: "Beispiel: Versuchen Sie, nach 'Hähnchen und Brokkoli zum Mittagessen' zu suchen",
        dietTypes: {
            asian: "Asiatisch",
            indian: "Indisch",
            keto: "Keto",
            lowCarbohydrate: "Kohlenhydratarm",
            mediterranean: "Mediterran",
            vegan: "Vegan",
        },
        searchPlaceholder: "Geben Sie Zutaten und Mahlzeitentyp ein",
        submitButton: "Rezept erstellen",
        selectButton: "Auswählen"
    },
    Italian: {
        welcome: "Benvenuti nel generatore di ricette Cook Smarter AI",
        dietType: "Si prega di selezionare il proprio tipo di dieta",
        createRecipe: "Inserisci i tuoi ingredienti e seleziona il tipo di pasto e lascia che l'IA generi una ricetta unica e deliziosa per te",
        example: "Esempio: Prova a cercare 'pollo e broccoli per pranzo'",
        dietTypes: {
            asian: "Asiatico",
            indian: "Indian",
            keto: "Keto",
            lowCarbohydrate: "Basso contenuto di carboidrati",
            mediterranean: "Mediterraneo",
            vegan: "Vegano",
        },
        searchPlaceholder: "Inserisci gli ingredienti e il tipo di pasto",
        submitButton: "Crea ricetta",
        selectButton: "Seleziona"
    },
    Polish: {
        welcome: "Witaj w Cook Smarter AI Generatorze Przepisów",
        dietType: "Proszę wybrać swój rodzaj diety",
        createRecipe: "Wprowadź swoje składniki i wybierz rodzaj posiłku, a AI wygeneruje dla Ciebie unikalny i pyszny przepis",
        example: "Przykład: Spróbuj wyszukać 'kurczak i brokuły na lunch'",
        dietTypes: {
            asian: "Azjatycka",
            indian: "Indyjska",
            keto: "Keto",
            lowCarbohydrate: "Niskowęglowodanowa",
            mediterranean: "Śródziemnomorska",
            vegan: "Wegańska",
        },
        searchPlaceholder: "Wpisz składniki i rodzaj posiłku",
        submitButton: "Utwórz przepis",
        selectButton: "Wybierz"
    },
    Portuguese: {
        welcome: "Bem-vindo ao Cook Smarter AI Recipe Generator",
        dietType: "Por favor, selecione o seu tipo de dieta",
        createRecipe: "Digite seus ingredientes e selecione o tipo de refeição e deixe que a IA gere uma receita única e deliciosa para você",
        example: "Exemplo: Tente pesquisar 'frango e brócolis para o almoço'",
        dietTypes: {
            asian: "Asiática",
            indian: "Indiana",
            keto: "Ceto",
            lowCarbohydrate: "Baixo teor de carboidratos",
            mediterranean: "Mediterrânea",
            vegan: "Vegana",
        },
        searchPlaceholder: "Digite os ingredientes e o tipo de refeição",
        submitButton: "Criar receita",
        selectButton: "Selecionar"
    },
    Spanish: {
        welcome: "Bienvenido al generador de recetas de Cook Smarter AI",
        dietType: "Por favor seleccione su tipo de dieta",
        createRecipe: "Ingrese sus ingredientes y seleccione el tipo de comida y deje que la IA genere una receta única y deliciosa para usted",
        example: "Ejemplo: Intente buscar 'pollo y brócoli para el almuerzo'",
        dietTypes: {
            asian: "Cocina asiática",
            indian: "Cocina india",
            keto: "Ceto",
            lowCarbohydrate: "Bajo en carbohidratos",
            mediterranean: "Mediterráneo",
            vegan: "Vegano",
        },
        searchPlaceholder: "Ingrese los ingredientes y el tipo de comida",
        submitButton: "Crear receta",
        selectButton: "Seleccionar"
    },
};


// Function to update text content based on selected language
function updateTranslations(selectedLanguage) {
    const translatedStrings = translations[selectedLanguage];

    document.querySelector('h1').textContent = translatedStrings.welcome;
    document.querySelector('#diet-type h4').textContent = translatedStrings.dietType;
    document.querySelector('#instructions').textContent = translatedStrings.createRecipe;
    document.querySelector('.example-text').textContent = translatedStrings.example;

    //Update diet types as well
    const dietTypeLabels = document.querySelectorAll('#diet-type label');
    dietTypeLabels.forEach((label, index) => {
        const dietTypeKey = Object.keys(translatedStrings.dietTypes)[index];
        label.textContent = translatedStrings.dietTypes[dietTypeKey];
    });
    // Update placeholders and button text
    document.getElementById('search').setAttribute('placeholder', translatedStrings.searchPlaceholder);
    document.querySelector('#search-button').textContent = translatedStrings.submitButton;
    document.querySelector('#select-button').textContent = translatedStrings.selectButton;
}

// Event listener for language selector
document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLanguage = this.value;
    updateTranslations(selectedLanguage);
});

// Initial translation based on default language selection
const defaultLanguage = document.getElementById('language-selector').value;
updateTranslations(defaultLanguage);
