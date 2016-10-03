document.addEventListener('DOMContentLoaded', function(event){

  var btnSearch = document.getElementById('js-btn-search');

  btnSearch.addEventListener('click', search);

});

function search() {
  var word = document.getElementById('js-search-word').value;
  var lang = document.getElementById('js-search-lang').value;
  var order = document.getElementById('js-search-order').value;
  var url = '/api/v1/searcher';
  var data = {
    word: word,
    lang: lang,
    order: order
  }
  if (word !== '') {
    $.ajax({
      type: 'POST',
      url: url,
      data: data,
      success: function(response){
        console.log(response);
        response.forEach(printResult);
      }
    });
  }
  
}

function printResult(tweet, index) {
  var name = document.getElementsByClassName('name')[index];
  name.innerHTML = tweet.name;
  var text = document.getElementsByClassName('text')[index];
  text.innerHTML = tweet.text;
}