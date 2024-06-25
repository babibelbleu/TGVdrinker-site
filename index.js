var articles = document.getElementsByClassName('article');

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

function incrementNbArticles(){
    var nbArticlesEl = document.getElementById('nb-article');
    var nbArticles = parseInt(nbArticlesEl.innerText);
    nbArticles++;
    nbArticlesEl.innerText = nbArticles;
    showValidPopup();
}
  