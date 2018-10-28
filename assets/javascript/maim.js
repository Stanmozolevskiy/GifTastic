$("#addNewButton").on("click", function() {

    var newGif = $("#input-for-gif").val().trim()
    console.log(newGif)
    var newGifDiv = $("<button>");

    newGifDiv.attr("class", "redyButton")

    newGifDiv.attr("data-gif", newGif)
    newGifDiv.text(newGif)


$("#buttons-for-gifs").append(newGifDiv)

});



$(".redyButton").on("click", function () {

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
            
            // Storing an array of results in the results variable
            var results = response.data;

            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

                // Only taking action if the photo has an appropriate rating
                if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                    // Creating a div for the gif
                    var gifDiv = $("<div>");

                    // Storing the result item's rating
                    var rating = results[i].rating;

                    // Creating a paragraph tag with the result item's rating
                    var p = $("<p>").text("Rating: " + rating);

                    // Creating an image tag
                    var gifImageImage = $("<img>");

                    // Giving the image tag an src attribute of a proprty pulled off the
                    // result item
                    gifImageImage.attr("src", results[i].images.fixed_height.url);

                    // Appending the paragraph and gifImageImage we created to the "gifDiv" div we created
                    gifDiv.append(p);
                    gifDiv.append(gifImageImage);

                    // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                    $("#gifs-appear-here").prepend(gifDiv);
                }

            }

        });
})

