const URL = "https://dog.ceo/api/breeds/list/all";
let dogBreeds = document.querySelector("#breeds")
let button = document.querySelector("#btn");
 

const getFacts= async () =>{
let response= await fetch(URL);
console.log(response);
let data = await response.json();
// console.log(Object.keys(data.message)[1]);
let breeds = data.message; // access all objects
for(breed in breeds){ // access all keys 
    let li = document.createElement("li");
    li.innerText= breed;
    dogBreeds.append(li);
}

}

button.addEventListener("click", getFacts, { once: true });
// getFacts();
