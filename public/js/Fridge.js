

var refFridge = firebase.database().ref("fridge/");
refFridge.once(
    "value",
    function(snap){
        console.log("---All the things in the fridge ");
        snap.forEach(function(snapshot){
          
          console.log(snapshot.key);
          addItem(snapshot.key);
        });
    });

var $displayed = $('#displayed');

function addItem(name) {
  var $container = $('<li/>', {
    class: 'displayedList'
  }).append(
    $('<p/>', {
      class: 'ingredientName',
      text: name
    })
  ).appendTo($displayed);
}



// function foo() {
//     removeEventListener('click', foo);
// }
// //click ingredient to show status
// document.getElementById("item3").addEventListener("click", function() {
//   ShowList("ingredient1");
// }, {once : true}                                                 
// );

// function ShowList(category){
// //  var dbRef = firebase.database().ref("ingredients" + category);
//   var dbRef1 = firebase.database().ref('ingredients/'+ category + '/name');
//   var dbRef2 = firebase.database().ref('ingredients/'+ category + '/Information/status');
//   var dbRef3 = firebase.database().ref('ingredients/'+ category + '/Information/amount');
//   var promise1 = dbRef1.once("value", function(snap) {
//     list = snap.val();
//   });
//   var promise2 = dbRef2.once("value", function(snap) {
//     list = snap.val();
//   });
//   var promise3 = dbRef3.once("value", function(snap) {
//     list = snap.val();
//   });
//   promise1.then(function() {
//     DisplayName(list);
//   });
//   promise2.then(function() {
//     DisplayStatus(list);
//   });
//   promise3.then(function() {
//     DisplayAmount(list);
//   });
// }

// function DisplayName(list) {
//       console.log(list);          //code a little, test a little
//       for (x in list) {           //iterate through the JSON object link
//         var ingredientName = document.getElementById("ingredientName");
//         var node = document.createTextNode(list[x]);
//         ingredientName.appendChild(node);
//       }
// }
// function DisplayStatus(list) {
//       console.log(list);          //code a little, test a little
//       for (x in list) {           //iterate through the JSON object link
//         var status = document.getElementById("status");
//         var node = document.createTextNode(list[x]);
//         status.appendChild(node);
//       }
// }
// function DisplayAmount(list) {
//       console.log(list);          //code a little, test a little
//       for (x in list) {           //iterate through the JSON object link
//         var amount = document.getElementById("amount");
//         var node = document.createTextNode(list[x]);
//         amount.appendChild(node);
//       }
// }