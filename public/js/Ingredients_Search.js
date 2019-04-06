var tabButtons = document.querySelectorAll("button");
var tabPanel = document.querySelectorAll(".tabPanel");

var ingredients = fetch('data/ingredients.json').then(function (resp) {
  return resp.json();
}).then(function (resp) {
  console.log(resp);
  console.log(ingredients["0"].name);

});



var $result = $('#results');
addItem('cl');

function addItem(name) {
  var $container = $('<li/>', {
    class: 'lists'
  }).append(
    $('<p/>', {
      class: 'ingredientName',
      text: name
    }),
    $('<button/>', {
      class: 'add',
      text: '+'
    })
  ).appendTo($result);
}



// result.append(resultList);
function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "black";

  tabPanel.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanel[panelIndex].style.display = "block";
}
showPanel(1, '');

$("#search").click(function () {
  $("#resultsPanel").toggle(350);
});

function searchFunction() {
  var searchInput, searchInputCap, ul, li, p, i, msgs;
  searchInput = document.getElementById('userInput');
  searchInputCap = searchInput.value.toUpperCase();
  ul = $('#listBox');
  li = $('.lists');
  console.log(li);

  msgs = document.getElementById('msg'); // $("#msg")

  p = $('.ingredientName');
  console.log(p[0].innerHTML);
  for (i = 0; i < li.length; i++) {

    console.log(p[i]);
    if (searchInput.value.length == 0) {
      li[i].style.display = 'none';
      msg.style.display = 'block';
    } else if (p[i].innerHTML.toUpperCase().indexOf(searchInputCap) > -1) {
      li[i].style.display = 'block';
      msgs.style.display = 'none';
    } else {
      li[i].style.display = 'none';
    }
  }
}

var buttons = document.getElementByClassName('.add');
var button;

for(i=0; i<buttons.length;i++){
  button[i] = document.getElementsByClassName('.add')[i];
  button[i].addEventListener()
}

var button1, button2, button3, button4, li;
li = document.getElementsByClassName('lists');


var buttons = $(".add");
for (i = 0, i < buttons.length; i++;) {
  buttons[i].on("click", exportData1);

}