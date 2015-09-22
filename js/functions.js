var raised = ["Free range", "Organic", "Fair trade", "Cruelty free", "Non GMO", "Sustainable", "Hormone free", "Farm raised", "Grass fed", "Artisinal", "Soy free", "Locally souced", "Cold-pressed"];
var dietary = ["gluten free", "vegan", "paleo friendly", "vegetarian", "dairy free", "sugar free", "soy free", "allergen free"];
var ingredient = ["kale", "quinoa", "açai", "kimchi", "bacon", "agave", "tempeh", "chia", "goji berry", "Greek yogurt"];
var delivery = ["bowl", "salad", "wrap", "juice", "elixir"];

function rollTheDice(option) {
    console.log("inside rollTheDice: " + option);
    var randomSelection = "";
    switch(option) {

        case "raised":
        randomSelection = Math.floor((Math.random() * raised.length));
        return raised[randomSelection];
        break;

        case "dietary":
        randomSelection = Math.floor((Math.random() * dietary.length));
        return dietary[randomSelection];
        break;

        case "ingredient":
        randomSelection = Math.floor((Math.random() * ingredient.length));
        return ingredient[randomSelection];
        break;

        case "delivery":
        randomSelection = Math.floor((Math.random() * delivery.length));
        return delivery[randomSelection];
        break;

        default:
        return "hipster";
    }
    
}

function generateRecipe() {
    var hipsterFood = rollTheDice("raised") + ", ";
        hipsterFood += rollTheDice("dietary") + " ";
        hipsterFood += rollTheDice("ingredient") + " ";
        hipsterFood += rollTheDice("delivery");
        return hipsterFood;
}

function outputRecipe() {
    document.getElementById("recipe_headline").innerHTML = generateRecipe();
}