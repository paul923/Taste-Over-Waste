var tabButtons = document.querySelectorAll("button");
var tabPanel = document.querySelectorAll(".tabPanel");

var ingredients = fetch('../public/data/ingredients.json').then(function (resp) {
  return resp.json();
}).then(function (resp) {
  console.log(resp);
  names = resp.ingredients;
  console.log(names);
 // console.log(keys[names].length);
  console.log(names.length);
  console.log(names[13]);
  
  for (var i = 0; i < Object.keys(names).length; i++) {
    addItem(names[i].name);
  }
  attachListener(names);
  displayFridge();
});

function attachListener(ingredients) {


  var ingredientsSize = Object.keys(ingredients).length;
  console.log("ingredients size :" + ingredientsSize);

  var addButtons = $('.add');

  for (i = 0; i < Object.keys(ingredients).length; i++) {
    ingredientName = ingredients[i].name;
    var data = {
      Name: ingredientName
    };
    console.log("TESTING " + addButtons.length);
    addButtons[i].onclick = exportDataDelegate(fridge, ingredientName);
    console.log(data);
  };

}

//////////////////////////// add items in the results section with class names and text
var $result = $('#results');
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
/////////////////////////////////////////SEARCH FUNCTION
function searchFunction() {
  var searchInput, searchInputCap, ul, li, p, i, msgs;
  searchInput = document.getElementById('userInput');
  searchInputCap = searchInput.value.toUpperCase();
  ul = $('#listBox');
  li = $('.lists');
  console.log(li);

  msgs = document.getElementById('msg'); // $("#msg")

  p = $('.ingredientName');
  ////////////////////////////////Search Filter Function

  // clear the <p>

  for (i = 0; i < li.length; i++) {

    console.log(p[i]);
    console.log(p.length);
    if (searchInput.value.length == 0) {
      li[i].style.display = '';
      msgs.style.display = 'block';
    } else if (p[i].innerHTML.toUpperCase().indexOf(searchInputCap) > -1) {
      // create element <p>
      // create text node "avocado"
      // append text to <p>
      // append <p> to results

      li[i].style.display = 'block';
      msg.style.display = 'none';
    } else {
      li[i].style.display = '';
    }
  }
}

// function addItem(name) {
//   var $container = $('<li/>', {
//     class: 'displayedList'
//   }).append(
//     $('<p/>', {
//       class: 'ingredientName',
//       text: name
//     })
//   ).appendTo($displayed);
// }


