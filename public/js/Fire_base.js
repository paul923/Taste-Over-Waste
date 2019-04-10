//Refering to firebase.

var database = firebase.database();
var fridge = database.ref('fridge');

function exportDataDelegate(fridge,data) {
  return function () {
    exportData(fridge, data)
  }
}

//testting
function exportData(fridge, data) {
  console.log(data.Name + " is added to refridgerator!");
  database.ref("fridge/" + data.Name).update({
    name: data.Name,
    image: data.Image
  });
  
}

