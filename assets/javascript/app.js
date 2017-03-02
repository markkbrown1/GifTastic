// Create Array for forces of nature buttons.

var naturalForce = ["tornado", "hurricane", "earthquake"];

// Create button on-click event listener.
	 $("#natureButtons").on("click", function() {
      var forces = $(this).attr("naturalForce");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        forces + "&api_key=dc6zaTOxFJmzC&limit=10";
// intialize ajax call
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;
          // add a for loop 
          console.log(response);
          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var forceImage = $("<img>");
            forceImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(forceImage);

            $("#gif-images").prepend(gifDiv);
          }
        });
    });