// initialze of the variables 
let source = "bbc-news"
let apiKey = "2c925d05bbe34d23a7fb4f425749d9b9"

//2c925d05bbe34d23a7fb4f425749d9b9

// grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// create the get request
const xhr = new XMLHttpRequest();

// use for the post request 

xhr.open('GET', `http://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true); 
// when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index){
        let news = `<div class="card">
                                    <div class="card-header" id="heading${index}">
                                        <h2 class="mb-0">
                                            <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                                aria-expanded="true" aria-controls="collapse${index}">
                                                ${element["title"]}
                                        </button>
                                        </h2>
                                    </div>

                                    <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                        <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank"> Read more here </a> </div>
                                    </div>
                            </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

 