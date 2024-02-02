
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
    
  }





}


export default new DataControllerModule();

