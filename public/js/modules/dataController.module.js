
import crudModule from "./crud.module.js";

class DataControllerModule {
  constructor(){}

  async listCodersByClan() {
    await crudModule.getClans()


  }

  async setPointsInCard(id){
    let puntosPositivos = 0;
    let puntosNegativos = 0;
    let points = await crudModule.getRiwiPointsByUserid(id);
    points.forEach(element => {
        puntosPositivos += element.positive_point
        puntosNegativos += !parseInt(element.negative_point) ? 0 : element.negative_point
    })
    document.getElementById("totalPtsPositive").innerText = puntosPositivos
    document.getElementById("totalPtsNegative").innerText = puntosNegativos
    
    return points
    //document.getElementById("totalPtsAvailable")


  }

  // Listar coders
  async setCodersInList(){
    let tBody = document.getElementById("historyCoders")
    let coders = await crudModule.getCoders()
    let contador = 1;
    const clanNames = {
      "1": "Tesla",
      "2": "IOS",
      "3": "Linux",
      "4": "windows"
    };
    
    for (const element of coders) {
      let email = await crudModule.getUserById(element.id);
      let puntosCoder = await crudModule.getRiwiPointsByUserid(element.id);
    let puntosPositivos = 0;
    let puntosNegativos = 0;
    puntosCoder.forEach(element => {
      puntosPositivos += parseInt(element.positive_point) || 0;
      puntosNegativos += parseInt(element.negative_point) || 0;
      })

  let totalPoint = puntosPositivos - puntosNegativos
    tBody.innerHTML += `
    <tr>
        <th scope="row" class="text-center">${contador}</th>
        <td class="text-center">${element.document}</td>
        <td>${element.name}</td>
        <td>${email.email}</td>
        <td class="text-center">${clanNames[element.id_clan]}</td>
        <td class="fw-bold text-center">${totalPoint}</td>
        <td class="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          
        </td>
      </tr>
    `  
    contador ++
  }
}

  // Listar Trainers
  async setTrainerInList () {
    let tBody = document.getElementById("historyTrainers")
    let trainers = await crudModule.getTrainers()
    let contador = 1;
    const areaNames = {
      "1": "Desarrollo de software",
      "2": "Review",
      "3": "Habilidades para la vida",
      "4": "Inglés",
      "5": "Coordinación y cultura",
      "6": "Cultura y Permanencia"
    };
    trainers.forEach(async (element) => {
      tBody.innerHTML += `
      <tr>
        <th scope="row" class="text-center">${contador}</th>
        <td class="text-center">${element.document}</td>
        <td>${element.name}</td>
        <td>${areaNames[element.id_area]}</td>
        <td class="fw-bold text-center">${element.points_available}</td>
        <td class="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          
        </td>
      </tr>
    `
    contador ++;
  })
  }

  // Historico users
async setCodersHistoryPoints () {
  let tBody = document.getElementById("codersHistoryPoints")
  let idUserLogIn = 70; // este dato se debe traer del session storage
  let contador = 1;
  let historyPoints = await crudModule.getRiwiPointsByUserid(idUserLogIn)
  historyPoints.forEach(async (element) => {
      tBody.innerHTML +=`
      <tr>
        <th scope="row" class="text-center">${contador}</th>
        <td class="text-center">${element.fecha_ingreso}</td>
        <td>${element.motivo_puntual}</td>
        <td>${element.observacion}</td>
        <td>${element.id}</td>
        <td class="fw-bold">${element.negative_point} ${element.positive_point}</td>
      </tr>
      `
      contador ++;
  })
}



}



export default new DataControllerModule();

