$(document).ready(function () {
  ShowList("apple");
});

$("#search").click(function(){
              $("#results").show(350);
          });

function ShowList(ingredients) {
  var ingredientsRef = firebase.database().ref("ingredients/" + ingredients);
  $("#results").html(ingredients);

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

