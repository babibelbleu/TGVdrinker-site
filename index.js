window.addEventListener('load', (event) => {
    var articles = localStorage.getItem('articles');
    if(articles !== null){
        articles = JSON.parse(articles);
        incrementNbArticles(articles.length);
    }
});

function scrollToElement(element){
    var el = document.getElementById(element);
    el.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    });
}

function showValidPopup() {
    // Get the notification DIV
    var x = document.querySelector('.notification.valid');
  
    // Add the "show" class to DIV
    x.className = "notification valid show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function showErrorPopup() {
    // Get the notification DIV
    var x = document.querySelector('.notification.error');
  
    // Add the "show" class to DIV
    x.className = "notification error show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function incrementNbArticles(n){
    var nbArticlesEl = document.getElementById('nb-article');
    var nbArticles = parseInt(nbArticlesEl.innerText);
    nbArticles += n;
    nbArticlesEl.innerText = nbArticles;
}

function addAndIncrementArticle(id){

    if(addArticle(id)){
        incrementNbArticles(1);
        showValidPopup();
    } else {
        showErrorPopup();
    }
}

function addArticle(id){
    var articles = localStorage.getItem('articles');
    var newArticles = [];

    if(articles !== null){
        articles = JSON.parse(articles);
        newArticles = articles;
    }

    newArticles.push(id);
    localStorage.setItem('articles', JSON.stringify(newArticles));
    return true;
}
  