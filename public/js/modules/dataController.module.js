
import crudModule from "./crud.module.js";

class DataControllerModule {
  constructor(){}

  async listCodersByClan() {
    await crudModule.getClanes()


  }

  async setPointsInCard(id_coder){
    let puntosPositivos = 0;
    let puntosNegativos = 0;
    let points = await crudModule.getRiwiPointsByUserid(id_coder);
    points.forEach(element => {
        puntosPositivos += element.punto_positivo
        puntosNegativos += !parseInt(element.punto_negativo) ? 0 : element.punto_negativo
    })
    document.getElementById("totalPtsPositive").innerText = puntosPositivos
    document.getElementById("totalPtsNegative").innerText = puntosNegativos
    
    return points
    //document.getElementById("totalPtsAvailable")


  }

  async setCodersInList(){
    let tBody = document.getElementById("pointsHistoryCoders")
    let coders = await crudModule.getCoders()

    coders.forEach(async (element) =>{
    let nombreClan = await crudModule.getClanById(element.Id_clan)
    let puntosCoder = await crudModule.getRiwiPointsByUserid(element.id_coder)
    let puntosPositivos = 0;
    let puntosNegativos = 0;
    puntosCoder.forEach(element => {
    puntosPositivos += element.punto_positivo
    puntosNegativos += !parseInt(element.punto_negativo) ? 0 : element.punto_negativo
  })
  let totalPuntos = puntosPositivos - puntosNegativos

  tBody.innerHTML += `
  <tr>
    <th scope="row">${element.id_coder}</th>
    <td>${element.nombre}</td>
    <td>${nombreClan[0].nombre}</td>
    <td class="fw-bold">${totalPuntos}</td>
    <td>
      <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
      <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
</tr> 
  
  `

//necesito traer el nombre de el clan 
//necesito saber el total de puntos de el coder
//que es lo que tengo : id,nombre


    })
//``

  }



}


export default new DataControllerModule();

