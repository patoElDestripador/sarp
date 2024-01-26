/*inicio variables globales */
let urlBase = "http://localhost:3000/";  

/*fin variables globales */


function getCoders() {
  fetch(`${urlBase}coders`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
}

function getusuario(correo,password) {
  fetch(`${urlBase}usuario`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      //validar correo y password
      //luego validar rol y guardar en SessionStorage
    })
    .catch((err) => console.error(err));
}
