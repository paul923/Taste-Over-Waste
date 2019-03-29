$(document).ready(function () {
  ShowList("apple");
});


function ShowList(ingredients) {
  var ingredientsRef = firebase.database().ref("ingredients/" + ingredients);
  $(".resultsText").html(ingredients);


  var promise = ingredientsRef.once("value", function (snap) {
    list = snap.val();
  });

  promise.then(function () {
    DisplayIngredients(list);
  });
}

function DisplayIngredients(list) {
  console.log(list);

}

