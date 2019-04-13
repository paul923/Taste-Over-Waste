var tabButtons = document.querySelectorAll("button");
var tabPanel = document.querySelectorAll(".tabPanel");

/* -------------------- Getting Data From JSON and make search results div -------------------- */
// 1. fetch data from data/ingredients.json
// 2. add all the items to the search result div (default: unshown)
// 3. attach the event (click on the + buttons) listeners on the divs

var ingredients = fetch('data/ingredients.json').then(function (resp) {
  return resp.json();
}).then(function (resp) {
  console.log(resp);
  names = resp.ingredients;
  console.log(names);
  console.log(names.length);
  console.log(names[13]);

  for (var i = 0; i < Object.keys(names).length; i++) {
    addItem(names[i].name);
    console.log(names[i].image);
  }
  attachListener(names);
});


// addItem function
// -- add items in the search result div with class names and text (default: unshown)
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
      style: 'padding-bottom: 4px',
      text: '+'
    })
  ).appendTo($result);
}


// attachListner function
// -- according to each ingredient, add event listener that writes data to the firebase
function attachListener(ingredients) {
  var ingredientsSize = Object.keys(ingredients).length;
  console.log("ingredients size :" + ingredientsSize);
  var addButtons = $('.add');

  for (i = 0; i < Object.keys(ingredients).length; i++) {
    ingredientName = ingredients[i].name;
    ingredientImage = ingredients[i].image;
    console.log(ingredients[i]);

    var data = {
      Name: ingredientName,
      Image: ingredientImage
    };
    console.log("TESTING " + addButtons.length);
    addButtons[i].onclick = exportDataDelegate(fridge, data);
    console.log(data);
  };

}

// searchFunction function -- SHANE PLEASE DO THIS PART I DON:T KNOW ANYTHING AOBUT THIS
// -- 
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