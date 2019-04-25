
// Adding new button on screen
$("#addNewButton").on("click", function () {
    if ($("#input-for-gif").val().length > Y0) {
        console.log("works")
        const newGif = $("#input-for-gif").val().trim()
        const newGifDiv = $("<button>").attr("class", "redyButton")
        newGifDiv.attr("data-gif", newGif).text(newGif)

        //appends new button
        $("#buttons-for-gifs").append(newGifDiv);
        //clears imput area
        $("#input-for-gif").val("")
    }
});

// $(document).on('keyup', function (e) {
//     if (e.keyCode == 13) {



//     }
// });


 $(document).on("click", ".redyButton", function () {
    const gif = $(this).attr("data-gif");
    const queryURL = "https://api.tenor.com/v1/search?q=" +
        gif + "&key=LHBU6VVIEG68";

    axios.get(queryURL)
        .then(function (response) {


            // Storing an array of response in the results variable
            let frontEndData = response.data.results;
            console.log(frontEndData)
            // Important part, clears old gifs whan choose diferent button
            $("#gifs-appear-here").text("")
            // Looping over every result item
            for (let i = 0; i < frontEndData.length; i++) {

                // Creating a div for the gif
                let gifDiv = $("<div>").attr("class", "card")

                // Creating a paragraph tag with the result item's rating
                let carBodyDiv = $("<div>").attr("class", "card-footer")

                // Creating an image tag
                let gifImage = $("<img>").attr("class", "gif-image");
                gifImage.attr("class", "card-img-top")
                gifImage.attr("gifurl", frontEndData[i].media[0].gif.url);

                // Giving the image tag an src attribute of a proprty pulled off the
                gifImage.attr("src", frontEndData[i].media[0].gif.url);

                // Appending the paragraph and gifImage we created to the "gifDiv" div we created
                gifDiv.append(gifImage);
                gifDiv.append(carBodyDiv);

                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifs-appear-here").prepend(gifDiv)


            }
        })

        .catch(function (error) {
            console.log(error);
        });

})

