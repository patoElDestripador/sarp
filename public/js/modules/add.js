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