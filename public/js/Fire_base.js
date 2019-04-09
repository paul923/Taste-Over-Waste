//Refering to firebase.

var database = firebase.database();
var fridge = database.ref('fridge');


// frid.on('frid', function(snap) {
//   console.log(snap);
// })



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
  
  // ref.push({
  //   Name: ingredientName
  // });
}