var tabButtons = document.querySelectorAll("button");
var tabPanel = document.querySelectorAll(".tabPanel");

function showPanel(panelIndex, colorCode) {
  tabButtons.forEach(function (node) {
    node.style.backgroundColor = "";
    node.style.color = "";
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";

  tabPanel.forEach(function (node) {
    node.style.display = "none";
  });
  tabPanel[panelIndex].style.display = "block";
  tabPanel[panelIndex].style.backgroundColor = colorCode;
}
showPanel(1, '#4dd2ff');

$("#search").click(function(){
              $("#resultsPanel").show(350);
          });
