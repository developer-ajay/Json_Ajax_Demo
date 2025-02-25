let pageCounter = 1;
const btn = document.getElementById("btn");
const animalContainer = document.getElementById("animal-info");

btn.addEventListener("click" , function () {

    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET' , `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`);
    ourRequest.onload = () => {
     
    let data = JSON.parse(ourRequest.responseText);
    renderHTML(data);
    }
    ourRequest.send();
    pageCounter+= 1;
    if (pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

function renderHTML(data){
      
      let htmlString = "";

      for (let i = 0; i < data.length; i++) {
        let likes = data[i].foods.likes.map(food => food.toUpperCase()).join(", "); // Join likes with ", "
        let dislikes = data[i].foods.dislikes.map(food => food.toUpperCase()).join(", "); // Join dislikes with ", "
        htmlString = `
            <p>${data[i].name} is a ${data[i].species} that likes to eat ${likes} and dislikes to eat ${dislikes}.</p>
        `;
    
        animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
       
      
}



