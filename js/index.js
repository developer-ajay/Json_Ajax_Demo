let pageCounter = 1;
const btn = document.getElementById("btn");
const animalContainer = document.getElementById("animal-info");

btn.addEventListener("click" , function () {

    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET' , `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
    ourRequest.onload = () => {
    
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        let data = JSON.parse(ourRequest.responseText);
        renderHTML(data);
    }else {
        console.log("We connected to the server, but it returned an error.");
    } 
    }

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();
    pageCounter+= 1;
    if (pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

function renderHTML(data){
      
      let htmlString = "";

      for (let i = 0; i < data.length; i++) {
        let likes = data[i].foods.likes.map(food => food.toUpperCase()).join(" and "); // Join likes with ", "
        let dislikes = data[i].foods.dislikes.map(food => food.toUpperCase()).join(" and "); // Join dislikes with ", "
        htmlString = `
            <p>${data[i].name} is a ${data[i].species} that likes to eat ${likes} and dislikes to eat ${dislikes}.</p>
        `;    
        animalContainer.insertAdjacentHTML('beforeend', htmlString);
}      
}
