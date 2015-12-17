// Set up arrays of options:
var raised = ["Free range", "Organic", "Fair trade", "Cruelty free", "Non GMO", "Sustainable", "Hormone free", "Farm raised", "Grass fed", "Artisanal", "Locally souced", "Cold-pressed"];
var dietary = ["gluten free", "vegan", "paleo friendly", "vegetarian", "dairy free", "sugar free", "soy free", "allergen free"];
var ingredient = ["kale", "quinoa", "açai", "kimchi", "bacon", "agave", "tempeh", "chia", "goji berry", "Greek yogurt"];
var delivery = ["bowl", "salad", "wrap", "juice", "elixir"];
var colors = ["#472D38", "#72AD97", "#D6D9BA", "#E6AF83", "#D16C5C", "#90A878", "#606048", "#483018", "#784830", "#A89048"];


// Generates random item from a respective array
// option is passed so you can have more than one instance of something
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

// Changes the background color to random one in array:
function colorChanger() {
    var randomColor = Math.floor((Math.random() * colors.length));
    // $("body").css("backgroundColor", colors[randomColor]);
    $("body").animate({
        backgroundColor: colors[randomColor]
    });
}

// Gets a random image from Unsplash, assigns to background:
// Doesn't work with button, only on page load for now
function backgroundChanger() {
    var height = $(window).height();
    var width = $(window).width();
    $("body").css("background-image", "url(https://unsplash.it/" + width + "/" + height + "/?random)");

}

// Generates the recipe components:
function generateRecipe() {
    var hipsterFood = rollTheDice("raised") + ", ";
        hipsterFood += rollTheDice("dietary") + " ";
        hipsterFood += rollTheDice("ingredient") + " ";
        hipsterFood += rollTheDice("delivery");
        // colorChanger();
        backgroundChanger();
        return hipsterFood;
}

// Puts the recipe on the page:
function outputRecipe() {
    document.getElementById("recipe_headline").innerHTML = generateRecipe();
}