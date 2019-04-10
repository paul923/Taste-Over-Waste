////////////////setting toggle/////////////////
$(document).ready(function () {
  $("#hiddenMenu").hide();

  $("#setting").click(function (event) {
    event.stopPropagation();
    $("#hiddenMenu").slideToggle("blind");
  });
  $(document).click(function () {
    $('#hiddenMenu').slideUp();
  });
});

///////////////Tab panel//////////////////// 
document.getElementById("ingredientsText").click();

function changeTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabPanel");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("text");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  
  evt.currentTarget.className += " active";

  


  displayFridge();

}




