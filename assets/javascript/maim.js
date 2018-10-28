

// Adding new button on screen
$("#addNewButton").on("click", function() {
    var newGif = $("#input-for-gif").val().trim()
    console.log(newGif)
    var newGifDiv = $("<button>");
    newGifDiv.attr("class", "redyButton")
    newGifDiv.attr("data-gif", newGif)
    newGifDiv.text(newGif)
//appends new button
$("#buttons-for-gifs").append(newGifDiv);
//clears imput area
$("#input-for-gif").val("")
});

$(document).on("click",".redyButton", function () {

    var gif = $(this).attr("data-gif");
    var newGif = $("#input-for-gif").val().trim()
    console.log(newGif)
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {

            // Storing an array of response in the results variable
            var results = response.data;
            // Important part, clears old gifs whan choose diferent button
            $("#gifs-appear-here").text("")
            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-18") {
                    // Creating a div for the gif
                    var gifDiv = $("<div>").attr("class","card");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var carBodyDiv = $("<div>").attr("class","card-footer")
                    var p = $("<p>").text("Rating: " + rating);
                    carBodyDiv.append(p)

                    // Creating an image tag
                    var gifImage = $("<img>").attr("class", "gif-image");
                     gifImage.attr("class", "card-img-top")
                     gifImage.attr("gifurl", results[i].images.fixed_height.url);

                    // Giving the image tag an src attribute of a proprty pulled off the
                    gifImage.attr("src", results[i].images.fixed_height.url);
                   
                    // Appending the paragraph and gifImage we created to the "gifDiv" div we created
                    gifDiv.append(gifImage);
                    gifDiv.append(carBodyDiv);
                
                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv)
                }

            }

        });
})

