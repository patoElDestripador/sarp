
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
    setSessionStorage(key,value) {return localStorage.setItem(key, JSON.stringify(value));}
    
    getSessionStorage(key) { return localStorage.getItem(key); }

    removeSessionStorage(key) { return localStorage.removeItem(key); }

    promesa(val ) {
    const promise = new Promise((resolve, reject) => resolve(val));
    promise.then((res) =>{});
      //En este caso esta promesa devuelve una accion a ejecutar es decir si debemos de redirigir o guardar informacion la tratariamos aqui 
    }




  
  }

// Inicio Menu Toggle

const htmlContent = `
  <div class="toggle"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#141414" d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12"/></svg></div>
  <li style="--i:-2;--clr:#141414"  >
      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#141414" d="M17 2H7C5.3 2 4 3.3 4 5v6h8.6l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l4 4c.4.4.4 1 0 1.4l-4 4c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3H4v6c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3"/></svg></a>
  </li>
  <li style="--i:-1;--clr:#141414"  >
      <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#141414" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"/></svg></a>
  </li>
  <li style="--i:0;--clr:#141414">
  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#141414" d="M256 136a8 8 0 0 1-8 8h-16v16a8 8 0 0 1-16 0v-16h-16a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 8 8m-112 21.68a68 68 0 1 0-71.9 0c-20.65 6.76-39.23 19.39-54.17 37.17A8 8 0 0 0 24 208h168a8 8 0 0 0 6.13-13.15c-14.95-17.78-33.53-30.41-54.13-37.17"/></svg></a>
  </li>
  <li style="--i:1;--clr:#141414">
  <a href="#"  ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="#141414" d="M64.12 147.8a4 4 0 0 1-4 4.2H16a8 8 0 0 1-7.8-6.17a8.35 8.35 0 0 1 1.62-6.93A67.79 67.79 0 0 1 37 117.51a40 40 0 1 1 66.46-35.8a3.94 3.94 0 0 1-2.27 4.18A64.08 64.08 0 0 0 64 144c0 1.28 0 2.54.12 3.8m182-8.91A67.76 67.76 0 0 0 219 117.51a40 40 0 1 0-66.46-35.8a3.94 3.94 0 0 0 2.27 4.18A64.08 64.08 0 0 1 192 144c0 1.28 0 2.54-.12 3.8a4 4 0 0 0 4 4.2H240a8 8 0 0 0 7.8-6.17a8.33 8.33 0 0 0-1.63-6.94Zm-89 43.18a48 48 0 1 0-58.37 0A72.13 72.13 0 0 0 65.07 212A8 8 0 0 0 72 224h112a8 8 0 0 0 6.93-12a72.15 72.15 0 0 0-33.74-29.93Z"/></svg></a>
  </li>
  <li style="--i:2;--clr:#141414" >
      <a href="#" class="" ><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#141414" fill-opacity="0" stroke="#ffffff" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="32;0"/><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"/><animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"/></path></svg></a>
  </li>
  `;
  const menuToggleElement  = document.getElementById("menuToggle");

  if (menuToggleElement) {
    menuToggleElement.innerHTML = htmlContent;
  } else {
    console.log('No se encontró el elemento con el id "menuToggle".');
  }

  // Fin Menu Toggle
  

  export default new UtilsModule();