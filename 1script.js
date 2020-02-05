var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + heading + "&begin_date=" + beginDate + "&end_date=" + endDate + "&api-key=ShsH7cCodgtfKjAsCegADGKIRG4Djdux";
var heading;
var beginDate
var endDate;


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);

});
