function displayFridge() {
  var refFridge = firebase.database().ref("fridge/");
  refFridge.once(
    "value",
    function (snap) {
      console.log("---All the things in the fridge ");
      console.log(snap.val());
      displayList(snap.val());

    });

  var $displayed = $('#displayed');


  function displayList(list) {
    console.log(list);
    var i = 1;
    for (x in list) {
      console.log(x);
      var slot = document.getElementById(i);
            slot.innerHTML = x;

      i++;
    }
  }
  
}

  
 