//click ingredient to show status
document.getElementById("item3").addEventListener("click", function() {
  ShowList("apple");
});

function ShowList(category){
  var dbRef = firebase.database().ref("ingredients/" + category);
  var promise = dbRef.once("value", function(snap) {
    list = snap.val();
  });
  promise.then(function() {
    DisplayList(list);
  });
}

function DisplayList(list) {
      console.log(list);          //code a little, test a little
      for (x in list) {           //iterate through the JSON object link
        var info = document.getElementById("ingredientInfo");
        var node = document.createTextNode(list[x]);
        info.appendChild(node);
      }
}