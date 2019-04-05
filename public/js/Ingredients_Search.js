var tabButtons = document.querySelectorAll("button");
var tabPanel = document.querySelectorAll(".tabPanel");

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
  var input, filter, ul, li, a, i, msgs;
  input = document.getElementById('userInput');
  inputCase = input.value.toUpperCase();
  ul = document.getElementById('listBox');
  li = ul.getElementsByTagName('li');
  msgs = document.getElementById('msg');

  for (i = 0; i < li.length; i++) {
    p = li[i].getElementsByTagName('p')[0];
    
    if (input.value.length == 0) {
      li[i].style.display = 'none';
      msg.style.display = 'block';
    }
    else if (p.innerHTML.toUpperCase().indexOf(inputCase) > -1) {
      li[i].style.display = 'block';
      msgs.style.display = 'none';
    } else {
      li[i].style.display = 'none';
    }
  }
}
