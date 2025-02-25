const btn = document.getElementById("btn");

btn.addEventListener("click" , function () {

    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET' , 'https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload = () => {
     
    let data = JSON.parse(ourRequest.responseText);
    console.log(data);
    
    }
    ourRequest.send();

    });



