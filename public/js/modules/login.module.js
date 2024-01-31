import crud from './crud.module.js'
import utils from './utils.module.js'

class LoginModule {

    constructor() {
      this.email = ""
      this.password = ""
    }

  async validateLogin() {
    console.log("entro aki");
      this.email= "SofiaMartínezRuiz@gmail.com" //document.getElementById("inputIdEmailLogin");
      this.password = 12345678 //document.getElementById("inputIdPasswordLogin");
    let crudUser = await crud.GetUserByEmail(this.email)

    if(crudUser.correo == this.email && crudUser.password == this.password )
        utils.setSessionStorage("user",crudUser)
        createTrainerPage()
    location.href ="./listTrainer.html";
      if(crudUser.rol == "trainer" ){
      }else if(crudUser.rol == "admin" ){
        location.href ="./listTrainer.html";
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
    "id": "6a24"
  }


*/



export default new LoginModule()


