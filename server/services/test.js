import { recipeServices } from './recipeService.js';

// Test the function
const testIngredients = ["chicken", "rice", "garlic"];

recipeServices(testIngredients)
    .then(() => {
        console.log("✅ Test completed!");
    })
    .catch(err => {
        console.error("❌ Test failed:", err);
    });