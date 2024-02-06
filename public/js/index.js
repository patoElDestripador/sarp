import utils from './modules/utils.module.js'
import login from './modules/login.module.js'
import dataController from './modules/dataController.module.js'
import utilsModule from './modules/utils.module.js';

const APP_URL= "http://127.0.0.1:5500/public/html/";
const APP_URL2= "http://127.0.0.1:5500/public/";

let actualPage = document.querySelector("title").text
 let { value }   = document.getElementById("pagName").attributes.getNamedItem("value")

//Section to addEnventListeners

//dataController.setPointsInCard(40)
//dataController.setCodersInList() // Lista coders
//dataController.setTrainerInList() // Lista trainers
//dataController.setInformationCoder() // Lista historico en coders
 // Lista historico en coders


let validateLenguge = utils.getSessionStorage("leng")
if (!validateLenguge) {
    utils.setSessionStorage("leng","es")
}

//login.validateStatusLogin();

let user = utilsModule.getSessionStorage("user")
console.log(user)

function validationAccess() {
    let user = utilsModule.getSessionStorage("user")
    user = !user ? 0 : user
    let publicAccess = ["01", "02", "03", "07"];
    let adminAccess = ["08","04","05","06",];
    let trainerAccess = ["10","04","05",];
    let coderAccess = ["09","04"];
    if (!publicAccess.includes(value) && user != 0){
        if (user.rol == "1") {
            return coderAccess.includes(value);
        } else if (user.rol == "2") {
            return trainerAccess.includes(value);
        } else if (user.rol == "3") {
            return adminAccess.includes(value);
        }
    }else if(publicAccess.includes(value)){
        return true
    }else{
        return false
    }

}

if(!validationAccess() && value != "03"){
    if(validateLenguge == "en"){
        location.href =  APP_URL + "en/error401.html";
    }
    location.href =  APP_URL + "error401.html";

}

//Inicio de cagadores de pagina
    /*
    1 = coder 
    2 = trainer 
    3 = admin
    */
    /*
    01 : Index  - public
    02 : about  - public
    03 : error401 - public
    04 : listClans - just admin and trainer
    05 : listCoder - just admin and trainer
    06 : listTrainer - just admin
    07 : login      - public
    08 : userProfileAdmin - just admin
    09 : userProfileCoder - just coder
    10 : userProfileCoder - just Trainer
    */
/*
Muchchos cada pagina tiene un value que hace referencia a su numero independientemente si esta en ingles o esp.
Es importnate validar que en la dos paginas Eng y esp este el id de carga no requieren hacer nada mas 
ahora solo es agregar la funcion correspondiente a cada pagian es decir si mi pagina numero 06 requiere cargar 
dataController.setTrainerInList() entonces lo agrego al condicional pertenecinete al 06 
*/

/*
Si necesitan saber que usuario esta registrado unicamente deben de llamar utilsModule.getSessionStorage("user")
esta les devolvera el siguiente objeto donde se encuntra el id del usaurio y el rol
{
    "id": "223",
    "email": "admin@riwi.io.com",
    "password": "789456123",
    "img": "https://imgdb.net/storage/uploads/60cd0f9f76145fc6a1fd28332d0c1b9d7918bb5848a5956acec4e5e8cd783267.png",
    "rol": 3
}

*/
if (value === "01") {

} else if (value === "02") {

} else if (value === "03") {

} else if (value === "04") {

} else if (value === "05") {
    //dataController.setInformationTrainer(user)
} else if (value === "06") {
//dataController.setTrainerInList()
} else if (value === "07") {

} else if (value === "08") {

} else if (value === "09") {

} else if (value === "10") {

}

//Fin de cagadores de pagina

//dataController.listCodersByClan()
//Globales




document.getElementById("buttonIdChangeLangEs")?.addEventListener("click", () => {
    utils.setSessionStorage("leng", "es")
    pageRedirectionEs()
})
document.getElementById("buttonIdChangeLangEn")?.addEventListener("click", () => {
    utils.setSessionStorage("leng", "en")
    pageRedirectionEn()
})

function pageRedirectionEs(){
    switch (value) {
        case "01":
            location.href = APP_URL2+"index.html";
        break;
        case "02":
            location.href =  APP_URL + "about.html";
        break;
        case "03":
            location.href =  APP_URL + "error401.html";
        break;
        case "04":
            location.href =  APP_URL + "listClans.html";
        break;
        case "05":
            location.href =  APP_URL + "listCoder.html";
        break;
        case "06":
            location.href =  APP_URL + "listTrainer.html";
        break;
        case "07":
            location.href =  APP_URL + "login.html";
        break;
        case "08":
            location.href =  APP_URL + "userProfileAdmin.html";
        break;
        case "09":
            location.href =  APP_URL + "userProfileCoder.html";
        break;
        case "10":
            location.href =  APP_URL + "userProfileTrainer.html";
        break;
    }
}
function pageRedirectionEn(){
    switch (value) {
        case "01":
            location.href =  APP_URL + "en/Index.html";
        break;
        case "02":
            location.href =  APP_URL + "en/about.html";
        break;
        case "03":
            location.href =  APP_URL + "en/error401.html";
        break;
        case "04":
            location.href =  APP_URL + "en/listClans.html";
        break;
        case "05":
            location.href =  APP_URL + "en/listCoder.html";
        break;
        case "06":
            location.href =  APP_URL + "en/listTrainer.html";
        break;
        case "07":
            location.href =  APP_URL + "en/login.html";
        break;
        case "08":
            location.href =  APP_URL + "en/userProfileAdmin.html";
        break;
        case "09":
            location.href =  APP_URL + "en/userProfileCoder.html";
        break;
        case "10":
            location.href =  APP_URL + "en/userProfileTrainer.html";
        break;
    }
}





document.getElementById("buttonIdLogin")?.addEventListener("click",()=>{
    login.validateLogin()
});

document.getElementById("redirectbuttonidToLogin")?.addEventListener("click",()=>{
    let language = utils.getSessionStorage("leng")
    if(language == "es"){
        location.href =  APP_URL + "login.html";
    }else if (language == "en") {
        window.location.href =APP_URL+"en/login.html";
    }
})

document.getElementById("redirectbuttonidToIndex")?.addEventListener("click", () => {
    let language = utils.getSessionStorage("leng")
    if (language == "es") {
        location.href =APP_URL2+"index.html";
    } else if (language == "en") {
        location.href =APP_URL+"en/index.html";
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

// Inicio Menu Toggle
const htmlContent = `
  <div class="toggle"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#141414" d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"/></svg></div>
  <li style="--i:-2;--clr:#141414"  >
      <a href="#" id="selectionNavItem1"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#141414" d="M17 2H7C5.3 2 4 3.3 4 5v6h8.6l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l4 4c.4.4.4 1 0 1.4l-4 4c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3H4v6c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3"/></svg></a>
  </li>
  <li style="--i:-1;--clr:#141414"  >
      <a href="#" id="selectionNavItem2"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#141414" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"/></svg></a>
  </li>
  <li style="--i:0;--clr:#141414" >
  <a  id="selectionNavItem3" href="#" ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#141414" d="M256 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-112 21.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17A8 8 0 0 0 24 208h168a8 8 0 0 0 6.13-13.15c-14.95-17.78-33.53-30.41-54.13-37.17"/></svg></a>
  </li>
  <li style="--i:1;--clr:#141414">
  <a href="#" id="selectionNavItem4"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#141414" d="M64.12 147.8a4 4 0 0 1-4 4.2H16a8 8 0 0 1-7.8-6.17a8.35 8.35 0 0 1 1.62-6.93A67.79 67.79 0 0 1 37 117.51a40 40 0 1 1 66.46-35.8a3.94 3.94 0 0 1-2.27 4.18A64.08 64.08 0 0 0 64 144c0 1.28 0 2.54.12 3.8m182-8.91A67.76 67.76 0 0 0 219 117.51a40 40 0 1 0-66.46-35.8a3.94 3.94 0 0 0 2.27 4.18A64.08 64.08 0 0 1 192 144c0 1.28 0 2.54-.12 3.8a4 4 0 0 0 4 4.2H240a8 8 0 0 0 7.8-6.17a8.33 8.33 0 0 0-1.63-6.94Zm-89 43.18a48 48 0 1 0-58.37 0A72.13 72.13 0 0 0 65.07 212A8 8 0 0 0 72 224h112a8 8 0 0 0 6.93-12a72.15 72.15 0 0 0-33.74-29.93Z"/></svg></a>
  </li>
  <li style="--i:2;--clr:#141414" >
      <a href="#" id="selectionNavItem5"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#141414" fill-opacity="0" stroke="#ffffff" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="32;0"/><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"/><animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"/></path></svg></a>
  </li>
  `;


  const menuToggleElement  = document.getElementById("menuToggle");

  if (menuToggleElement) {
    menuToggleElement.innerHTML = htmlContent;
  } else {
    console.log('No se encontró el elemento con el id "menuToggle".');
  }

  // Fin Menu Toggle





// Menu toggle
const menu =document.querySelector(".menu");
const toggle = document.querySelector(".toggle");

toggle?.addEventListener("click",()=>{
    menu.classList.toggle("active");
})






//inicio de listado de categorias
document.getElementById("idListCatByClan")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(1,validateLenguge)
});
document.getElementById("idListCatByPoints")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(2,validateLenguge)
});
document.getElementById("idListCatByAz")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(3,validateLenguge)
});
document.getElementById("idListCatBySubject")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(4,validateLenguge)
});


document.getElementById("selectionNavItem1")?.addEventListener("click",()=>{
    //logout
    let language = utils.getSessionStorage("leng")
    utils.removeSessionStorage("user")
    if(language == "es"){
        location.href =APP_URL2+"index.html";
    }else{
        location.href =APP_URL+"en/index.html";
    }
});

document.getElementById("selectionNavItem2")?.addEventListener("click",()=>{
    let language = utils.getSessionStorage("leng")
    if(language == "es"){
        location.href =APP_URL2+"index.html";
    }else{
        location.href =APP_URL+"en/index.html";
    }
});
document.getElementById("selectionNavItem3")?.addEventListener("click",()=>{
    console.log("entro aki")
    let language = utils.getSessionStorage("leng")
    if(language == "es"){
        Swal.fire({
            title: "Crear nuevo usuario",
            text: "¿Que usuario tipo deseas crear?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Coder",
            denyButtonText: `Trainer`,
            cancelButtonColor: "#3085d6",
            confirmButtonColor: "#3085d6"
          }).then((result) => {
            if (result.isConfirmed) {
                location.href =  APP_URL + "listCoder.html";
            } else if (result.isDenied) {
                location.href =  APP_URL + "listTrainer.html";
            }
          });
    }else{
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }
});
document.getElementById("selectionNavItem4")?.addEventListener("click",()=>{
    let language = utils.getSessionStorage("leng")
    if(language == "es"){
        location.href =APP_URL+"index.html";
    }else{
        location.href =APP_URL+"en/index.html";
    }
});
document.getElementById("selectionNavItem5")?.addEventListener("click",()=>{
    let language = utils.getSessionStorage("leng")
    if(lenguage == "es"){
        location.href =APP_URL+"index.html";
    }else{
        location.href =APP_URL+"en/index.html";
    }
});










//inicio de listado de categorias
document.getElementById("idListCatByClan")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(1,validateLenguge)
});
document.getElementById("idListCatByPoints")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(2,validateLenguge)
});
document.getElementById("idListCatByAz")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(3,validateLenguge)
});
document.getElementById("idListCatBySubject")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(4,validateLenguge)
});


document.getElementById("selectionNavItem1")?.addEventListener("click",()=>{
    //logout
    let language = utils.getSessionStorage("leng")
    utils.removeSessionStorage("user")
    if(language == "es"){
        location.href =APP_URL2+"index.html";
    }else{
        location.href =APP_URL+"en/index.html";
    }
});

document.getElementById("selectionNavItem2")?.addEventListener("click",()=>{
    let language = utils.getSessionStorage("leng")
    if(language == "es"){
        location.href =APP_URL2+"index.html";
    }else{
        location.href =APP_URL+"en/index.html";
    }
});
document.getElementById("selectionNavItem3")?.addEventListener("click",()=>{
    console.log("entro aki")
    let language = utils.getSessionStorage("leng")
    if(language == "es"){
        Swal.fire({
            title: "Crear nuevo usuario",
            text: "¿Que usuario tipo deseas crear?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Coder",
            denyButtonText: `Trainer`,
            cancelButtonColor: "#3085d6",
            confirmButtonColor: "#3085d6"
          }).then((result) => {
            if (result.isConfirmed) {
                location.href =  APP_URL + "listCoder.html";
            } else if (result.isDenied) {
                location.href =  APP_URL + "listTrainer.html";
            }
          });
    }else{
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }
});
document.getElementById("selectionNavItem4")?.addEventListener("click",()=>{
    let language = utils.getSessionStorage("leng")
    if(language == "es"){
        location.href =APP_URL+"index.html";
    }else{
        location.href =APP_URL+"en/index.html";
    }
});
document.getElementById("selectionNavItem5")?.addEventListener("click",()=>{
    let language = utils.getSessionStorage("leng")
    if(lenguage == "es"){
        location.href =APP_URL+"index.html";
    }else{
        location.href =APP_URL+"en/index.html";
    }
});










document.getElementById("idListCatByClan")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(1)
});
document.getElementById("idListCatByPoints")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(2)
});
document.getElementById("idListCatByAz")?.addEventListener("click",()=>{
    dataController.listInSelectPropierty(3)
});




document.getElementById("idrateCoder")?.addEventListener("click",()=>{
    dataController.searchCoderTorate()
});








const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
popoverTriggerList
  popover


  // velocidad Slide
const myCarouselElement = document.querySelector('#carouselHome')

const carousel = new bootstrap.Carousel(myCarouselElement, {
interval: 3000,
touch: false
})