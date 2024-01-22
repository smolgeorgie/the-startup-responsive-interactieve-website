window.onload = function() {
  var articles = document.querySelectorAll('.readmore');
  var buttons = document.querySelectorAll('.toggle');

  for (var i = 0; i < articles.length; i++) {
    // Initially hide all but the first paragraph
    var paragraphs = articles[i].querySelectorAll('p');
    for (var j = 1; j < paragraphs.length; j++) {
      paragraphs[j].style.display = 'none';
    }

    buttons[i].addEventListener('click', function() {
      var article = this.closest('.readmore'); // Use closest to find the parent article
      var paragraphs = article.querySelectorAll('p');
      
      if (this.textContent === 'Read more') {
        for (var j = 1; j < paragraphs.length; j++) {
          paragraphs[j].style.display = 'block';
        }
        this.textContent = 'Read less';
      } else {
        for (var j = 1; j < paragraphs.length; j++) {
          paragraphs[j].style.display = 'none';
        }
        this.textContent = 'Read more';
      }
    });
  }
}