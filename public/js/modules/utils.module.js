


function mensajeFuncionDesactivada() {
    alert(
      "Esta funcion se encuntra desactivada temporalmente por favor intentar despues"
    );
  }
  function cambioIdioma() {
    //apartir de aqui se generaria el cambio de leguaje de la pagina
  }


  
  class UtilsModule {
  
    constructor() {
      this.ledate = new Date();
    }
    
    normalizarNombre(nombre) {
      return nombre.split(' ').map(palabra => {return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()}).join(' ');
    }
    
    obtenerHora() {
      let leDate =  new Date();
      let hora = leDate.getHours();
      let minuto = leDate.getMinutes();
      let segundo = leDate.getSeconds();
      hora = hora < 10 ? '0' + hora : hora;
      minuto = minuto < 10 ? '0' + minuto : minuto;
      segundo = segundo < 10 ? '0' + segundo : segundo;
      return hora + ':' + minuto + ':' + segundo;  //retorna hora formateada 08:29:35
    }

    obtenerFecha() {
      let leDate =  new Date();
      let año = leDate.getFullYear();
      let mes = leDate.getMonth() + 1;
      let dia = leDate.getDate();
      mes = mes < 10 ? '0' + mes : mes;
      dia = dia < 10 ? '0' + dia : dia;
      return dia + '/' + mes + '/' + año; //retorna fecha formateada 26/01/2024
    }
    
    validarCorreo(){
    }

        // Nega
        loginInvalide() {
          Swal.fire({
            position: "top-center",
            icon: "info",
            title: "El correo o la contraseña no son correctos intenta nuevamente",
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              container: 'my-container',
              popup: 'my-popup',
              header: 'my-header',
              title: 'my-title',
              closeButton: 'my-close-button',
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger',
              // Añade o reemplaza según los elementos que necesites personalizar
            },
            buttonsStyling: false, // Importante para que SweetAlert2 no aplique sus estilos por defecto sobre tus botones
            showCancelButton: true, // Muestra el botón cancelar para que puedas ver la clase aplicada
            confirmButtonText: 'Aceptar',
            cancelButtonText: 'Cancelar',
          });
        } 
    
      // Login aprobado
      alertToastAprov() {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
      
        Toast.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso.'
        });
      };

      // login Negado
      alertToastNeg() {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
      
        Toast.fire({
          icon: 'error',
          title: 'El correo o la contraseña no son correctos. Intente nuevamente.'
        });
      };



    setSessionStorage(key,value) {return localStorage.setItem(key, JSON.stringify(value));}
    
    getSessionStorage(key) { return JSON.parse(localStorage.getItem(key)); }

    removeSessionStorage(key) { return localStorage.removeItem(key); }

    promesa(val ) {
    const promise = new Promise((resolve, reject) => resolve(val));
    promise.then((res) =>{});
      //En este caso esta promesa devuelve una accion a ejecutar es decir si debemos de redirigir o guardar informacion la tratariamos aqui 
    }
}


export default new UtilsModule();
