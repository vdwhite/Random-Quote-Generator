function setShareText(current_text){
  let share_text = "http://twitter.com/share?text="+ current_text;
  let twitter_btn = $("#twitter-share");
  
  $(twitter_btn).attr("href", share_text);

console.log($(twitter_btn).attr("href"));
}

function setColor(){
  let color_array=["#033f63","#28666e","#7c9885","#b5b682","#fedc97","#4fa573","#4fa577","#408e5f","#665853","#817672"];
  let color = color_array[Math.floor(Math.random()*color_array.length)];
  //jQuery function to do the animation
  //(selector).animate({styles},speed,easing,callback)
//  $("body").animate({backgroundColor:color},500);
  $("body").css("background-color", color);
  $(".quote").css("color", color);
  $(".button").css("background-color", color);
  $("#twitter-share").css("color", color);
}

function getQuote(){
  $.ajax({
    type: "GET",
    url: "https://random-quote-generator.herokuapp.com/api/quotes/",
    success: function(quotes){
      //do on each data in array
      //API: quote.author: author
      //     quote.quote: content
      let random_quote_num = Math.floor(Math.random()*(quotes.length-1));
      let quote_author = $("#quote-author");
      let quote_text = $("#quote-text");
      $(quote_text).text(quotes[random_quote_num].quote);
      $(quote_author).text("-- "+quotes[random_quote_num].author);
      setShareText("\""+quotes[random_quote_num].quote+"\""+$(quote_author).text());
  }});
}

//jQuery AJAX
//get data with quotes: quote and author
$("#get-another-quote-button").click(function(e){
  e.preventDefault();
  getQuote();
  setColor();
});

//initial quotes that show on the page when load 
$(document).ready(function(){
  getQuote();
  setColor();
});