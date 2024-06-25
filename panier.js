window.addEventListener('load', (event) => {
    var articles = localStorage.getItem('articles');
    if(articles !== null){
        articles = JSON.parse(articles);
        var nbFirstArticle = articles.filter((value) => value === 1).length;
        var nbSecondArticle = articles.filter((value) => value === 2).length;
        var nbThirdArticle = articles.filter((value) => value === 3).length;

        var firstArticleElement = document.querySelector('#article-1 .price');
        var secondArticleElement = document.querySelector('#article-2 .price');
        var thirdArticleElement = document.querySelector('#article-3 .price');

        var total = document.querySelector('.checkout h2');

        if(firstArticleElement.innerText.localeCompare("ÉPUISÉ")){
            firstArticleElement.innerHTML = nbFirstArticle + " x " + firstArticleElement.innerHTML;
        } else {
            nbFirstArticle = 0;
        }

        if(secondArticleElement.innerText.localeCompare("ÉPUISÉ")){
            secondArticleElement.innerHTML = nbSecondArticle + " x " + secondArticleElement.innerHTML;
        } else {
            nbSecondArticle = 0;
        }

        if(thirdArticleElement.innerText.localeCompare("ÉPUISÉ")){
            thirdArticleElement.innerHTML = nbThirdArticle + " x " + thirdArticleElement.innerHTML;
        } else {
            nbThirdArticle = 0;
        }

        var totalPrice = 229.99*nbFirstArticle + 10.99*nbSecondArticle + 20.99*nbThirdArticle;

        total.innerText = total.innerText + totalPrice + "€";


    }
});