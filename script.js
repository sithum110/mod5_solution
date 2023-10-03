 // Define an array of category short_names
 var categoryShortNames = ["Lunch", "Dinner", "Sushi", "Beverages", "Desserts", /* Add more categories as needed */];
    
 // Function to select a random category short_name
 function getRandomCategoryShortName() {
   var randomIndex = Math.floor(Math.random() * categoryShortNames.length);
   return categoryShortNames[randomIndex];
 }
 
 // Function to handle the click event on the "Specials" tile
 function handleSpecialsClick() {
   var randomCategoryShortName = getRandomCategoryShortName();
   // Replace this with your actual function to load menu items
   // Example: $dc.loadMenuItems(randomCategoryShortName);
   console.log("Selected category: " + randomCategoryShortName);
 }
 
 // Attach the click event handler to the "Specials" tile
 document.querySelector('#specialsTile').addEventListener('click', handleSpecialsClick);