import utils from './modules/utils.module.js'
import login from './modules/login.module.js'
import dataController from './modules/dataController.module.js'

let actualPage = document.querySelector("title").text
 let { value }   = document.getElementById("pagName").attributes.getNamedItem("value")

//Section to addEnventListeners

//dataController.setPointsInCard(40)
//dataController.setCodersInList() // Lista coders
//dataController.setTrainerInList() // Lista trainers
//dataController.setInformationCoder() // Lista historico en coders
//dataController.setInformationTrainer() // Lista historico en coders


let validateLenguge = utils.getSessionStorage("leng")
if (!validateLenguge) {
    utils.setSessionStorage("leng","es")
}

//login.validateStatusLogin();


if(actualPage == "login"){

}else if(actualPage == "Coders"){
    //dataController.setCodersInList()
}

//dataController.listCodersByClan()
//Globales




document.getElementById("buttonIdChangeLangEs")?.addEventListener("click", () => {
    utils.setSessionStorage("leng", "es")
    console.log(value)

    ///si esta aqui al hacer el cambio se tomna el valor de la pagina actual y se redirecciona segun el valor se obtiene el path y se envia 
})
document.getElementById("buttonIdChangeLangEn")?.addEventListener("click", () => {
    utils.setSessionStorage("leng", "en")
    console.log(value)
    
})



document.getElementById("buttonIdLogin")?.addEventListener("click",()=>{
    login.validateLogin()
});

document.getElementById("redirectbuttonidToLogin")?.addEventListener("click",()=>{
    let language = utils.getSessionStorage("leng")
    if(language == "es"){
        if (value != "01") {
            location.href = "./login.html";
        } else {
            location.href = "./html/login.html";
        }
    }else if (language == "en") {
        console.log("emtro")
        window.location.href ="../html/en/login.html";
    }
})

document.getElementById("redirectbuttonidToIndex")?.addEventListener("click", () => {
    let language = utils.getSessionStorage("leng")
    if (language == "es") {
        location.href ="../../index.html";
    } else if (language == "en") {
        location.href ="../../html/en/index.html";
    }
})

//button cambiar idioma
document.getElementById("buttonIdChangeLangEng")?.addEventListener("click",()=>{
    //funcion para cambiar lenguaje a ingles
});
document.getElementById("buttonIdChangeLangEs")?.addEventListener("click",()=>{
    //funcion para cambiar lenguaje a spanish
});
document.getElementById("idCorazon")?.addEventListener("click",()=>{
    //funcion secreta
});

// Menu toggle
const menu =document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

toggle?.addEventListener("click",()=>{
    menu.classList.toggle("active");
})

// velocidad Slide
const myCarouselElement = document.querySelector('#carouselHome')

const carousel = new bootstrap.Carousel(myCarouselElement, {
interval: 3000,
touch: false
})

document.getElementById("idListCatByClan")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(1)
});
document.getElementById("idListCatByPoints")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(2)
});
document.getElementById("idListCatByAz")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(3)
});












