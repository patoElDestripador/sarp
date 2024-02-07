import crud from './crud.module.js'
import utils from './utils.module.js'

const APP_URL= "http://127.0.0.1:5500/public/html/";

class LoginModule {

    constructor() {
      this.email = ""
      this.password = ""
    }
  
  
  async validateLogin() {
    this.email= document.getElementById("inputIdEmailLogin").value;
    this.password = document.getElementById("inputIdPasswordLogin").value;
    let crudUser = await crud.getUserByEmail(this.email)
    if(crudUser && crudUser.email == this.email && crudUser.password == this.password ){
      let permits  = await crud.getRolByIdUSer(crudUser.id);
      let temporaryArray = [];
      permits.forEach(e=>{temporaryArray.push(e.id_rol)})
      let newUser = {...crudUser,rol :temporaryArray[0]};
      console.log("holi",newUser)
      utils.setSessionStorage("user",newUser);
      if (newUser.rol == "1") {
        location.href = APP_URL + "userProfileCoder.html";
      } else if (newUser.rol == "2") {
        //location.href ="./listTrainer.html";
      } else if (newUser.rol == "3") {
        location.href = APP_URL + "userProfileAdmin.html";
        utils.alertToastAprov()

      }
    }else {
      utils.alertToastNeg()
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


