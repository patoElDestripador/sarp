
import crudModule from "./crud.module.js";

class DataControllerModule {
  constructor(){}

  async listCodersByClan() {
    await crudModule.getClans()
  }
  async setPointsInCard(id){
    let validation = !document.getElementById("totalPtsPositive") ? 0 : true
    if(validation){
      let {positivePoints,negativePoints,total} = await crudModule.getOnlyRiwiPointsByUserid(id);
      document.getElementById("totalPtsPositive").innerText = positivePoints
      document.getElementById("totalPtsNegative").innerText = negativePoints
      document.getElementById("totalPtsAvailable").innerText = total
    }
  }
  
  // Listar Coders
  async setCodersInList(){
    let tBody = document.getElementById("historyCoders")
    let coders = await crudModule.getCoders()
    let contador = 1;

    for (const element of coders) {
      let dataEmail = await crudModule.getUserById(element.id);
      let puntosCoder = await crudModule.getRiwiPointsByUserid(element.id);
      let clans = await crudModule.getClansById(element.id_clan)

      console.log(puntosCoder)
      tBody.innerHTML += `
        <tr>
            <th scope="row" class="text-center">${contador}</th>
            <td class="text-center">${element.document}</td>
            <td>${element.name}</td>
            <td>${dataEmail.email}</td>
            <td class="text-center">${clans[0].name}</td>
            <td class="fw-bold text-center">${puntosCoder.riwiPointsTotal}</td>
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
    for (const element of trainers) {
      let dataArea = await crudModule.getAreaById(element.id_area)
      tBody.innerHTML += `
      <tr>
        <th scope="row" class="text-center">${contador}</th>
        <td class="text-center">${element.document}</td>
        <td>${element.name}</td>
        <td>${dataArea.name}</td>
        <td class="fw-bold text-center">${element.points_available}</td>
        <td class="text-center">
          <svg ${element} xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          
        </td>
      </tr>
      `
      contador ++;
    } 
  }

  // Editar Coders
  // Se envia la información al formulario
  async editCoders (id=8){
    let dataCoder = await crudModule.getCodersById(id)
    let dataUser = await crudModule.getUserById(dataCoder[0].id_user)
    let dataClan = await crudModule.getClansById(dataCoder[0].id_clan)
    let dataPermits = await crudModule.getPermitsByIdUSer(dataCoder[0].id)
    
    document.getElementById("documentId").value = (dataCoder[0].document)
    document.getElementById("name").value = dataCoder[0].name
    document.getElementById("email").value = dataUser.email
    document.getElementById("password").value = dataUser.password
    document.getElementById("imgUser").value = dataUser.img
    document.getElementById("idSelectClan").value = dataClan[0].id
    document.getElementById("idSelectRol").value = dataPermits[0].id_rol
  }
  // Se envia la información al la base de datos
  async updateCoders(){
    let documentId = document.getElementById("documentId").value
    let idUser = await crudModule.getCodersByDocument(documentId)
    let user = idUser[0].id_user
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let imgUser = document.getElementById("imgUser").value
    let clan = document.getElementById("idSelectClan").value
    let rol = document.getElementById("idSelectRol").value
    
    let dataCoder = { 
      id: idUser.id, 
      id_user:  user,
      id_clan: clan, 
      name: name, 
      document: documentId,
      date_created: idUser.date_created,
      date_retirement: idUser.date_retirement,
      status: idUser.status
    };

    let dataUser = {  
      id: idUser.id,
      email: email, 
      password: password, 
      img: imgUser 
    };

    let dataPermit = { 
      id: idUser.id,
      id_user: idUser.id,
      id_rol: rol,
      date_created: idUser.date_created,
      status: idUser.status
    };

    await crudModule.updateCodersById(dataCoder,idUser[0].id);
    await crudModule.updateUsersById(dataUser,idUser[0].id_user)
    await crudModule.updatePermitById(dataPermit,idUser);


    document.getElementById("documentId").value = ""
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("imgUser").value = ""
    document.getElementById("idSelectClan").value = ""
    document.getElementById("idSelectRol").value = ""
  }
  
  // Editar Trainers
  // Se envia la información al formulario
  async editTrainer (id=222){
    let dataTrainer = await crudModule.getTrainersById(id)
    let dataUser = await crudModule.getUserById(dataTrainer[0].id_user)
    let dataArea = await crudModule.getAreaById(dataTrainer[0].id_area)
    let dataPermits = await crudModule.getPermitsByIdUSer(dataTrainer[0].id_user)
    console.log(dataTrainer)
    
    document.getElementById("documentId").value = (dataTrainer[0].document)
    document.getElementById("name").value = dataTrainer[0].name
    document.getElementById("email").value = dataUser.email
    document.getElementById("password").value = dataUser.password
    document.getElementById("imgUser").value = dataUser.img
    document.getElementById("idSelectArea").value = dataArea.id
    document.getElementById("idSelectRol").value = dataPermits[0].id_rol
  }
  // Se envia la información al la base de datos
  async updateTrainers(){
    let documentId = document.getElementById("documentId").value
    let idTrainer = await crudModule.getTrainerByDocument(documentId)
    let user = idTrainer[0].id_user
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let imgUser = document.getElementById("imgUser").value
    let area = document.getElementById("idSelectArea").value
    let rol = document.getElementById("idSelectRol").value
    
    let datatrainer = { 
      id: idTrainer.id, 
      id_user:  user,
      id_area: area, 
      document: documentId,
      name: name, 
      date_created: idTrainer.date_created,
      date_retirement: idTrainer.date_retirement,
      points_available: idTrainer.points_available,
      status: idTrainer.status
    };

    let dataUser = {  
      id: idTrainer.id,
      email: email, 
      password: password, 
      img: imgUser 
    };

    let dataPermit = { 
      id: idTrainer.id,
      id_user: idTrainer.id,
      id_rol: rol,
      date_created: idTrainer.date_created,
      status: idTrainer.status
    };

    await crudModule.updateTrainersById(datatrainer,idTrainer[0].id);
    await crudModule.updateUsersById(dataUser,idTrainer[0].id_user)
    await crudModule.updatePermitById(dataPermit,idTrainer);


    document.getElementById("documentId").value = ""
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
    document.getElementById("imgUser").value = ""
    document.getElementById("idSelectArea").value = ""
    document.getElementById("idSelectRol").value = ""
  }


  // Profile coders
  // El idUserLogin se debe traer del session storage 
  async setInformationCoder(idUserLogin) {
    
    let tBody = document.getElementById("codersHistoryPoints")
    let contador = 1;
    let puntosPositivos = 0;
    let puntosNegativos = 0;

    let dataUser = await crudModule.getUserById(idUserLogin)
    let dataPermits  = await crudModule.getPermitsByIdUSer(dataUser.id) // Revisar
    let dataRol = await crudModule.getRolByIdUSer(dataPermits[0].id_rol) // Revisar
    let dataUsersProfile = await crudModule.getCodersById(idUserLogin)
    let dataPoints = await crudModule.getRiwiPointsByUserid(dataUsersProfile[0].id)
    let dataClans = await crudModule.getClansById(dataUsersProfile[0].id_clan)
    this.setPointsInCard(dataUsersProfile[0].id)
    // Se completan los datos en la card del perfil
    document.getElementById("emailUser").placeholder  = dataUser.email
    document.getElementById("imgUser").setAttribute ("src", dataUser.img)
    document.getElementById("rolUser").innerText = dataRol[0].name
    document.getElementById("nameUser").innerText = dataUsersProfile[0].name
    document.getElementById("documentId").placeholder  = dataUsersProfile[0].document
    document.getElementById("clanUser").placeholder = dataClans[0].name
    
    // Se completan los datos en la el historico de puntos
    for (const element of dataPoints){
      let dataTrainer = await crudModule.getTrainersById(element.id_trainers)
      console.log(element.id_trainers)
      console.log(dataTrainer)
      puntosPositivos = parseInt(element.positive_point) || 0;
      puntosNegativos = parseInt(element.negative_point) || 0;
      
      tBody.innerHTML +=`
      <tr>
        <th scope="row" class="text-center">${contador}</th>
        <td class="fw-bold text-center">${element.date_created}</td>
        <td>${element.specific_reason}</td>
        <td>${element.observation}</td>
        <td>${dataTrainer[0].name}</td>
        <td class="fw-bold text-center">${puntosPositivos + puntosNegativos}</td>
      </tr>
      `
      contador ++;
    }
  }
  
  // Profile Trainer
  // El idUserLogin se debe traer del session storage 
  async setInformationTrainer(user) {   
    let idUserLogin = user.rol
    this.setPointsInCard(idUserLogin) 
    let tBody = document.getElementById("informationTrainer")
    let contador = 1;
    let puntosPositivos = 0;
    let puntosNegativos = 0;

    let dataUser = await crudModule.getUserById(idUserLogin)
    console.log(dataUser)
    let dataPermits  = await crudModule.getPermitsByIdUSer(dataUser.id) //Revisar
    let dataRol = await crudModule.getRolByIdUSer(dataPermits[0].id_rol) // Revisar
    let dataUsersProfile = await crudModule.getTrainersById(idUserLogin)
    console.log(dataUsersProfile)
    let dataArea = await crudModule.getAreaById(dataUsersProfile[0].id_areas)
    let dataPoint = await crudModule.getRiwiPointsByTrainer(dataUsersProfile[0].id)
    
    // Se completan los datos en la card del perfil
    document.getElementById("emailUser").placeholder  = dataUser.email
    document.getElementById("imgUser").setAttribute ("src", dataUser.img)
    document.getElementById("rolUser").innerText = dataRol[0].name
    document.getElementById("nameUser").innerText = dataUsersProfile[0].name
    document.getElementById("documentId").placeholder  = dataUsersProfile[0].document
    document.getElementById("materiaUser").placeholder = dataArea.name
    
    // Se completan los datos en la el historico de puntos
    for (const element of dataPoint){
      let dataCoder = await crudModule.getCodersById(element.id_coders);
      puntosPositivos = parseInt(element.positive_point) || 0;
      puntosNegativos = parseInt(element.negative_point) || 0;
      
      tBody.innerHTML +=`
      <tr>
        <th scope="row" class="text-center">${contador}</th>
        <td class="fw-bold text-center">${element.date_created}</td>
        <td>${element.specific_reason}</td>
        <td>${element.observation}</td>
        <td>${dataCoder[0].name}</td> <!-- Asumiendo que dataCoder es un arreglo y quieres el nombre del primer objeto -->
        <td class="fw-bold text-center">${puntosPositivos - puntosNegativos}</td>
      </tr>
    `
      contador ++;
    }
  }

  // Funcion para listar clanes
  async setClansInList(){
    let tBody = document.getElementById("pointsHistoryClans")
    let contador = 1
    let clan1 =0
    let clan2 =0
    let clan3=0
    let clan4=0
    let coders = await crudModule.getCoders()
    coders.forEach(async (resultado) =>{
        if (resultado.Id_clan == 1){ clan1++} 
        else if(resultado.Id_clan == 2){clan2++}
        else if(resultado.Id_clan == 3){clan3++}
        else if(resultado.Id_clan == 4){clan4++}
    })
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
              </tr>`
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
          contador ++
        }
      });
    }
    //Inicio de list porpierty
    listInSelectPropierty(level,language){
      let propiertys = document.getElementById("containerDropdownItemForCategory")
      if(level == 1 && language == "es"){
        //clan
      }else if(level == 1 && language == "en"){

      }
      if(level == 2 && language == "es"){
        propiertys.innerHtml = `
        <li><a class="dropdown-item" href="#">Mayor</a></li>
        <li><a class="dropdown-item" href="#">Menor</a></li>
        `
      }else if(level == 2 && language == "en"){
        
      }
      if(level == 3 && language == "es"){
        propiertys.innerHtml = `
        <li><a class="dropdown-item" href="#">A-Z</a></li>
        <li><a class="dropdown-item" href="#">Z-A</a></li>
        `
      }  
      if(level == 4 && language == "es"){
        //materia
        propiertys.innerHtml = `
        <li><a class="dropdown-item" href="#"></a></li>
        `
      }else if(level == 4 && language == "en"){
      }
    }
    //fin de list propierty
    //``

    searchCoderTorate(){
          Swal.fire({
      title: "Agregar Riwi point",
      text: "Busca por documento o por nombre",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "buscar",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
            let buscarCoder = await  crudModule.getCoders()
            console.log(buscarCoder)
            let buscar = () => {
              return buscarCoder.filter(user => {
                return user.name.startsWith(usuario) || user.document.startsWith(usuario) 
              });
            };

            let input = document.getElementById("swal2-input")
            input.setAttribute("list","browsers")
            input.innerHTML += `<datalist id="browsers">
              <option value="Chrome"></option>
              <option value="Firefox"></option>
              <option value="Internet Explorer"></option>
              <option value="Opera"></option>
              <option value="Safari"></option>
              <option value="Microsoft Edge"></option>
            </datalist>`

            buscar()
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          });
        }
        });
     }

}



export default new DataControllerModule();

