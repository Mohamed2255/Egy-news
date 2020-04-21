var alldata = [];
var req = new XMLHttpRequest();
var category = "general";
getdata(category);

var links = document.getElementsByClassName("nav-link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
        category = e.target.innerHTML;
        getdata(category);

    })

}
//function to getdataand change at category
function getdata(category) {
    req.open("GET", "http://newsapi.org/v2/top-headlines?country=eg&category=" + category + "&apiKey=f3aca141c7054c3b99b819facd55b4a1");
    req.send();

    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            alldata = JSON.parse(req.response).articles;
            displatdata();

        }
    }

}


//to display data
function displatdata() {
    var temp = ``;

    for (var i = 0; i < alldata.length; i++) {
        temp += `<div class="card m-4" style="width: 18rem;">
    <img src="` + alldata[i].urlToImage + `" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title">` + alldata[i].title + `</h5>
      <p class="card-text">` + alldata[i].description + `</p>
      <a href="` + alldata[i].url + `" class=" bt btn btn-primary ">Read More...</a>
      </div>
  </div>`

    }
    document.getElementById("rowdata").innerHTML = temp;

}