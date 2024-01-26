//En este app se cargaran funciones necesarias en todas las paginas 
let leDate = new Date();

  function mensajeFuncionDesactivada() {
    alert(
      "Esta funcion se encuntra desactivada temporalmente por favor intentar despues"
    );
  }
  function cambioIdioma() {
    //apartir de aqui se generaria el cambio de leguaje de la pagina
  }
  function normalizarNombre(nombre) {
    return nombre.split(' ').map(palabra => {return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()}).join(' ');
  }
  function obtenerHora() {
    let hora = leDate.getHours();
    let minuto = leDate.getMinutes();
    let segundo = leDate.getSeconds();
    hora = hora < 10 ? '0' + hora : hora;
    minuto = minuto < 10 ? '0' + minuto : minuto;
    segundo = segundo < 10 ? '0' + segundo : segundo;
    return hora + ':' + minuto + ':' + segundo;  //retorna hora formateada 08:29:35
  }
  function obtenerFecha() {
    let año = leDate.getFullYear();
    let mes = leDate.getMonth() + 1;
    let dia = leDate.getDate();
    mes = mes < 10 ? '0' + mes : mes;
    dia = dia < 10 ? '0' + dia : dia;
    return dia + '/' + mes + '/' + año; //retorna fecha formateada 26/01/2024
  }
  function validarCorreo(){

  }



