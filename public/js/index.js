import utils from './modules/utils.module.js'
import login from './modules/login.module.js'
import dataController from './modules/dataController.module.js'

let actualPage = document.querySelector("title").text
let actualPageId = document.getElementById("pagNameId")
//let { value } = document.getElementById("pagName").attributes.getNamedItem("value")

//Section to addEnventListeners

//dataController.setPointsInCard(40)
//dataController.setCodersInList() // Lista coders
//dataController.setTrainerInList() // Lista trainers
//dataController.setInformationCoder() // Lista historico en coders
//dataController.setInformationTrainer() // Lista historico en coders

if(actualPage == "login"){

}else if(actualPage == "Coders"){
    //dataController.setCodersInList()
}

//dataController.listCodersByClan()
//Globales


document.getElementById("buttonIdLogin")?.addEventListener("click",()=>{
    login.validateLogin()
});

document.getElementById("redirectbuttonidToLogin")?.addEventListener("click",()=>{
    let { value } = actualPageId.attributes.getNamedItem("value")

    if (value != "01") {
        location.href = "./login.html";
    } else {
        location.href = "./html/login.html";
    }
})

document.getElementById("redirectbuttonidToIndex")?.addEventListener("click",()=>{
    location.href ="../index.html";
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
const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
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

