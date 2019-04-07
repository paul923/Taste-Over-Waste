var database = firebase.database();


function attachListener(ingredients) {


  var ingredientsSize = Object.keys(ingredients).length;
  console.log("ingredients size :" + ingredientsSize);

  var addButtons = $('.add');
  var ref = database.ref('fridge');

  ref.on('value', gotData, errData);

  function gotData(data) {
    console.log(data);
    var names = data.value();
    var keys = Object.keys(names);
    console.log(keys);

    for (i=0; i<keys.length; i++) {
      var k = keys[i];
      var ingred = names[k].ingred;
      var li = createElement('li', )
    }
  }

  function errData(err) {
    console.log("ERROR!");
    console.log(err);
  }
  for (i = 0; i < Object.keys(ingredients).length; i++) {
    ingredientName = ingredients[i].name;
    var data = {
      Name: ingredientName
    };
    addButtons[i].onclick = exportDataDelegate(ref, ingredientName);
    console.log(data);
  };

}


function exportDataDelegate(ref,ingredientName) {
  return function () {
    exportData(ref, ingredientName)
  }
}

function exportData(ref, ingredientName) {
  console.log(ingredientName + " is added to refridgerator!");
  ref.push({
    Name: ingredientName
  });
}