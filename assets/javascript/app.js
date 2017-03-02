// Create Array for forces of nature buttons.

var naturalForce = ["tornado", "hurricane", "earthquake", "tsunami", "volcano", "flood"];

// // Create button on-click event listener. this one works but i dont know why the other doesnt.
	 // $("#natureButtons").on("click", function() {
//       var forces = $(this).attr(".naturalForce");
//       var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
//         forces + "&api_key=dc6zaTOxFJmzC&limit=10";
// // intialize ajax call
//       $.ajax({
//           url: queryURL,
//           method: "GET"
//         })
//         .done(function(response) {
//           var results = response.data;
//           // add a for loop 
//           console.log(response);
//           for (var i = 0; i < results.length; i++) {
//             var gifDiv = $("<div class='item'>");

//             var rating = results[i].rating;

//             var p = $("<p>").text("Rating: " + rating);

//             var forceImage = $("<img>");
//             forceImage.attr("src", results[i].images.fixed_height.url);

//             gifDiv.prepend(p);
//             gifDiv.prepend(forceImage);

//             $("#gif-images").prepend(gifDiv);
//           }
//         });
     
  // displayforceInfo function now re-renders the HTML to display the appropriate content. 
  function displayForceInfo(){

    // clear container    
    $('#gif-images').empty();     

    var deForce = $(this).attr('data-name');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        deForce + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({url: queryURL,
    		 method: 'GET'})
       .done(function(response) {
           var results = response.data;

           for(var i=0; i < results.length; i++){
           


              // if (results[i].rating == "r" || results[i].rating == "pg-13")
              // {

              // }
              // else {
               //var gifDiv = $('<div class="item">')
               // Creates a generic div to hold the cartoon

               console.log(results);
               //var cartoonDiv = $('<div class="cartoon">');
               //var cartoonDiv = $('<div>').attr('class','cartoon');
               
               //var cartoonImage = $('<img class="cartoonImage">');
               //var cartoonImage = $('<div>').attr('class','cartoon');

               var rating = results[i].rating;

               var p = $('<p>').text( "Rating: " + rating);

               var forceImage = $('<img>');
              
               forceImage.attr('src', results[i].images.fixed_height_still.url);
               forceImage.attr('data-still', results[i].images.fixed_height_still.url);
               forceImage.attr('data-animate', results[i].images.fixed_height.url);
               forceImage.attr('data-state', 'still');
               forceImage.addClass('forceImage');
               
               
               $('#gif-images').append(p);
               $('#gif-images').append(forceImage);


              

               // how to PAUSE / ANIMATE GIFS
                // loop through all gifs and extract url data
                // use trim or similar function to add -s to gif url
                // assign all gifs with data-still -s.gif url  
                // assign all gifs with data-animate regular.gif url 
                // display all gifs as paused with -s.gif extension
                // create toggle pause-animate state when click on cartoonImage
              

           }
          

      $('.forceImage').on('click', function(){
        
          var state = $(this).attr('data-state'); 
            console.log(state);
          
            if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }
           });

           });
     }     
  function renderButtons(){ 

    $('#natureButtons').empty();

    // Loops through the array of cartoons
    for (var i = 0; i < naturalForce.length; i++){

      // Then dynamicaly generates buttons for each cartoon in the array

      // Note the jQUery syntax here... 
        var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
        a.addClass('deForce'); // Added a class 
        a.addClass("btn btn-success"); // Added a class 
        a.addClass("btn btn-primary btn-lg");
        a.attr('data-name', naturalForce[i]); // Added a data-attribute
        a.text(naturalForce[i]); // Provided the initial button text
        $('#natureButtons').append(a); // Added the button to the HTML
    }
  }

  // ========================================================

  // This function handles events where one button is clicked
  $('#addforce').on('click', function(){     

    // grab the input from the textbox
    var deforce = $('#user-input').val().trim();

    // The name from the textbox is then added
    naturalForce.push(deforce);
    
    renderButtons();

    return false;
  })

  // ========================================================

  // Generic function for displaying info
  $(document).on('click','.deforce', displayForceInfo());

  // ========================================================

  // This calls the renderButtons() function
  renderButtons();

 
   