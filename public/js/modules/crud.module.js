let urlBase = "http://localhost:3000/";
class CrudModule {
  constructor() {
   //this.urlBase = "https://sarpbackendv1.onrender.com/"; //  directo en la web "No guarda o actualiza cambios "
    this.urlBase = "http://localhost:3000/"; // local
  }

  // Getters
  async getUserByEmail(email) {
    let user = "";
    await fetch(`${urlBase}users?email=${email}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        user = data[0];
      })
      .catch((err) => console.error(err));
    return user;
  }

  async getCodersByDocument(document) {
    let data = "";
    await fetch(`${urlBase}coders?document=${document}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getCodersByDocument", err));
    return data;
  }

  async getTrainerByDocument(document) {
    let data = "";
    await fetch(`${urlBase}trainers?document=${document}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getTrainerByDocument", err));
    return data;
  }

  async getAreaById(id) {

    let user = "";
    await fetch(`${urlBase}areas?id=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        user = data[0];
      })
      .catch((err) => console.error("getAreaById", err));
    return user;
  }
  async getUserById(id) {
    let user = "";
    await fetch(`${urlBase}users?id=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        user = data[0];
      })
      .catch((err) => console.error("getUserById",err));
    return user;
  }
  async getCodersById(id) {

    let data = "";
    await fetch(`${urlBase}coders?id=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getCoder", err));
    return data;
  }
  async getTrainersById(id) {
    let data = "";
    await fetch(`${urlBase}trainers?id=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getTrainers", err));
    return data;
  }
  async getPermitsByIdUSer(id) {

    let data = "";
    await fetch(`${urlBase}permits?id=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getPermitsByIdUSer", err));
    return data;
  }

  async getRolByIdUSer(id) {

    let data = "";
    await fetch(`${urlBase}permits?id_user=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getRolByIdUSer", err));
      return data;
  }
  async getClansById(id) {
  let data = ''
  await fetch(`${urlBase}clans?id=${id}`)
  .then((response) => response.json())
  .then((res) => {
    data = res;
  })
  .catch((err) => this.erroRequest("getClansById", err));
  return data;
  }
  
  async getOnlyRiwiPointsByUserid(id){
    let data = "";
    await fetch(`${urlBase}riwi_points?id_coders=${id}`)
      .then((response) => response.json())
      .then((res) => {
        let riwiPoints = {
          positivePoints: 0,
          negativePoints: 0,
          total: 0
        }
        res.forEach(element => {
        riwiPoints.positivePoints += !parseInt(element.positive_point) ? 0 : element.positive_point
        riwiPoints.negativePoints += !parseInt(element.negative_point) ? 0 : element.negative_point
        })
        console.log()
        riwiPoints.total = riwiPoints.positivePoints - riwiPoints.negativePoints
          data =  riwiPoints;
      })
      .catch((err) => this.erroRequest("getOnlyRiwiPointsByUserid", err))
      return data
  }
  async getRiwiPointsByUserid(id){
    let data = "";
    await fetch(`${urlBase}riwi_points?id_coders=${id}`)
      .then((response) => response.json())
      .then((res) => {
          data =  res;
      })
      .catch((err) => this.erroRequest("getRiwiPointsByUserid", err))
      return data
  }

  async getRiwiPointsByTrainer(id) {

    let data = "";
    await fetch(`${urlBase}riwi_points?id_trainers=${id}`)
    .then((response) => response.json())
    .then((res) => {
      
    })
      .catch((err) => this.erroRequest("getRiwiPointsByTrainer", err));
      return data
  }

  //getCodersByClan()

  async getCoders() {
    

    let data = "";
    await fetch(`${urlBase}coders`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getCoders", err));
    return data;
  }
  async getClans() {
    let urlBase = "http://localhost:3000/";
    let data = "";
    await fetch(`${urlBase}clans`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getClans", err));
    return data;
  }
  async getArea() {
    let data = "";
    await fetch(`${urlBase}areas`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getArea", err));
    return data;
  }
  async getPermits() {
    let data = "";
    await fetch(`${urlBase}permits`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getPermisos", err));
    return data;
  }
  async getTrainers() {

    let data = "";
    await fetch(`${urlBase}trainers`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getTrainers", err));
    return data;
  }
  async getUsuario() {
    let urlBase = "http://localhost:3000/"
    let data = "";
    await fetch(`${urlBase}users `, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getUsuario", err));
    return data;
  }
  async getRiwiPoints() {
    let data = "";
    await fetch(`${urlBase}riwi_points`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("getRiwiPoints", err));
    return data;
  }

  // Seters

  async setCoders(dataSend) {
    let data = "";
    await fetch(`${urlBase}coders/`, {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("setCoders", err));
    return data;
  }
  async setClanes(dataSend) {
    let data = "";
    await fetch(`${urlBase}clans/`, {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("setClanes", err));
    return data;
  }
  async setRol(dataSend) {
    let data = "";
    await fetch(`${urlBase}rol/`, {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("setRol", err));
    return data;
  }
  async setArea(dataSend) {
    let data = "";
    await fetch(`${urlBase}areas/`, {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("setArea", err));
    return data;
  }
  async setPermisos(dataSend) {
    let data = "";
    await fetch(`${urlBase}permits/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("setPermisos", err));
    return data;
  }
  async setTrainers(dataSend) {
    let data = "";
    await fetch(`${urlBase}trainers/`, {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("setTrainers", err));
    return data;
  }
  async setUsuario(dataSend) {
    let data = "";
    await fetch(`${urlBase}users/`, {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("setUsuario", err));
    return data;
  }
  async setRiwiPoints(dataSend) {
    let data = "";
    await fetch(`${urlBase}riwi_points/`, {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("setRiwiPoints", err));
    return data;
  }

  // Updates

  async updateCodersById(dataSend, id) {
    let data = "";
    await fetch(`${urlBase}coders/${id}`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("updateCoders", err));
    return data;
  }

  async updateTrainersById(dataSend, id) {
    let data = "";
    await fetch(`${urlBase}trainers/${id}`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("updateTrainersById", err));
    return data;
  }
  async updateUsersById(dataSend, id) {
    let data = "";
    await fetch(`${urlBase}users/${id}`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("updateUsersById", err));
    return data;
  }
  async updateClanes(dataSend) {
    let data = "";
    await fetch(`${urlBase}clans/`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("updateClanes", err));
    return data;
  }
  async updateRol(dataSend) {
    let data = "";
    await fetch(`${urlBase}rol/`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("updateRol", err));
    return data;
  }
  async updateArea(dataSend) {
    let data = "";
    await fetch(`${urlBase}areas/`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("updateArea", err));
    return data;
  }
  async updatePermisos(dataSend) {
    let data = "";
    await fetch(`${urlBase}permits`, {
      method: "POST",
      headers: {
        "Content/-Type": "applicatioPUTon",
      },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("updatePermisos", err));
    return data;
  }

  async updatePermitById(dataSend, id) {
    let data = "";
    await fetch(`${urlBase}permits/id=${id}`, {
      method: "PUT",
      headers: {
        "Content/-Type": "applicatioPUTon",
      },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("updatePermitById", err));
    return data;
  }

  async updateUsuario(dataSend) {
    let data = "";
    await fetch(`${urlBase}usuario/`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("updateUsuario", err));
    return data;
  }
  async updateRiwiPoints(dataSend) {
    let data = "";
    await fetch(`${urlBase}riwi_points/`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => this.erroRequest("updateRiwiPoints", err));
    return data;
  }

  //delete in this case is change status

  //clans;
  //rol;
  //areas;
  //permits;
  //trainers;
  //usuario;
  //coders;
  //riwi_points;

  erroRequest(locateError, error) {
    console.log("error detectado ",locateError,error);
  }
}

export default new CrudModule();
