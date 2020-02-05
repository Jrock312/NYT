function displayart(json){
  var article = {
    headline: {
      main: "Tom Brady's Last Pass"
    },
    byline: {
      original by:"By Bill Pennington"
    }
  }
  var articleHtml = $('<article><h1>')

}


      $("#find-word").on("click", function(event) {

        event.preventDefault();

        

        var searchWord = $("#word-input").val();

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchWord + "&api-key=ShsH7cCodgtfKjAsCegADGKIRG4Djdux";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          
          var author = response.Author;

          // displays the rating:
          movieDiv.append(pOne);

          var released = response.Released;

          var pTwo = $("<p>").text("Released: " + released);

          movieDiv.append(pTwo);

          var plot = response.Plot;

       
      });
    </script>