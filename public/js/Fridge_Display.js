// -- reads data from firebase and log all the items on the console, 
// -- and then invokes displayList function to generate image elements in the fridge
function displayFridge() {
  var refFridge = firebase.database().ref("fridge/");
  refFridge.once(
    "value",
    function (snap) {
      console.log("---All the things in the fridge ");
      console.log(snap);
      console.log(snap.val());
      displayList(snap.val());

    });

  // using the list from firebase, it generates html divs and put them 
  // in the slots in the fridge
  function displayList(list) {
    console.log(list);
    var i = 1;
    for (x in list) {
      console.log(list[x].image);
      var slot = document.getElementById(i);
      slot.setAttribute("src", "images/" + list[x].image);
      slot.setAttribute("alt", "No pic");

      i++;
    }
  }

  $("#clear").click(function () {
    $("#fridgeFrame").load(" #fridgeFrame > *");
  });
}