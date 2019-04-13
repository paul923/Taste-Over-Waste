//Refering to firebase.
var database = firebase.database();
var fridge = database.ref('fridge');


// -- writing data to the firebase 
function exportDataDelegate(fridge, data) {
  return function () {
    exportData(fridge, data)
  }
}

// -- two functions should have been implemented to avoid asynchronous issues
function exportData(fridge, data) {
  console.log(data.Name + " is added to refridgerator!");
  database.ref("fridge/" + data.Name).update({
    name: data.Name,
    image: data.Image
  });

}