// Guarda Coders
async setCoders() {
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

  // Guarda Clanes
  async setClanes() {
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

  // Guarda Roles
  async setRol() {
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

  // Guarda Area
  async setArea() {
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
  

  // Guarda Permisos
  async setPermisos() {
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

  // Guarda Trainers
  async setTrainers() {
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

  // Guarda usuarios
  async setUsuario() {
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

  // Guarda Puntos
  async setRiwiPoints() {
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

  async () {
    let data = "";
    await fetch (`${urlBase}`)
  }