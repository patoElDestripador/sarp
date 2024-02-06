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
      .catch((err) => erroRequest("getCoder", err));
    return data;
  }
  async getTrainersById(id) {

    let data = "";
    await fetch(`${urlBase}trainers?id_user=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("getTrainers", err));
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
      .catch((err) => erroRequest("getPermitsByIdUSer", err));
    return data;
  }

  async getRolByIdUSer(id) {

    let data = "";
    await fetch(`${urlBase}roles?id=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("getRolByIdUSer", err));
      return data;
  }
  async getClansById(id) {
  let data = ''
  await fetch(`${urlBase}clans?id=${id}`)
  .then((response) => response.json())
  .then((res) => {
    data = res;
  })
  .catch((err) => erroRequest("getClansById", err));
  return data;
  }
  
  async getRiwiPointsByUserid(id){
    let data = "";
    await fetch(`${urlBase}riwi_points?id=${idCoder}`)
      .then((response) => response.json())
      .then((res) => {
        let riwiPoints = {
          positivePoints,
          negativePoints,
          total
        }
        res.forEach(element => {
        riwiPoints.positivePoints += element.positive_point
        riwiPoints.negativePoints += !parseInt(element.negative_point) ? 0 : element.negative_point
        })
        riwiPoints.total = riwiPoints.positivePoints - riwiPoints.negativePoints
          data =  riwiPoints;
      })
      .catch((err) => erroRequest("getRiwiPointsByUserid", err))
      return data
  }

  async getRiwiPointsByTrainer(id) {

    let data = "";
    await fetch(`${urlBase}riwi_points?id_trainers=${id}`)
    .then((response) => response.json())
    .then((res) => {
      data = res;
    })
      .catch((err) => erroRequest("getRiwiPointsByTrainer", err));
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
      .catch((err) => erroRequest("getCoders", err));
    return data;
  }
  async getClans() {
    let data = "";
    await fetch(`${urlBase}clans`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("getClans", err));
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
      .catch((err) => erroRequest("getArea", err));
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
      .catch((err) => erroRequest("getPermisos", err));
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
      .catch((err) => erroRequest("getTrainers", err));
    return data;
  }
  async 1() {
    let data = "";
    await fetch(`${urlBase}usuario`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("getUsuario", err));
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
      .catch((err) => erroRequest("getRiwiPoints", err));
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
      .catch((err) => erroRequest("setCoders", err));
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
      .catch((err) => erroRequest("setClanes", err));
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
      .catch((err) => erroRequest("setRol", err));
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
      .catch((err) => erroRequest("setArea", err));
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
      .catch((err) => erroRequest("setPermisos", err));
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
      .catch((err) => erroRequest("setTrainers", err));
    return data;
  }
  async setUsuario(dataSend) {
    let data = "";
    await fetch(`${urlBase}usuario/`, {
      method: "POST",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("setUsuario", err));
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
      .catch((err) => erroRequest("setRiwiPoints", err));
    return data;
  }

  // Updates

  async updateCodersById(dataSend, id) {
    let data = "";
    await fetch(`${urlBase}coders?id=${id}`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("updateCodersById", err));
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
      .catch((err) => erroRequest("updateClanes", err));
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
      .catch((err) => erroRequest("updateRol", err));
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
      .catch((err) => erroRequest("updateArea", err));
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
      .catch((err) => erroRequest("updatePermisos", err));
    return data;
  }
  async updateTrainers(dataSend) {
    let data = "";
    await fetch(`${urlBase}trainers/`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("updateTrainers", err));
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
      .catch((err) => erroRequest("updateUsuario", err));
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
      .catch((err) => erroRequest("updateRiwiPoints", err));
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
