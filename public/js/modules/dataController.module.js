
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
    let contador = 0;
    coders.forEach(async (element) =>{
      let clanName = await crudModule.getClanById(element.Id_clan)
      let {postivePoints,negativePoints,totalPoints} = await crudModule.getRiwiPointsByUserid(element.id_coder)
      console.log(element)
      tBody.innerHTML += `
        <tr>
          <th scope="row">${contador}</th>
          <th>${element.documento }</th>
          <td>${element.nombre}</td>
          <td>${element.nombre}</td>
          <td>${clanName[0].nombre}</td>
          <td class="fw-bold">${totalPoints}</td>
          <td>
            <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
        </tr> `
      contador++
    })
  }

  searchByCoder(items,search){
      return items.filter(item => {
        console.log(item.nombre.startsWith(usuario))
        return item.nombre.startsWith(usuario) 
      });
  }

//=======================================================================================================//
  async setClansInList(){
    let tBody = document.getElementById("pointsHistoryClans")
    
    let contador = 1


      let clan1 =0
      let clan2 =0
      let clan3=0
      let clan4=0
      let coders = await crudModule.getCoders()
      //forEach para coders
        coders.forEach(async(resultado)=>{
        if (resultado.Id_clan == 1) { clan1++} 
        else if(resultado.Id_clan == 2){clan2++}
        else if(resultado.Id_clan == 3){clan3++}
        else if(resultado.Id_clan == 4){clan4++}
      })

        console.log(clan1 + "este el clan 1")
        console.log(clan2 + "este el clan 2")
        console.log(clan3 + "este el clan 3")
        console.log(clan4 + "este el clan 4")
         //forEach para clanes
        let clans = await crudModule.getClanes()
        clans.forEach(async (element) =>{ 
         if (element.id_clan == 1){
          tBody.innerHTML += `
          <tr>
            <th scope="row">${contador}</th>
            <td>${element.nombre}</td>
            <td>${clan1}</td>
            <td>${0}</td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
        </tr> 
          
          `
          contador ++
         }else if (element.id_clan == 2){
          tBody.innerHTML += `
          <tr>
            <th scope="row">${contador}</th>
            <td>${element.nombre}</td>
            <td>${clan2}</td>
            <td>${0}</td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
          </tr>`
          contador ++

         }else if (element.id_clan == 3){
          tBody.innerHTML += `
          <tr>
            <th scope="row">${contador}</th>
            <td>${element.nombre}</td>
            <td>${clan3}</td>
            <td>${0}</td>
            <td>
              <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
              <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
          </tr> `
         contador ++
         }else if (element.id_clan == 4){
            tBody.innerHTML += `
            <tr>
              <th scope="row">${contador}</th>
              <td>${element.nombre}</td>
              <td>${clan4}</td>
              <td>${0}</td>
              <td>
                <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
          </tr>`
          contador ++}
          
       
         

//necesito traer el nombre de el clan 
//necesito saber el total de puntos de el coder
//que es lo que tengo : id,nombre


    })
//``

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


    async listInSelectPropierty(key){
      let propierty = document.getElementById("containerDropdownItemForCategory")
      let data = "";
      switch (key) {
        case 1: 
            data = await crudModule.getClanes()
          break;
        case 2:
          data = await crudModule.getClanes()
          break;
        case 3:
          data = await crudModule.getClanes()
          break;
      
        default:

          break;
      }
      propierty.innerHTML +=""

    } 
  }
//``
export default new DataControllerModule();

