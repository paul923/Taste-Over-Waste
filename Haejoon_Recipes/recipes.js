    $(document).ready(function () {
      ShowList("Spicy Chicken Thigh");
    });

    function ShowList(recipeName) {
      var recipeRef = firebase.database().ref("recipes/" + recipeName);
      $("#title b").html(recipeName);
      var urlRef = recipeRef.toJSON();
      console.log(urlRef);

      var ingreRef = recipeRef.child("ingredients-list");
      var promise = ingreRef.once("value", function (snap) {
        list1 = snap.val();
      });

      var stepRef = recipeRef.child("recipe-steps");
      var promise2 = stepRef.once("value", function (snap) {
        list2 = snap.val();
      });


      promise.then(function () {
        DisplayIngredients(list1); //JSON object
      });

      promise2.then(function () {
        DisplaySteps(list2); //JSON object
      });
    }

    function DisplayIngredients(list) {
      console.log(list);

      for (var ingredient in list) {
        var li = $("<li></li>");

        li.html(list[ingredient]["name"] + ", " + list[ingredient]["amount"]);
        $("#ingredients").append(li);
      }
    }

    function DisplaySteps(list) {
      console.log(list);

      for (var step in list) {
        var li = $("<li></li>");

        li.html(step + ". " + list[step]);
        $("#steps").append(li);
      }
    }

    //    <
    //    iframe src = "https://www.youtube.com/embed/BGVmFZ9o_Zc"
    //    frameborder = "0"
    //    allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //    allowfullscreen > < /iframe>
