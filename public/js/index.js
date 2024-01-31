import utils from './modules/utils.module.js'
import login from './modules/login.module.js'
import dataController from './modules/dataController.module.js'

let actualPage = document.querySelector("title").text

//Section to addEnventListeners


if(actualPage == "login"){


}

//Globales
dataController.listCodersByClan()


document.getElementById("buttonIdLogin")?.addEventListener("click",()=>{
    login.validateLogin()
});

document.getElementById("redirectbuttonidToLogin")?.addEventListener("click",()=>{
    location.href ="./login.html";
})

document.getElementById("redirectbuttonidToIndex")?.addEventListener("click",()=>{
    location.href ="../index.html";
})

