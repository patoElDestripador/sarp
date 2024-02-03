class CrudModule {
  constructor() {
   // this.urlBase = "https://sarpbackendv1.onrender.com/"; //  directo en la web "No guarda o actualiza cambios "
    this.urlBase = "http://localhost:3000/"; // local
  }

  // Getters
  async getUserByEmail(email) {
    let urlBase = "https://sarpbackendv1.onrender.com/";
    let user = "";
    await fetch(`${urlBase}usuario?correo=${email}`, {
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
    let urlBase = "https://sarpbackendv1.onrender.com/";
    let user = "";
    await fetch(`${urlBase}area?id_area=${id}`, {
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
    let urlBase = "https://sarpbackendv1.onrender.com/";
    let user = "";
    await fetch(`${urlBase}usuario?id_usuario=${id}`, {
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
    await fetch(`${urlBase}coders?id_coder=${id}`, {
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
    await fetch(`${urlBase}trainers?id_trainer=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("getTrainers", err));
    return data;
  }
  async getRolByIdUSer(id) {
    let data = "";
    await fetch(`${this.urlBase}permisos?id_usuario=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("getRolByIdUSer", err));
    return data;
  }
  async getClanById(id) {
    let urlBase = "http://localhost:3000/";
    let data = "";
    await fetch(`${urlBase}clanes?id_clan=${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("getClanById", err));
    return data;
  }


  
  async getRiwiPointsByUserid(idCoder) {
    let urlBase = "http://localhost:3000/";
    let data = "";

    await fetch(`${urlBase}riwi_points?id_coder=${idCoder}`)
      .then((response) => response.json())
      .then((res) => {
          data =  res;
      })
      .catch((err) => erroRequest("getRiwiPointsByUserid", err))
      return data
  }

  //getCodersByClan()


  async getCoders() {
    let urlBase = "http://localhost:3000/";
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
  async getClanes() {
    let data = "";
    await fetch(`${urlBase}clanes`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("getClanes", err));
    return data;
  }
  async getArea() {
    let data = "";
    await fetch(`${urlBase}area`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("getArea", err));
    return data;
  }
  async getPermisos() {
    let data = "";
    await fetch(`${urlBase}permisos`, {
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
    let urlBase = "http://localhost:3000/";
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
    await fetch(`${urlBase}clanes/`, {
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
    await fetch(`${urlBase}area/`, {
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
    await fetch(`${urlBase}permisos/`, {
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

  async updateCoders(dataSend) {
    let data = "";
    await fetch(`${urlBase}coders/`, {
      method: "PUT",
      headers: { "Content-type": "aplication/json" },
      body: JSON.stringify(dataSend),
    })
      .then((response) => response.json())
      .then((res) => {
        data = res;
      })
      .catch((err) => erroRequest("updateCoders", err));
    return data;
  }
  async updateClanes(dataSend) {
    let data = "";
    await fetch(`${urlBase}clanes/`, {
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
    await fetch(`${urlBase}area/`, {
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
    await fetch(`${urlBase}permisos`, {
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

  //clanes;
  //rol;
  //area;
  //permisos;
  //trainers;
  //usuario;
  //coders;
  //riwi_points;

  erroRequest(locateError, error) {
    console.log("error detectado ",locateError,error);
  }
}

export default new CrudModule();
