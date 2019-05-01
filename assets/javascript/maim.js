//Show default gifs "Rackoon"
$(document).ready(showGif($("#default")))
// Adding new button on screen
function newCard() {
    if ($("#input-for-gif").val().length > 0) {
        const newGif = $("#input-for-gif").val().trim()
        const newGifDiv = $("<button>").attr("class", "redyButton btn btn-info")
        newGifDiv.attr("data-gif", newGif).text(newGif.charAt(0).toUpperCase() + newGif.slice(1))
        //appends new button
        $("#buttons-for-gifs").append(newGifDiv);
        //clears imput area
        $("#input-for-gif").val("")
        showGif(newGifDiv)
    }
}
// show the gif
function showGif(buttonData) {
    const queryURL = "https://api.tenor.com/v1/search?q=" +
        buttonData.attr('data-gif') + "&key=LHBU6VVIEG68";
    //axios call
    axios.get(queryURL)
        .then((response) => {
            // Storing an array of response in the frontEndData variable
            let frontEndData = response.data.results;
            // Important part, clears old gifs whan choose diferent button
            $("#gifs-appear-here").text("")
            // Looping over every result item
            for (let i = 0; i < frontEndData.length; i++) {
                // Creating a div for the gif
                let gifDiv = $("<div>").attr("class", "card")
                // Creating an image tag
                let gifImage = $("<img>").attr("class", "gif-image").attr("class", "card-img-top hl");
                gifImage.attr("gifurl", frontEndData[i].media[0].gif.url);
                // Giving the image tag an src attribute of a proprty pulled off the
                gifImage.attr("src", frontEndData[i].media[0].gif.url);
                // Appending the paragraph and gifImage we created to the "gifDiv" div we created
                gifDiv.append(gifImage);
                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifs-appear-here").prepend(gifDiv)
            }
        }).then(() => {
            //
            // //manipulate with input
            // const blurnput = document.getElementById('blur');
            // const output = document.querySelectorAll('img');
            // const blur = 'filter: blur()'
            const inputs = document.querySelectorAll(' input')
            console.log(inputs)
            function handleUpdates() {
                const sufix = "px"
                console.log(this.name)
                document.documentElement.style.setProperty(`--${this.name}`, this.value + sufix)
            }
            inputs.forEach(input => input.addEventListener('change',handleUpdates ))
            inputs.forEach(input => input.addEventListener('mousemove',handleUpdates ))
            // // go throught all selected images (need to fing more productive way)
            // console.log(blurnput)
            // for (let i = 0; i < output.length; i++) {

            //     function setDefaultState() {
            //         output[i].style.blur = blurnput.value + 'px';
            //         console.log(output[i].style.blur)

            //     }
            //     document.addEventListener('change', function () {
            //         setDefaultState();
            //     });
            //     // document.addEventListener('mousemove', function () {
            //     //     setDefaultState();
            //     // });
            // }
        })
        .catch(function (error) {
            console.log(error);
        });
}
//event handler for enter and click on button
$("#addNewButton").on("click", newCard);
$(document).on('keyup', function (e) {
    if (e.keyCode == 13) {
        newCard()
    }
});
// event handler for klicking on button
$(document).on("click", '.redyButton', function () { showGif($(this)) })





