/*inicio variables globales */
//let urlBase = "http://localhost:3000/";  
let urlBase = "https://sarpbackendv1.onrender.com/"; //  directo en la web "No guarda o actualiza cambios "

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
