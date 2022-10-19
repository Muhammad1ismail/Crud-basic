// slecting 

const input = document.querySelector("#input");
const form = document.querySelector("form");
const posts = document.querySelector(".posts");

const failMsg = document.querySelector(".failMsg");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    formValidation();
})


const formValidation = () =>{
    if(input.value === ""){
        failMsg.innerHTML = `box is empty`;
    }else{
        failMsg.innerHTML = "";
        storeData();
    }
}


let data = {};

let storeData = () =>{
    data["text"] = input.value;
    creatPost();
    
}


let creatPost = () =>{
   posts.innerHTML += `
   <div class="single-post">
   <p>${data.text}</p>
   <div class="options">
     <button onclick="editPost(this)">edit</button>
     <button onClick="deletePost(this)" >Delete</button>
   </div>
   </div>

   `
   input.value = "";
}


let deletePost = (e) =>{
   e.parentElement.parentElement.remove();
}


let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}



