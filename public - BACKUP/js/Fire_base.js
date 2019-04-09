//Refering to firebase.

var database = firebase.database();
var fridge = database.ref('fridge');

function exportDataDelegate(fridge,ingredientName) {
  return function () {
    exportData(fridge, ingredientName)
  }
}
//testting
function exportData(fridge, ingredientName) {
  console.log(ingredientName + " is added to refridgerator!");
  database.ref("fridge/" + ingredientName).update({
    name: ingredientName
  });
  
}