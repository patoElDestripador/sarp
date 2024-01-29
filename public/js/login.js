
function setSessionStorage(key,value) {return localStorage.setItem(key, JSON.stringify(value));}
function getSessionStorage(key) {return localStorage.getItem(key);}

function login() {
    let nombre_usuario = document.getElementById("").value
    let password = document.getElementById("").value

    //validar que el user y passwrod estan correctas
    validarUSuario(nombre_usuario,password)
}

validarUSuario(user,pass){
    fetch(`${url}/usuario?nombre_usuario=${user.user}`)
    .then(res => res.json())
    .then(data => {
        let usuario = {
            nombre_usuaurio : data.nombre_usuaurio,
            password : data.password,
            id : data.id
        }
            setSessionStorage("usuario",usuario)
    })
}

getSessionStorage("usuario")
