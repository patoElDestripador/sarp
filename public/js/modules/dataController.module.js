
import crudModule from "./crud.module";

class DataControllerModule {
  constructor(){}

  async listCodersByClan() {
    await crudModule.getClanes()


  }






}


export default new DataControllerModule();

