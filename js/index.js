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
      console.log(data);
      
      let htmlString = "";

      for(i=0; i<data.length; i++ ){
        htmlString =`<p>${data[i].name} is a ${data[i].species}</p>`
        animalContainer.insertAdjacentHTML('beforeend' , htmlString);
      }
       
      
}



