import crud from './crud.module.js'
import utils from './utils.module.js'

class LoginModule {

    constructor() {
      this.email = ""
      this.password = ""
    }
  
  
  async validateLogin() {
    console.log("sd")
    this.email= document.getElementById("inputIdEmailLogin").value;
    this.password = document.getElementById("inputIdPasswordLogin").value;
    let crudUser = await crud.getUserByEmail(this.email)
    console.log("cuando no encunetra",crudUser)
    if(crudUser && crudUser.correo == this.email && crudUser.password == this.password ){
      //createTrainerPage()
      let permits  = await crud.getRolByIdUSer(crudUser.id_usuario);
      let temporaryArray = []
      permits.forEach(e=>{temporaryArray.push(e.id_rol)})
      let newUser = {...crudUser,permisos :temporaryArray};

      //utils.setSessionStorage("user",crudUser);
      //location.href ="./listTrainer.html";
      /*       if(crudUser. == "trainer" ){
      }else if(crudUser == "admin" ){
        location.href ="./listTrainer.html";
      }*/

    }else {
      console.log("nada pai no existe");
    }
  }
  validateRolLogin() {
    let user = JSON.parse(utils.getSessionStorage("user"))
    console.log(user)
    if(user){
      
    }
    
  }

}

/*

  {
    "id_usuario": 223,
    "correo": "admin.admin@riwi.io.com",
    "password": 789456123,
    "img": "https://imgdb.net/storage/uploads/60cd0f9f76145fc6a1fd28332d0c1b9d7918bb5848a5956acec4e5e8cd783267.png",
    "id": "6a24",
    rol : 1
  }


*/


export default new LoginModule()


