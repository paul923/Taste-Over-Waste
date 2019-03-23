    $(document).ready(function () {
      ShowList("Spicy Chicken Thigh");
    });

    function ShowList(recipeName) {
      var recipeRef = firebase.database().ref("recipes/" + recipeName);
      $("#title b").html(recipeName);
      
      recipeRef.once("value", function (snapshot){
        data = snapshot.val();
      }).then(function () {
        console.log(data);

        console.log(data["ingredients-list"]);
          for (var ingredient in data["ingredients-list"]) {
            var li = $("<li></li>");
    
            li.html(data["ingredients-list"][ingredient]["name"] + ", " + data["ingredients-list"][ingredient]["amount"]);
            $("#ingredients").append(li);
          }

        console.log(data["recipe-steps"]);
          for (var step in data["recipe-steps"]) {
            var li = $("<li></li>");
    
            li.html(step + ". " + data["recipe-steps"][step]);
            $("#steps").append(li);
          }

        console.log(data["video-url"]);
        iframe = $("<iframe></iframe>").attr("src", data["video-url"]).attr("frameborder", "'0'");
        $("#iframe-container").append(iframe);
      })
    }
