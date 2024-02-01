class pageModule{
/*creacion pagina creadores*/
createCreators(){
    document.getElementById('creators').innerHTML= `<div class="container-fluid">
    <div class="background-image rounded">
    </div>
    <div class="py-5">
        <div class="row justify-content-center"><!--contenedor-->
          <!-- Seccion Creadores -->
          <div class="col-sm-6 d-grid col-md-8 overflow-hidden my-4 text-center"><!--containerCreators-->
              <div class="row g-4 col-md-12 my-2 justify-content-center"> <!--c-->      
                <!--Card_1-->
                <div class="col-md-4 text-center">
                  <div class="col py-4 d-flex justify-content-center ">
                      <div class="card pb-4 card-dark d-flex ">
                          <img src="https://soyunperro.com/wp-content/uploads/perrocontento.jpg" class=" mx-auto d-block card-img-top bordo" alt="...">
                        <div class="card-body text-center">
                          <h1 class="fw-bold">Johan Sebastian</h1>
                          <h3 class="focus">aqui va el texto</h3>

                        </div>
                      </div>
                  </div>
                  </div>
                <!--------------------------------------------------------------------------->      
                <!--Card_2-->
                <div class="col-md-4 text-center">
                  <div class="col py-4 d-flex justify-content-center ">
                      <div class="card pb-4 card-dark d-flex ">
                          <img src="https://soyunperro.com/wp-content/uploads/perrocontento.jpg" class=" mx-auto d-block card-img-top bordo" alt="...">
                        <div class="card-body">
                          <h1 class="fw-bold">Johan Sebastian</h1>
                          <h3 class="focus">aqui va el texto</h3>
                        </div>
                      </div>
                  </div>
                  </div>
                <!--------------------------------------------------------------------------->
                <!--Card_3-->
                <div class="col-md-4 text-center">
                <div class="col py-4 d-flex justify-content-center ">
                    <div class="card pb-4 card-dark d-flex ">
                        <img src="https://soyunperro.com/wp-content/uploads/perrocontento.jpg" class=" mx-auto d-block card-img-top bordo" alt="...">
                      <div class="card-body">
                        <h1 class="fw-bold">Johan Sebastian</h1>
                        <h3 class="focus">aqui va el texto</h3>
                      </div>
                    </div>
                </div>
                </div>
                  <!-- Fin Puntajes disponibles -->
              </div>    
              <!-- Nosotros-->
              <div class="row justify-content-center text-center my-8">
                <div class="col-sm-10 col-md-10 mb-3 my-sm-0">
                  <div class="card card-dark2 ">
                    <div class="card-body">
                      <h1 class="card-title fs-1 fw-bold focus"> Nosotros                          </h1>
                      <p class="card-text">Somos un equipo de desarrolladores web junior entusiastas y apasionados. </p>
                      <a href="#" class="btn btn-primary ">Conocer mas</a>
                    </div>
                  </div>
                </div>
              </div>
          </div>              
        </div>           
    </div>
  </div>`
    

}
/*========================================================================================================*/
/*Creacion Pagina Lista Clanes*/
createListClans(){
    document.getElementById('listClans').innerHTML=`<div class="container-fluid"><!--contenedorTodoClanes-->
    <div class="background-image rounded"></div>      
    <div class="py-5">
      <div class="row justify-content-center"><!---->
          <!-- Inicio Informacion basica Clan-->
          <div class="col-md-4 sizeCard text-center "><!---->
          <div class="col py-4 d-flex justify-content-center "><!---->
              <div class="card py-4"><!---->
                  <img src="https://soyunperro.com/wp-content/uploads/perrocontento.jpg" class=" mx-auto d-block card-img-top imgUser" alt="...">
                <div class="card-body"><!---->
                  <h3 class="fw-bold">Información clan</h3><!--t-->
                  <form> 
                    <fieldset>
                      <div class="my-3"><!---->
                        <div class="input-group mb-3"><!---->
                          <div class="input-group-text"><!---->
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#7F7D96" d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8"/></svg></span>
                          </div>
                          <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path fill="#7F7D96" fill-rule="evenodd" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-4c0-2.84 0-4.61-.5-5.811V17a3.62 3.62 0 0 1-2.56-1.06l-.752-.752c-.722-.722-1.082-1.082-1.491-1.234a2 2 0 0 0-1.394 0c-.409.152-.77.512-1.49 1.234l-.114.113c-.585.585-.878.878-1.189.932a1 1 0 0 1-.699-.134c-.268-.166-.431-.547-.758-1.308L11 14.667c-.75-1.75-1.124-2.624-1.778-2.952a2 2 0 0 0-1.065-.205c-.729.062-1.401.735-2.747 2.08L3.5 15.5V2.887a2.85 2.85 0 0 0-.328.285" clip-rule="evenodd"/><path stroke="#7F7D96" stroke-width="2" d="M3 10c0-1.914.002-3.249.138-4.256c.131-.978.372-1.496.74-1.865c.37-.37.888-.61 1.866-.741C6.751 3.002 8.086 3 10 3h4c1.914 0 3.249.002 4.256.138c.978.131 1.496.372 1.865.74c.37.37.61.888.742 1.866C20.998 6.751 21 8.086 21 10v4c0 1.914-.002 3.249-.137 4.256c-.132.978-.373 1.496-.742 1.865c-.369.37-.887.61-1.865.742c-1.007.135-2.342.137-4.256.137h-4c-1.914 0-3.249-.002-4.256-.137c-.978-.132-1.496-.373-1.865-.742c-.37-.369-.61-.887-.741-1.865C3.002 17.249 3 15.914 3 14z"/><circle cx="15" cy="9" r="2" fill="#7F7D96"/></g></svg>
                          </div>
                          <input type="url" class="form-control" placeholder="Url imagen clan" aria-label="Imagen de clan">
                        </div>
                        <div class="d-grid d-flex justify-content-center">
                          <a href="#" class="btn btn-primary" type="button">Crear o actualizar</a>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>        
  
          <!-- Inicio Seccion puntajes -->
          <div class="col-sm-6 d-grid col-md-8 overflow-hidden my-4 text-center">
            <div class="row g-4 col-md-12 my-2 justify-content-center">
    
                <!-- Inicio Puntajes positivos -->
                  <div class="col col-md-6 my-2 sizeCard">
                  <div class="card flex-fill border-0">
                        <div class="card-body">
                            <div class="col positive">
                              <h1 id="totalPtsPositive" class="text-center card-title fw-bold sizeFontPts">25</h1>
                              <div class="text-center">Total Pts</div>
                              <h2 class="fs-4 text-center text-wrap card-title fw-bold">Positivos</h>
                            </div>
                        </div>
                      </div>
                  </div>
                <!-- Fin Puntajes positivos -->
          
                <!-- Inicio Puntajes negativos -->
                      <div class="col col-md-6 my-2 sizeCard">
                        <div class="card flex-fill border-0">
                          <div class="card-body">
                              <div class="col negative">
                                <h1 id="totalPtsNegative" class="text-center card-title fw-bold sizeFontPts">25</h1>
                                <div class="text-center">Total Pts</div>
                                <h2 class="fs-4 text-center text-wrap card-title fw-bold">Negativos</h2>
                              </div>
                          </div>
                        </div>
                      </div>
                <!-- Fin Puntajes negativos -->
          
                <!-- Inicio Puntajes disponibles -->
                <div class="col col-md-6 my-2 sizeCard">
                        
                        <div class="card flex-fill border-0">
                          <div class="card-body">
                              <div class="col available">
                                <h1 id="totalPtsAvailable" class="text-center card-title fw-bold sizeFontPts ">25</h1>
                                <div class="text-center">Total Pts</div>
                                <h2 class="fs-4 text-center text-wrap card-title fw-bold">Disponibles</h2>                  
                              </div>
                          </div>
                        </div>
                </div>
                      <!-- Fin Puntajes disponibles -->
            </div>
    
            <!-- Inicio Historico de puntos -->
            <div class="card flex-fill my-3 justify-content-center col-md-11">
              <h2 class="fs-1 fw-bold d-fill my-3">Informe General Clanes</h2>
                <div class="my-2 ">
                  <a href="#" class="btn btn btn-primary m-2" type="button"><svg class="bi me-3" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="14;0"/></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="18;0"/><animate attributeName="d" calcMode="linear" dur="1.5s" keyTimes="0;0.7;1" repeatCount="indefinite" values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"/></path></g></svg>Informe</a>
                  <a href="#" class="btn btn-success m-2" type="button"><svg  class="bi me-3" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="IconifyId18d47b58fd0627ed7176"><g fill="#fff"><circle cx="12" cy="10" r="6"/><rect width="9" height="8" x="8" y="12"/><rect width="17" height="12" x="1" y="8" rx="6"><animate attributeName="x" dur="24s" repeatCount="indefinite" values="1;0;1;2;1"/></rect><rect width="17" height="10" x="6" y="10" rx="5"><animate attributeName="x" dur="15s" repeatCount="indefinite" values="6;5;6;7;6"/></rect></g><circle cx="12" cy="10" r="4"/><rect width="8" height="8" x="8" y="10"/><rect width="11" height="8" x="3" y="10" rx="4"><animate attributeName="x" dur="24s" repeatCount="indefinite" values="3;2;3;4;3"/></rect><rect width="13" height="6" x="8" y="12" rx="3"><animate attributeName="x" dur="15s" repeatCount="indefinite" values="8;7;8;9;8"/></rect><g fill="#fff"><rect width="3" height="4" x="10.5" y="12"/><path d="M12 9L16 13H8L12 9Z"><animateMotion calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v-1v2z" repeatCount="indefinite"/></path></g></mask><rect width="24" height="24" fill="#ffffff" mask="url(#IconifyId18d47b58fd0627ed7176)"/></svg>Cargar Pts</a>
                  <a href="#" class="btn btn-info m-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ffffff" fill-opacity="0" stroke="#ffffff" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="32;0"/><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"/><animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"/></path></svg>Puntuar</a>
                </div>
                <div class="my-2"> 
                </div>


              <div class="card-body">
                <div class="flex-fill">
                  <nav class="navbar">
                    <div class="row overflow-hidden flex-fill">
                      <div class="col d-flex col-sm-12">
                        <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-primary my-2" type="submit">Search</button>
                      </div>
                    </div>
                  </nav>
                  <div class="col g-2 flex-fill">
                    <div class="">
                      <div class="btn-group p-2" role="group">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Categoria
                          </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Item 1</a></li>
                          <li><a class="dropdown-item" href="#">Item 2</a></li>
                        </ul>
                      </div>
                      <div class="btn-group z-3" role="group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Propiedad
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Item 1</a></li>
                          <li><a class="dropdown-item" href="#">Item 2</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="table-responsive my-3 height-table-profile">
                    <table class="table table-striped table-hover">
                      <thead class="table-dark">
                        <tr>
                          <th scope="col">Fecha</th>
                          <th scope="col">Nombres</th>
                          <th scope="col">Cant. Coders</th>
                          <th scope="col">Total Pts</th>
                          <th scope="col">Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">25/01/2024</th>
                          <td>Juan Muños</td>
                          <td class="fw-bold">35</td>
                          <td class="fw-bold">25</td>
                          <td>
                            <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                        </tr>
                        <tr>
                          <th scope="row">25/01/2024</th>
                          <td>Juan Muños</td>
                          <td class="fw-bold">35</td>
                          <td class="fw-bold">25</td>
                          <td>
                            <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                        </tr>
                        <tr>
                          <th scope="row">25/01/2024</th>
                          <td>Juan Muños</td>
                          <td class="fw-bold">35</td>
                          <td class="fw-bold">25</td>
                          <td>
                            <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                        </tr>
                        <tr>
                          <th scope="row">25/01/2024</th>
                          <td>Juan Muños</td>
                          <td class="fw-bold">35</td>
                          <td class="fw-bold">25</td>
                          <td>
                            <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <!-- Fin Historico de puntos -->
          </div>
          <!-- Fin Seccion puntajes -->
  
          <!-- Inicio Seccion enlaces de interes -->
          <div class="row justify-content-center">
              <h2 class="fs-1 fw-bold text-center my-5 ">Enlaces de interes</h2>
          <div class="col d-flex mb-3  my-sm-0 justify-content-evenly">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title fs-3 fw-bold">Coders</h1>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div class="d-grid d-flex gap-2">
                  <a href="#" class="btn btn-primary" type="button">Ver listado</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col d-flex mb-3 my-sm-0 justify-content-evenly">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title fs-3 fw-bold">Trainers</h1>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div class="d-grid d-flex gap-2">
                  <a href="#" class="btn btn-primary" type="button">Ver listado</a>
                </div>
              </div>
            </div>
          </div>
          </div>
          <!--Fin Seccion enlaces de interes -->
  
        
          <!--Inicio Seccion enlaces de interes -->
          <div class="row justify-content-center text-center my-5">
            <div class="col-sm-10 col-md-8 mb-3 my-sm-0">
              <div class="card card-dark">
                <div class="card-body">
                  <h1 class="card-title fs-1 fw-bold focus">Programa de puntos</h1>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna feugiat, posuere est ac, congue tellus. Mauris tincidunt malesuada purus nec cursus. Suspendisse potenti.</p>
                  <a href="#" class="btn btn-primary">Conocer mas</a>
                </div>
              </div>
            </div>
          </div>
              <!-- Fin Seccion enlaces de interes -->
      </div>
    </div>
  
  </div>`


}
/*========================================================================================================*/
/*Creacion Pagina Lista Coders*/
createListCoders(){
    document.getElementById('listCoders').innerHTML=` <div class="container-fluid">
    <div class="background-image rounded"></div>
    <div class="py-5">
      <div class="row justify-content-center"> 
        <!-- Inicio Informacion basica -->
        <div class="col-md-4 sizeCard text-center ">
          <div class="col py-4 d-flex justify-content-center ">
              <div class="card py-4">
                <img src="https://soyunperro.com/wp-content/uploads/perrocontento.jpg" class=" mx-auto d-block card-img-top imgUser" alt="...">
                <div class="card-body">
                  <h3 class="fw-bold">Información personal</h3>
                  <form> 
                    <fieldset>
                      <div class="my-3">
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7F7D96" d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm-9 9H9v2h2zm8 0h-6v2h6zM7 9H5v2h2zm12 0H9v2h10z"/></svg>                            </div>
                          <input id="documentId" type="text" class="form-control" placeholder="123456789" label aria-label="documentId">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#7F7D96" d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8"/></svg></span>
                          </div>
                          <input type="text" class="form-control" placeholder="Nombres y Apellidos" aria-label="Nombres y Apellidos">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#7F7D96" d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79m6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"/></svg>                          
                          </div>
                          <input type="email" class="form-control" placeholder="micorreo@ejemplo.com" aria-label="Email">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7F7D96" d="M7 13.846q-.77 0-1.308-.538q-.538-.539-.538-1.308t.538-1.308q.539-.538 1.308-.538t1.308.538q.538.539.538 1.308t-.538 1.308q-.539.538-1.308.538m0 2.885q1.675 0 2.927-.946t1.608-2.285h2.85l1.069.82q.111.072.229.116q.117.043.26.043t.259-.043q.117-.044.229-.136l1.357-1.05l1.212.933q.13.086.28.14q.149.052.291.027q.142-.025.276-.084q.134-.058.24-.17l1.442-1.536q.125-.131.178-.268q.053-.136.053-.298q0-.161-.056-.295q-.056-.134-.18-.259l-.699-.698q-.13-.13-.28-.186q-.149-.056-.31-.056h-8.7q-.35-1.315-1.594-2.273Q8.698 7.269 7 7.269q-2 0-3.365 1.366Q2.269 10 2.269 12t1.366 3.365Q5 16.731 7 16.731"/></svg>                            
                          </div>
                          <input type="password" class="form-control" placeholder="Password" aria-label="Password">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path fill="#7F7D96" fill-rule="evenodd" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-4c0-2.84 0-4.61-.5-5.811V17a3.62 3.62 0 0 1-2.56-1.06l-.752-.752c-.722-.722-1.082-1.082-1.491-1.234a2 2 0 0 0-1.394 0c-.409.152-.77.512-1.49 1.234l-.114.113c-.585.585-.878.878-1.189.932a1 1 0 0 1-.699-.134c-.268-.166-.431-.547-.758-1.308L11 14.667c-.75-1.75-1.124-2.624-1.778-2.952a2 2 0 0 0-1.065-.205c-.729.062-1.401.735-2.747 2.08L3.5 15.5V2.887a2.85 2.85 0 0 0-.328.285" clip-rule="evenodd"/><path stroke="#7F7D96" stroke-width="2" d="M3 10c0-1.914.002-3.249.138-4.256c.131-.978.372-1.496.74-1.865c.37-.37.888-.61 1.866-.741C6.751 3.002 8.086 3 10 3h4c1.914 0 3.249.002 4.256.138c.978.131 1.496.372 1.865.74c.37.37.61.888.742 1.866C20.998 6.751 21 8.086 21 10v4c0 1.914-.002 3.249-.137 4.256c-.132.978-.373 1.496-.742 1.865c-.369.37-.887.61-1.865.742c-1.007.135-2.342.137-4.256.137h-4c-1.914 0-3.249-.002-4.256-.137c-.978-.132-1.496-.373-1.865-.742c-.37-.369-.61-.887-.741-1.865C3.002 17.249 3 15.914 3 14z"/><circle cx="15" cy="9" r="2" fill="#7F7D96"/></g></svg>
                          </div>
                          <input type="url" class="form-control" placeholder="Url imagen perfil" aria-label="Imagen de perfil">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7F7D96" fill-rule="evenodd" d="M10 6h4c2.828 0 4.243 0 5.121.879C20 7.757 20 9.172 20 12v1.056c0 2.405 0 3.608-.597 4.575c-.598.966-1.674 1.504-3.825 2.58c-1.756.878-2.634 1.317-3.578 1.317s-1.822-.439-3.578-1.317c-2.151-1.076-3.227-1.614-3.825-2.58C4 16.664 4 15.46 4 13.056V12c0-2.828 0-4.243.879-5.121C5.757 6 7.172 6 10 6m2 4c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 10.34 12.284 10 12 10" clip-rule="evenodd"/><path fill="#7F7D96" d="M11 2h2c1.886 0 2.828 0 3.414.586c.414.414.535 1.006.571 1.983c-.82-.07-1.791-.07-2.886-.069H9.9c-1.095 0-2.065 0-2.886.069c.035-.977.157-1.57.57-1.983C8.172 2 9.116 2 11 2"/></svg>                          
                          </div>
                          <select class="form-select"placeholder="Tesla" aria-label="Clan">
                            <option>Clan</option>
                            <option>Clan 1</option>
                            <option>Clan 2</option>
                            <option>Clan 3</option>
                            </select>
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#7F7D96" d="M8 30H2v-6h6zm-4-2h2v-2H4zm15 2h-6v-6h6zm-4-2h2v-2h-2zm15 2h-6v-6h6zm-4-2h2v-2h-2zM16 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2m10 12h-5a4.005 4.005 0 0 1-4-4h-2a4.005 4.005 0 0 1-4 4H6a2.002 2.002 0 0 0-2 2v4h2v-4h5a5.97 5.97 0 0 0 4-1.54V22h2v-5.54A5.97 5.97 0 0 0 21 18h5v4h2v-4a2.002 2.002 0 0 0-2-2"/></svg>
                          </div>
                          <select class="form-select"placeholder="Tesla" aria-label="Clan">
                            <option>Rol</option>
                            <option>Coder</option>
                            <option>Trainer</option>
                            <option>Administrador</option>
                            </select>
                        </div>
                        <div class="d-grid d-flex justify-content-center">
                          <a href="#" class="btn btn-primary" type="button">Crear o actualizar</a>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        <!-- Fin Informacion basica -->
  
        <!-- Inicio Seccion puntajes -->
        <div class="col-sm-6 d-grid col-md-8 overflow-hidden my-4 text-center">
          <div class="row g-4 col-md-12 my-2 justify-content-center">
  
        <!-- Inicio Puntajes positivos -->
        <div class="col col-md-6 my-2 sizeCard">
          <div class="card flex-fill border-0">
                <div class="card-body">
                    <div class="col positive">
                      <h1 id="totalPtsPositive" class="text-center card-title fw-bold sizeFontPts">25</h1>
                      <div class="text-center">Total Pts</div>
                      <h2 class="fs-4 text-center text-wrap card-title fw-bold">Positivos</h>
                    </div>
                </div>
              </div>
            </div>
        <!-- Fin Puntajes positivos -->
  
        <!-- Inicio Puntajes negativos -->
              <div class="col col-md-6 my-2 sizeCard">
                <div class="card flex-fill border-0">
                  <div class="card-body">
                      <div class="col negative">
                        <h1 id="totalPtsNegative" class="text-center card-title fw-bold sizeFontPts">25</h1>
                        <div class="text-center">Total Pts</div>
                        <h2 class="fs-4 text-center text-wrap card-title fw-bold">Negativos</h2>
                      </div>
                  </div>
                </div>
              </div>
        <!-- Fin Puntajes negativos -->
  
        <!-- Inicio Puntajes disponibles -->
        <div class="col col-md-6 my-2 sizeCard">
                
                <div class="card flex-fill border-0">
                  <div class="card-body">
                      <div class="col available">
                        <h1 id="totalPtsAvailable" class="text-center card-title fw-bold sizeFontPts ">25</h1>
                        <div class="text-center">Total Pts</div>
                        <h2 class="fs-4 text-center text-wrap card-title fw-bold">Disponibles</h2>                  
                      </div>
                  </div>
                </div>
              </div>
              <!-- Fin Puntajes disponibles -->
          </div>
  
          <!-- Inicio Historico de puntos -->
          <div class="card flex-fill my-3 justify-content-center col-md-11">
            <h2 class="fs-1 fw-bold d-fill my-3">Informe General Coders</h2>
              <div class="my-2 ">
                <a href="#" class="btn btn btn-primary m-2" type="button"><svg class="bi me-3" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="14;0"/></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="18;0"/><animate attributeName="d" calcMode="linear" dur="1.5s" keyTimes="0;0.7;1" repeatCount="indefinite" values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"/></path></g></svg>Informe</a>
                <a href="#" class="btn btn-success m-2" type="button"><svg  class="bi me-3" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="IconifyId18d47b58fd0627ed7176"><g fill="#fff"><circle cx="12" cy="10" r="6"/><rect width="9" height="8" x="8" y="12"/><rect width="17" height="12" x="1" y="8" rx="6"><animate attributeName="x" dur="24s" repeatCount="indefinite" values="1;0;1;2;1"/></rect><rect width="17" height="10" x="6" y="10" rx="5"><animate attributeName="x" dur="15s" repeatCount="indefinite" values="6;5;6;7;6"/></rect></g><circle cx="12" cy="10" r="4"/><rect width="8" height="8" x="8" y="10"/><rect width="11" height="8" x="3" y="10" rx="4"><animate attributeName="x" dur="24s" repeatCount="indefinite" values="3;2;3;4;3"/></rect><rect width="13" height="6" x="8" y="12" rx="3"><animate attributeName="x" dur="15s" repeatCount="indefinite" values="8;7;8;9;8"/></rect><g fill="#fff"><rect width="3" height="4" x="10.5" y="12"/><path d="M12 9L16 13H8L12 9Z"><animateMotion calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v-1v2z" repeatCount="indefinite"/></path></g></mask><rect width="24" height="24" fill="#ffffff" mask="url(#IconifyId18d47b58fd0627ed7176)"/></svg>Cargar Pts</a>
                <a href="#" class="btn btn-info m-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ffffff" fill-opacity="0" stroke="#ffffff" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="32;0"/><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"/><animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"/></path></svg>Puntuar</a>
              </div>
              <div class="my-2"> 
              </div>


            <div class="card-body">
              <div class="flex-fill">
                <nav class="navbar">
                  <div class="row overflow-hidden flex-fill">
                    <div class="col d-flex col-sm-12">
                      <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-primary my-2" type="submit">Search</button>
                    </div>
                  </div>
                </nav>
                <div class="col g-2 flex-fill">
                  <div class="">
                    <div class="btn-group p-2" role="group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Categoria
                        </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Item 1</a></li>
                        <li><a class="dropdown-item" href="#">Item 2</a></li>
                      </ul>
                    </div>
                    <div class="btn-group z-3" role="group">
                      <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Propiedad
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Item 1</a></li>
                        <li><a class="dropdown-item" href="#">Item 2</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="table-responsive my-3 height-table-profile">
                  <table class="table table-striped table-hover">
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Nombres y apellidos</th>
                        <th scope="col">Clan</th>
                        <th scope="col">Total Pts</th>
                        <th scope="col">Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">25/01/2024</th>
                        <td>Juan Muños</td>
                        <td>Tesla</td>
                        <td class="fw-bold">25</td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                      </tr>
                      <tr>
                        <th scope="row">25/01/2024</th>
                        <td>Juan Muños</td>
                        <td>Tesla</td>
                        <td class="fw-bold">25</td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                      </tr>                        
                      <tr>
                        <th scope="row">25/01/2024</th>
                        <td>Juan Muños</td>
                        <td>Tesla</td>
                        <td class="fw-bold">25</td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                      </tr>                        
                      <tr>
                        <th scope="row">25/01/2024</th>
                        <td>Juan Muños</td>
                        <td>Tesla</td>
                        <td class="fw-bold">25</td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- Fin Historico de puntos -->
        </div>
        <!-- Fin Seccion puntajes -->
  
        <!-- Inicio Seccion informativa -->
    <div class="row justify-content-center text-center my-5">
      <div class="col-sm-10 col-md-8 mb-3 my-sm-0">
        <div class="card card-dark">
          <div class="card-body">
            <h1 class="card-title fs-1 fw-bold focus">Programa de puntos</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna feugiat, posuere est ac, congue tellus. Mauris tincidunt malesuada purus nec cursus. Suspendisse potenti.</p>
            <a href="#" class="btn btn-primary">Conocer mas</a>
          </div>
        </div>
      </div>
    </div>
        <!-- Fin Seccion enlaces de interes -->
      </div>
    </div>
  
  </div>`

}
/*========================================================================================================*/
/*Creacion Pagina Lista Trainers*/
createListTrainers(){
    document.getElementById('listTrainers').innerHTML`<div class="container-fluid">
    <div class="background-image rounded"></div>
    <div class="py-5">
      <div class="row justify-content-center"> 
        <!-- Inicio Informacion basica -->
        <div class="col-md-4 sizeCard text-center ">
          <div class="col py-4 d-flex justify-content-center ">
              <div class="card py-4">
                <img src="https://soyunperro.com/wp-content/uploads/perrocontento.jpg" class=" mx-auto d-block card-img-top imgUser" alt="...">
                <div class="card-body">
                  <h3 class="fw-bold">Información personal</h3>
                  <form> 
                    <fieldset>
                      <div class="my-3">
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7F7D96" d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm-9 9H9v2h2zm8 0h-6v2h6zM7 9H5v2h2zm12 0H9v2h10z"/></svg>                            </div>
                          <input id="documentId" type="text" class="form-control" placeholder="123456789" label aria-label="documentId">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#7F7D96" d="M230.93 220a8 8 0 0 1-6.93 4H32a8 8 0 0 1-6.92-12c15.23-26.33 38.7-45.21 66.09-54.16a72 72 0 1 1 73.66 0c27.39 8.95 50.86 27.83 66.09 54.16a8 8 0 0 1 .01 8"/></svg></span>
                          </div>
                          <input type="text" class="form-control" placeholder="Nombres y Apellidos" aria-label="Nombres y Apellidos">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#7F7D96" d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79m6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"/></svg>                          
                          </div>
                          <input type="email" class="form-control" placeholder="micorreo@ejemplo.com" aria-label="Email">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7F7D96" d="M7 13.846q-.77 0-1.308-.538q-.538-.539-.538-1.308t.538-1.308q.539-.538 1.308-.538t1.308.538q.538.539.538 1.308t-.538 1.308q-.539.538-1.308.538m0 2.885q1.675 0 2.927-.946t1.608-2.285h2.85l1.069.82q.111.072.229.116q.117.043.26.043t.259-.043q.117-.044.229-.136l1.357-1.05l1.212.933q.13.086.28.14q.149.052.291.027q.142-.025.276-.084q.134-.058.24-.17l1.442-1.536q.125-.131.178-.268q.053-.136.053-.298q0-.161-.056-.295q-.056-.134-.18-.259l-.699-.698q-.13-.13-.28-.186q-.149-.056-.31-.056h-8.7q-.35-1.315-1.594-2.273Q8.698 7.269 7 7.269q-2 0-3.365 1.366Q2.269 10 2.269 12t1.366 3.365Q5 16.731 7 16.731"/></svg>                            
                          </div>
                          <input type="password" class="form-control" placeholder="Password" aria-label="Password">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path fill="#7F7D96" fill-rule="evenodd" d="M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-4c0-2.84 0-4.61-.5-5.811V17a3.62 3.62 0 0 1-2.56-1.06l-.752-.752c-.722-.722-1.082-1.082-1.491-1.234a2 2 0 0 0-1.394 0c-.409.152-.77.512-1.49 1.234l-.114.113c-.585.585-.878.878-1.189.932a1 1 0 0 1-.699-.134c-.268-.166-.431-.547-.758-1.308L11 14.667c-.75-1.75-1.124-2.624-1.778-2.952a2 2 0 0 0-1.065-.205c-.729.062-1.401.735-2.747 2.08L3.5 15.5V2.887a2.85 2.85 0 0 0-.328.285" clip-rule="evenodd"/><path stroke="#7F7D96" stroke-width="2" d="M3 10c0-1.914.002-3.249.138-4.256c.131-.978.372-1.496.74-1.865c.37-.37.888-.61 1.866-.741C6.751 3.002 8.086 3 10 3h4c1.914 0 3.249.002 4.256.138c.978.131 1.496.372 1.865.74c.37.37.61.888.742 1.866C20.998 6.751 21 8.086 21 10v4c0 1.914-.002 3.249-.137 4.256c-.132.978-.373 1.496-.742 1.865c-.369.37-.887.61-1.865.742c-1.007.135-2.342.137-4.256.137h-4c-1.914 0-3.249-.002-4.256-.137c-.978-.132-1.496-.373-1.865-.742c-.37-.369-.61-.887-.741-1.865C3.002 17.249 3 15.914 3 14z"/><circle cx="15" cy="9" r="2" fill="#7F7D96"/></g></svg>
                          </div>
                          <input type="url" class="form-control" placeholder="Url imagen perfil" aria-label="Imagen de perfil">
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7F7D96" fill-rule="evenodd" d="M10 6h4c2.828 0 4.243 0 5.121.879C20 7.757 20 9.172 20 12v1.056c0 2.405 0 3.608-.597 4.575c-.598.966-1.674 1.504-3.825 2.58c-1.756.878-2.634 1.317-3.578 1.317s-1.822-.439-3.578-1.317c-2.151-1.076-3.227-1.614-3.825-2.58C4 16.664 4 15.46 4 13.056V12c0-2.828 0-4.243.879-5.121C5.757 6 7.172 6 10 6m2 4c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 10.34 12.284 10 12 10" clip-rule="evenodd"/><path fill="#7F7D96" d="M11 2h2c1.886 0 2.828 0 3.414.586c.414.414.535 1.006.571 1.983c-.82-.07-1.791-.07-2.886-.069H9.9c-1.095 0-2.065 0-2.886.069c.035-.977.157-1.57.57-1.983C8.172 2 9.116 2 11 2"/></svg>                          
                          </div>
                          <select class="form-select"placeholder="Materia" aria-label="Materia">
                            <option>Desarrollo</option>
                            <option>Ingles</option>
                            <option>Review</option>
                            <option>Habilidades</option>
                            <option>Cultura y permanencia</option>

                            </select>
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-text">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="#7F7D96" d="M8 30H2v-6h6zm-4-2h2v-2H4zm15 2h-6v-6h6zm-4-2h2v-2h-2zm15 2h-6v-6h6zm-4-2h2v-2h-2zM16 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2m10 12h-5a4.005 4.005 0 0 1-4-4h-2a4.005 4.005 0 0 1-4 4H6a2.002 2.002 0 0 0-2 2v4h2v-4h5a5.97 5.97 0 0 0 4-1.54V22h2v-5.54A5.97 5.97 0 0 0 21 18h5v4h2v-4a2.002 2.002 0 0 0-2-2"/></svg>
                          </div>
                          <select class="form-select"placeholder="Tesla" aria-label="Clan">
                            <option>Rol</option>
                            <option>Coder</option>
                            <option>Trainer</option>
                            <option>Administrador</option>
                            </select>
                        </div>
                        <div class="d-grid d-flex justify-content-center">
                          <a href="#" class="btn btn-primary" type="button">Crear o actualizar</a>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        <!-- Fin Informacion basica -->
  
        <!-- Inicio Seccion puntajes -->
        <div class="col-sm-6 d-grid col-md-8 overflow-hidden my-4 text-center">
          <div class="row g-4 col-md-12 my-2 justify-content-center">
  
        <!-- Inicio Puntajes positivos -->
        <div class="col col-md-6 my-2 sizeCard">
          <div class="card flex-fill border-0">
                <div class="card-body">
                    <div class="col positive">
                      <h1 id="totalPtsPositive" class="text-center card-title fw-bold sizeFontPts">25</h1>
                      <div class="text-center">Total Pts</div>
                      <h2 class="fs-4 text-center text-wrap card-title fw-bold">Positivos</h>
                    </div>
                </div>
              </div>
            </div>
        <!-- Fin Puntajes positivos -->
  
        <!-- Inicio Puntajes negativos -->
              <div class="col col-md-6 my-2 sizeCard">
                <div class="card flex-fill border-0">
                  <div class="card-body">
                      <div class="col negative">
                        <h1 id="totalPtsNegative" class="text-center card-title fw-bold sizeFontPts">25</h1>
                        <div class="text-center">Total Pts</div>
                        <h2 class="fs-4 text-center text-wrap card-title fw-bold">Negativos</h2>
                      </div>
                  </div>
                </div>
              </div>
        <!-- Fin Puntajes negativos -->
  
        <!-- Inicio Puntajes disponibles -->
        <div class="col col-md-6 my-2 sizeCard">
                
                <div class="card flex-fill border-0">
                  <div class="card-body">
                      <div class="col available">
                        <h1 id="totalPtsAvailable" class="text-center card-title fw-bold sizeFontPts ">25</h1>
                        <div class="text-center">Total Pts</div>
                        <h2 class="fs-4 text-center text-wrap card-title fw-bold">Disponibles</h2>                  
                      </div>
                  </div>
                </div>
              </div>
              <!-- Fin Puntajes disponibles -->
          </div>
  
          <!-- Inicio Historico de puntos -->
          <div class="card flex-fill my-3 justify-content-center col-md-11">
            <h2 class="fs-1 fw-bold d-fill my-3">Informe General Trainers</h2>
              <div class="my-2 ">
                <a href="#" class="btn btn btn-primary m-2" type="button"><svg class="bi me-3" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="14;0"/></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="18;0"/><animate attributeName="d" calcMode="linear" dur="1.5s" keyTimes="0;0.7;1" repeatCount="indefinite" values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"/></path></g></svg>Informe</a>
                <a href="#" class="btn btn-success m-2" type="button"><svg  class="bi me-3" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="IconifyId18d47b58fd0627ed7176"><g fill="#fff"><circle cx="12" cy="10" r="6"/><rect width="9" height="8" x="8" y="12"/><rect width="17" height="12" x="1" y="8" rx="6"><animate attributeName="x" dur="24s" repeatCount="indefinite" values="1;0;1;2;1"/></rect><rect width="17" height="10" x="6" y="10" rx="5"><animate attributeName="x" dur="15s" repeatCount="indefinite" values="6;5;6;7;6"/></rect></g><circle cx="12" cy="10" r="4"/><rect width="8" height="8" x="8" y="10"/><rect width="11" height="8" x="3" y="10" rx="4"><animate attributeName="x" dur="24s" repeatCount="indefinite" values="3;2;3;4;3"/></rect><rect width="13" height="6" x="8" y="12" rx="3"><animate attributeName="x" dur="15s" repeatCount="indefinite" values="8;7;8;9;8"/></rect><g fill="#fff"><rect width="3" height="4" x="10.5" y="12"/><path d="M12 9L16 13H8L12 9Z"><animateMotion calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v-1v2z" repeatCount="indefinite"/></path></g></mask><rect width="24" height="24" fill="#ffffff" mask="url(#IconifyId18d47b58fd0627ed7176)"/></svg>Cargar Pts</a>
                <a href="#" class="btn btn-info m-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ffffff" fill-opacity="0" stroke="#ffffff" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="32;0"/><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"/><animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"/></path></svg>Puntuar</a>
              </div>
              <div class="my-2"> 
              </div>


            <div class="card-body">
              <div class="flex-fill">
                <nav class="navbar">
                  <div class="row overflow-hidden flex-fill">
                    <div class="col d-flex col-sm-12">
                      <input class="form-control m-2" type="search" placeholder="Search" aria-label="Search">
                      <button class="btn btn-primary my-2" type="submit">Search</button>
                    </div>
                  </div>
                </nav>
                <div class="col g-2 flex-fill">
                  <div class="">
                    <div class="btn-group p-2" role="group">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Categoria
                        </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Item 1</a></li>
                        <li><a class="dropdown-item" href="#">Item 2</a></li>
                      </ul>
                    </div>
                    <div class="btn-group z-3" role="group">
                      <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Propiedad
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Item 1</a></li>
                        <li><a class="dropdown-item" href="#">Item 2</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="table-responsive my-3 height-table-profile">
                  <table class="table table-striped table-hover">
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">Fecha</th>
                        <th scope="col">Nombres y apellidos</th>
                        <th scope="col">Materia</th>
                        <th scope="col">Total Pts</th>
                        <th scope="col">Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">25/01/2024</th>
                        <td>Juan Muños</td>
                        <td>Ingles</td>
                        <td class="fw-bold">25</td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                      </tr>
                      <tr>
                        <th scope="row">25/01/2024</th>
                        <td>Programación</td>
                        <td>Tesla</td>
                        <td class="fw-bold">25</td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                      </tr>                        
                      <tr>
                        <th scope="row">25/01/2024</th>
                        <td>Habilidades</td>
                        <td>Tesla</td>
                        <td class="fw-bold">25</td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                      </tr>                        
                      <tr>
                        <th scope="row">25/01/2024</th>
                        <td>Review</td>
                        <td>Tesla</td>
                        <td class="fw-bold">25</td>
                        <td>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                          <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <!-- Fin Historico de puntos -->
        </div>
        <!-- Fin Seccion puntajes -->
  
        <!-- Inicio Seccion enlaces de interes -->
    <div class="row justify-content-center">
      <h2 class="fs-1 fw-bold text-center my-5 ">Enlaces de interes</h2>
      <div class="col d-flex mb-3  my-sm-0 justify-content-evenly">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title fs-3 fw-bold">Coders</h1>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <div class="d-grid d-flex gap-2">
              <a href="#" class="btn btn-primary" type="button">Ver listado</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col d-flex mb-3 my-sm-0 justify-content-evenly">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title fs-3 fw-bold">Clanes</h1>
            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <div class="d-grid d-flex gap-2">
              <a href="#" class="btn btn-primary" type="button">Ver listado</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        <!-- Fin Seccion enlaces de interes -->
  
        
        <!-- Inicio Seccion enlaces de interes -->
    <div class="row justify-content-center text-center my-5">
      <div class="col-sm-10 col-md-8 mb-3 my-sm-0">
        <div class="card card-dark">
          <div class="card-body">
            <h1 class="card-title fs-1 fw-bold focus">Programa de puntos</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna feugiat, posuere est ac, congue tellus. Mauris tincidunt malesuada purus nec cursus. Suspendisse potenti.</p>
            <a href="#" class="btn btn-primary">Conocer mas</a>
          </div>
        </div>
      </div>
    </div>
        <!-- Fin Seccion enlaces de interes -->
      </div>
    </div>
  
  </div>`
    

}
/*========================================================================================================*/
/*Creacion Pagina Login*/
createLogin(){
  document.getElementById('login').innerHTML=`<div class="container-fluid">
  <div class="background-image rounded"></div>
  <div class="py-5">
    <div class="row py-5 justify-content-center d-flex flex-md-row flex-sm-column-reverse">
      <!-- Inicio Login -->
      <div class="col col-md-4 m-1 align-self-center mt-5 justify-content-center text-center">
        <div class="card">
          <div class="card-body">
            <h1 class="card-title fs-1 fw-bold focus">Conoce las ventajas de nuestro sistema</h1>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna feugiat, posuere est ac, congue tellus. Mauris tincidunt malesuada purus nec cursus. Suspendisse potenti.</p>
            <a href="../index.html" class="btn btn-primary">Conocer mas</a>
          </div>
        </div>
        </div>

        <div class="col col-md-4 m-1 mt-5 d-flex justify-content-center">
          <div class="card card-dark cardLogin" >
            <div class="card-body m-4">
              <form> 
                <fieldset>
                  <div class="my-3">
                    <h1 class="fw-bold focus my-3 card-title">Login</h1>
                    <div class="my-3">
                      <div class="my-2">
                        <label for="label-desing-login">Email</label>
                        <input id="idLoginPassword" type="email" class="form-control input-desing-login flex-fill" placeholder="Email">
                      </div>
                      <div class="my-2">
                        <label for="label-desing-login">Password</label>
                        <input id="idLoginPassword" type="password" class="form-control input-desing-login flex-fill" placeholder="Password">
                      </div>
                    </div>
                    <div class="d-grid d-flex justify-content-center">
                      <a href="#" class="btn btn-primary flex-fill" type="button">Ingresar</a>
                    </div>
                  </div>
                </fieldset>
              </form>
                <div class=" align-items-center justify-content-center">
                  <a href="#" class="card-link text-center link-light">¿Olvidaste la contraseña?</a>
                  <p class="card-title my-3">Ingresa con:</p>
                  <ul class="nav justify-content-center border-bottom pb-3 gap-3">
                    <li class="nav-item desing-icon-login"><a onclick="mensajeFuncionDesactivada()" class="nav-link px-2 text-body-secondary"><svg class="daIconLogin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg></a></li>
                    <li class="nav-item desing-icon-login"><a onclick="mensajeFuncionDesactivada()" class="nav-link px-2 text-body-secondary"><svg class="daIconLogin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"/></svg></a></li>
                    <li class="nav-item desing-icon-login"><a onclick="mensajeFuncionDesactivada()" class="nav-link px-2 text-body-secondary"><svg class="daIconLogin " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></a></li>
                  </ul>
                </div>
                <div class="my-3">
                  <a href="./index.html" class="nav justify-content-center">
                    <img class="daIcon logoSarpLogin" src="https://imgdb.net/storage/uploads/551d2c0da210902ce1146f417b23a412cb6ddb399eec910b078367df6f4bac22.png" alt="LogotipoSarp">
                  </a>
                </div>
              </div>
            </div>
        </div>
      </div>
      <!-- Fin Login -->
    </div>
  </div>

</div>
<!-- Fin Perfil Usuario-->
<!-- container fin -->
  `
}
/*========================================================================================================*/
/*Creacion Pagina Perfil Admin*/
adminProfileCreator(){
  document.getElementById('adminProfile').innerHTML=`<div class="container-fluid">
  <div class="background-image rounded"></div>
  <div class="py-5">
    <div class="py-5 row justify-content-center"> 
      <!-- Inicio Informacion basica -->
      <div class="col-md-4 sizeCard text-center">
        <div class="col py-4 d-flex justify-content-center ">
            <div class="card py-4">
              <img src="https://soyunperro.com/wp-content/uploads/perrocontento.jpg" class=" mx-auto d-block card-img-top imgUser" alt="...">
              <div class="card-body">
                <h3 class="fw-bold">Juan Perez</h3>
                <h4><span class="badge rounded-pill text-bg-success">Coder</span></h4> 
                <form> 
                  <fieldset disabled>
                    <div class="my-3" >
                      <div class="input-group mb-3">
                        <div class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7F7D96" d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm-9 9H9v2h2zm8 0h-6v2h6zM7 9H5v2h2zm12 0H9v2h10z"/></svg>                            
                        </div>
                        <input id="documentId" type="text" class="form-control" placeholder="123456789" label aria-label="documentId">
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#7F7D96" d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79m6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"/></svg>                          
                        </div>
                        <input type="email" class="form-control" placeholder="micorreo@ejemplo.com" aria-label="Email">
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7F7D96" fill-rule="evenodd" d="M10 6h4c2.828 0 4.243 0 5.121.879C20 7.757 20 9.172 20 12v1.056c0 2.405 0 3.608-.597 4.575c-.598.966-1.674 1.504-3.825 2.58c-1.756.878-2.634 1.317-3.578 1.317s-1.822-.439-3.578-1.317c-2.151-1.076-3.227-1.614-3.825-2.58C4 16.664 4 15.46 4 13.056V12c0-2.828 0-4.243.879-5.121C5.757 6 7.172 6 10 6m2 4c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 10.34 12.284 10 12 10" clip-rule="evenodd"/><path fill="#7F7D96" d="M11 2h2c1.886 0 2.828 0 3.414.586c.414.414.535 1.006.571 1.983c-.82-.07-1.791-.07-2.886-.069H9.9c-1.095 0-2.065 0-2.886.069c.035-.977.157-1.57.57-1.983C8.172 2 9.116 2 11 2"/></svg>                          
                        </div>
                        <input type="url" class="form-control" placeholder="Clan" aria-label="Clan">
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div class="col justify-content-center height-table-ranking">
            <div class="card py-3">
              <h1 class="fw-bold focus">Ranking</h1>
              <div class="card-body">
                <span id="userClass" class="badge text-bg-primary fs-6">2024</span>
                <p class="fw-bold">Enero - Febrero</p>
                <div class="table-responsive my-3">
                  <table class="table table-striped table-hover">
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">Puesto</th>
                        <th scope="col">Clan</th>
                        <th scope="col">Total Pst</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>tesla</td>
                        <td>2245</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>tesla</td>
                        <td>2245</td>
                      </tr>                  
                      <tr>
                        <th scope="row">1</th>
                        <td>tesla</td>
                        <td>2245</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      <!-- Fin Informacion basica -->

      <!-- Inicio Seccion puntajes -->
      <div class="col-sm-6 d-grid col-md-8 overflow-hidden my-4 text-center">
        <div class="row g-4 col-md-12 my-2 justify-content-center">

      <!-- Inicio Puntajes positivos -->
      <div class="col col-md-6 my-2 sizeCard">
        <div class="card flex-fill border-0">
              <div class="card-body">
                  <div class="col positive">
                    <h1 id="totalPtsPositive" class="text-center card-title fw-bold sizeFontPts">25</h1>
                    <div class="text-center">Total Pts</div>
                    <h2 class="fs-4 text-center text-wrap card-title fw-bold">Positivos</h>
                  </div>
              </div>
            </div>
          </div>
      <!-- Fin Puntajes positivos -->

      <!-- Inicio Puntajes negativos -->
            <div class="col col-md-6 my-2 sizeCard">
              <div class="card flex-fill border-0">
                <div class="card-body">
                    <div class="col negative">
                      <h1 id="totalPtsNegative" class="text-center card-title fw-bold sizeFontPts">25</h1>
                      <div class="text-center">Total Pts</div>
                      <h2 class="fs-4 text-center text-wrap card-title fw-bold">Negativos</h2>
                    </div>
                </div>
              </div>
            </div>
      <!-- Fin Puntajes negativos -->

      <!-- Inicio Puntajes disponibles -->
      <div class="col col-md-6 my-2 sizeCard">
              
              <div class="card flex-fill border-0">
                <div class="card-body">
                    <div class="col available">
                      <h1 id="totalPtsAvailable" class="text-center card-title fw-bold sizeFontPts ">25</h1>
                      <div class="text-center">Total Pts</div>
                      <h2 class="fs-4 text-center text-wrap card-title fw-bold">Disponibles</h2>                  
                    </div>
                </div>
              </div>
            </div>
            <!-- Fin Puntajes disponibles -->
        </div>

        <!-- Inicio Historico de puntos -->
        <div class="card flex-fill my-3 justify-content-center col-md-11">
          <h2 class="fs-1 fw-bold d-fill my-3">Historico de puntos</h2>
            <div class="my-2 ">
              <a href="#" class="btn btn btn-primary m-2" type="button"><svg class="bi me-3" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="14;0"/></path><path stroke-dasharray="18" stroke-dashoffset="18" d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="18;0"/><animate attributeName="d" calcMode="linear" dur="1.5s" keyTimes="0;0.7;1" repeatCount="indefinite" values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"/></path></g></svg>Informe</a>
              <a href="#" class="btn btn-success m-2" type="button"><svg  class="bi me-3" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><mask id="IconifyId18d47b58fd0627ed7176"><g fill="#fff"><circle cx="12" cy="10" r="6"/><rect width="9" height="8" x="8" y="12"/><rect width="17" height="12" x="1" y="8" rx="6"><animate attributeName="x" dur="24s" repeatCount="indefinite" values="1;0;1;2;1"/></rect><rect width="17" height="10" x="6" y="10" rx="5"><animate attributeName="x" dur="15s" repeatCount="indefinite" values="6;5;6;7;6"/></rect></g><circle cx="12" cy="10" r="4"/><rect width="8" height="8" x="8" y="10"/><rect width="11" height="8" x="3" y="10" rx="4"><animate attributeName="x" dur="24s" repeatCount="indefinite" values="3;2;3;4;3"/></rect><rect width="13" height="6" x="8" y="12" rx="3"><animate attributeName="x" dur="15s" repeatCount="indefinite" values="8;7;8;9;8"/></rect><g fill="#fff"><rect width="3" height="4" x="10.5" y="12"/><path d="M12 9L16 13H8L12 9Z"><animateMotion calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v-1v2z" repeatCount="indefinite"/></path></g></mask><rect width="24" height="24" fill="#ffffff" mask="url(#IconifyId18d47b58fd0627ed7176)"/></svg>Cargar Pts</a>
              <a href="#" class="btn btn-info m-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#ffffff" fill-opacity="0" stroke="#ffffff" stroke-dasharray="32" stroke-dashoffset="32" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="32;0"/><animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"/><animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"/></path></svg>Puntuar</a>
            </div>
            <div class="my-2"> 
            </div>


          <div class="card-body">
            <div class="flex-fill">
              <nav class="navbar">
                <div class="row overflow-hidden flex-fill">
                  <div class="col d-flex col-sm-12">
                    <input class="form-control m-2" type="search" placeholder="Buscar" aria-label="Buscar">
                    <button class="btn btn-primary my-2" type="submit">Buscar</button>
                  </div>
                </div>
              </nav>
              <div class="col g-2 flex-fill">
                <div class="">
                  <div class="btn-group p-2" role="group">
                      <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Categoria
                      </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Item 1</a></li>
                      <li><a class="dropdown-item" href="#">Item 2</a></li>
                    </ul>
                  </div>
                  <div class="btn-group z-3" role="group">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Propiedad
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Item 1</a></li>
                      <li><a class="dropdown-item" href="#">Item 2</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="table-responsive my-3 height-table-profile">
                <table class="table table-striped table-hover">
                  <thead class="table-dark">
                    <tr>
                      <th scope="col">Fecha</th>
                      <th scope="col">Nombres y apellidos</th>
                      <th scope="col">Clan</th>
                      <th scope="col">Total Pts</th>
                      <th scope="col">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">25/01/2024</th>
                      <td>Juan Muños</td>
                      <td>Tesla</td>
                      <td class="fw-bold">25</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                    </tr>
                    <tr>
                      <th scope="row">25/01/2024</th>
                      <td>Juan Muños</td>
                      <td>Tesla</td>
                      <td class="fw-bold">25</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                    </tr>                        
                    <tr>
                      <th scope="row">25/01/2024</th>
                      <td>Juan Muños</td>
                      <td>Tesla</td>
                      <td class="fw-bold">25</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                    </tr>                        
                    <tr>
                      <th scope="row">25/01/2024</th>
                      <td>Juan Muños</td>
                      <td>Tesla</td>
                      <td class="fw-bold">25</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin Historico de puntos -->
      </div>
      <!-- Fin Seccion puntajes -->

      <!-- Inicio Seccion enlaces de interes -->
        <div class="row justify-content-center">
          <h2 class="fs-1 fw-bold text-center my-5 ">Enlaces de interes</h2>
          <div class="col-md-3 d-flex mb-3  my-sm-0 justify-content-evenly">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title fs-3 fw-bold">Coders</h1>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div class="d-grid d-flex gap-2">
                  <a href="./listCoder.html" class="btn btn-primary" type="button">Ver listado</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 d-flex mb-3 my-sm-0 justify-content-evenly">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title fs-3 fw-bold">Clanes</h1>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div class="d-grid d-flex gap-2">
                  <a href="./listClans.html" class="btn btn-primary" type="button">Ver listado</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 d-flex mb-3 my-sm-0 justify-content-evenly">
            <div class="card">
              <div class="card-body">
                <h1 class="card-title fs-3 fw-bold">Trainers</h1>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div class="d-grid d-flex gap-2">
                  <a href="./listTrainer.html" class="btn btn-primary" type="button">Ver listado</a>
                </div>
              </div>
            </div>
          </div>
        </div>    
        <div class="row justify-content-center text-center my-5">
          <div class="col-sm-10 col-md-8 mb-3 my-sm-0">
            <div class="card card-dark">
              <div class="card-body">
                <h1 class="card-title fs-1 fw-bold focus">Programa de puntos</h1>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna feugiat, posuere est ac, congue tellus. Mauris tincidunt malesuada purus nec cursus. Suspendisse potenti.</p>
                <a href="../index.html" class="btn btn-primary">Conocer mas</a>
              </div>
            </div>
          </div>
        </div>
      <!-- Fin Seccion enlaces de interes -->
    </div>
  </div>

</div>
<!-- Fin Perfil Usuario-->
<!-- container fin -->`
}
/*========================================================================================================*/
/*Creacion Pagina Perfil Coders*/
coderProfileCreator(){
  document.getElementById('').innerHTML=`<div class="container-fluid">
  <div class="background-image rounded"></div>
  <div class="py-5">
    <div class="py-5 row justify-content-center"> 
      <!-- Inicio Informacion basica -->
      <div class="col-md-4 sizeCard text-center">
        <div class="col py-4 d-flex justify-content-center ">
            <div class="card py-4">
              <img src="https://soyunperro.com/wp-content/uploads/perrocontento.jpg" class=" mx-auto d-block card-img-top imgUser" alt="...">
              <div class="card-body">
                <h3 class="fw-bold">Juan Perez</h3>
                <h4><span class="badge rounded-pill text-bg-success">Coder</span></h4> 
                <form> 
                  <fieldset disabled>
                    <div class="my-3" >
                      <div class="input-group mb-3">
                        <div class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7F7D96" d="M20 4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm-9 9H9v2h2zm8 0h-6v2h6zM7 9H5v2h2zm12 0H9v2h10z"/></svg>                            
                        </div>
                        <input id="documentId" type="text" class="form-control" placeholder="123456789" label aria-label="documentId">
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="#7F7D96" d="M3.87 4h13.25C18.37 4 19 4.59 19 5.79v8.42c0 1.19-.63 1.79-1.88 1.79H3.87c-1.25 0-1.88-.6-1.88-1.79V5.79c0-1.2.63-1.79 1.88-1.79m6.62 8.6l6.74-5.53c.24-.2.43-.66.13-1.07c-.29-.41-.82-.42-1.17-.17l-5.7 3.86L4.8 5.83c-.35-.25-.88-.24-1.17.17c-.3.41-.11.87.13 1.07z"/></svg>                          
                        </div>
                        <input type="email" class="form-control" placeholder="micorreo@ejemplo.com" aria-label="Email">
                      </div>
                      <div class="input-group mb-3">
                        <div class="input-group-text">
                          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#7F7D96" fill-rule="evenodd" d="M10 6h4c2.828 0 4.243 0 5.121.879C20 7.757 20 9.172 20 12v1.056c0 2.405 0 3.608-.597 4.575c-.598.966-1.674 1.504-3.825 2.58c-1.756.878-2.634 1.317-3.578 1.317s-1.822-.439-3.578-1.317c-2.151-1.076-3.227-1.614-3.825-2.58C4 16.664 4 15.46 4 13.056V12c0-2.828 0-4.243.879-5.121C5.757 6 7.172 6 10 6m2 4c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532c-.088.283.164.577.667 1.165l.13.152c.143.167.215.25.247.354c.032.104.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135c.104 0 .202.045.399.135l.178.082c.691.319 1.037.477 1.267.303c.23-.174.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438c.032-.103.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 10.34 12.284 10 12 10" clip-rule="evenodd"/><path fill="#7F7D96" d="M11 2h2c1.886 0 2.828 0 3.414.586c.414.414.535 1.006.571 1.983c-.82-.07-1.791-.07-2.886-.069H9.9c-1.095 0-2.065 0-2.886.069c.035-.977.157-1.57.57-1.983C8.172 2 9.116 2 11 2"/></svg>                          
                        </div>
                        <input type="url" class="form-control" placeholder="Clan" aria-label="Clan">
                      </div>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
          <div class="col justify-content-center height-table-ranking">
            <div class="card py-3">
              <h1 class="fw-bold focus">Ranking</h1>
              <div class="card-body">
                <span id="userClass" class="badge text-bg-primary fs-6">2024</span>
                <p class="fw-bold">Enero - Febrero</p>
                <div class="table-responsive my-3">
                  <table class="table table-striped table-hover">
                    <thead class="table-dark">
                      <tr>
                        <th scope="col">Puesto</th>
                        <th scope="col">Clan</th>
                        <th scope="col">Total Pst</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>tesla</td>
                        <td>2245</td>
                      </tr>
                      <tr>
                        <th scope="row">1</th>
                        <td>tesla</td>
                        <td>2245</td>
                      </tr>                  
                      <tr>
                        <th scope="row">1</th>
                        <td>tesla</td>
                        <td>2245</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      <!-- Fin Informacion basica -->

      <!-- Inicio Seccion puntajes -->
      <div class="col-sm-6 d-grid col-md-8 overflow-hidden my-4 text-center">
        <div class="row g-4 col-md-12 my-2 justify-content-center">

      <!-- Inicio Puntajes positivos -->
      <div class="col col-md-6 my-2 sizeCard">
        <div class="card flex-fill border-0">
              <div class="card-body">
                  <div class="col positive">
                    <h1 id="totalPtsPositive" class="text-center card-title fw-bold sizeFontPts">25</h1>
                    <div class="text-center">Total Pts</div>
                    <h2 class="fs-4 text-center text-wrap card-title fw-bold">Positivos</h>
                  </div>
              </div>
            </div>
          </div>
      <!-- Fin Puntajes positivos -->

      <!-- Inicio Puntajes negativos -->
            <div class="col col-md-6 my-2 sizeCard">
              <div class="card flex-fill border-0">
                <div class="card-body">
                    <div class="col negative">
                      <h1 id="totalPtsNegative" class="text-center card-title fw-bold sizeFontPts">25</h1>
                      <div class="text-center">Total Pts</div>
                      <h2 class="fs-4 text-center text-wrap card-title fw-bold">Negativos</h2>
                    </div>
                </div>
              </div>
            </div>
      <!-- Fin Puntajes negativos -->
        </div>

        <!-- Inicio Historico de puntos -->
        <div class="card flex-fill my-3 justify-content-center col-md-11">
          <h2 class="fs-1 fw-bold d-fill my-3">Historico de puntos</h2>
            <div class="my-2"> 
            </div>


          <div class="card-body">
            <div class="flex-fill">
              <nav class="navbar">
                <div class="row overflow-hidden flex-fill">
                  <div class="col d-flex col-sm-12">
                    <input class="form-control m-2" type="search" placeholder="Buscar" aria-label="Buscar">
                    <button class="btn btn-primary my-2" type="submit">Buscar</button>
                  </div>
                </div>
              </nav>
              <div class="col g-2 flex-fill">
                <div class="">
                  <div class="btn-group p-2" role="group">
                      <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Categoria
                      </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Item 1</a></li>
                      <li><a class="dropdown-item" href="#">Item 2</a></li>
                    </ul>
                  </div>
                  <div class="btn-group z-3" role="group">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Propiedad
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Item 1</a></li>
                      <li><a class="dropdown-item" href="#">Item 2</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="table-responsive my-3 height-table-profile">
                <table class="table table-striped table-hover">
                  <thead class="table-dark">
                    <tr>
                      <th scope="col">Fecha</th>
                      <th scope="col">Nombres y apellidos</th>
                      <th scope="col">Clan</th>
                      <th scope="col">Total Pts</th>
                      <th scope="col">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">25/01/2024</th>
                      <td>Juan Muños</td>
                      <td>Tesla</td>
                      <td class="fw-bold">25</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                    </tr>
                    <tr>
                      <th scope="row">25/01/2024</th>
                      <td>Juan Muños</td>
                      <td>Tesla</td>
                      <td class="fw-bold">25</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                    </tr>                        
                    <tr>
                      <th scope="row">25/01/2024</th>
                      <td>Juan Muños</td>
                      <td>Tesla</td>
                      <td class="fw-bold">25</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                    </tr>                        
                    <tr>
                      <th scope="row">25/01/2024</th>
                      <td>Juan Muños</td>
                      <td>Tesla</td>
                      <td class="fw-bold">25</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 20 20"><g><path d="M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5Z"/><path d="M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2h-11Z"/><path fill-rule="evenodd" d="M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1h9Zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7ZM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8Zm-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7Z" clip-rule="evenodd"/></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="daIconTable" viewBox="0 0 24 24"><path d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h8.925l-2 2H5v14h14v-6.95l2-2V19q0 .825-.587 1.413T19 21zm4-7v-2.425q0-.4.15-.763t.425-.637l8.6-8.6q.3-.3.675-.45t.75-.15q.4 0 .763.15t.662.45L22.425 3q.275.3.425.663T23 4.4q0 .375-.137.738t-.438.662l-8.6 8.6q-.275.275-.637.438t-.763.162H10q-.425 0-.712-.288T9 14m12.025-9.6l-1.4-1.4zM11 13h1.4l5.8-5.8l-.7-.7l-.725-.7L11 11.575zm6.5-6.5l-.725-.7zl.7.7z"/></svg>                          </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin Historico de puntos -->
      </div>
      <!-- Fin Seccion puntajes -->

      <!-- Inicio Seccion enlaces de interes --> 
        <div class="row justify-content-center text-center my-5">
          <div class="col-sm-10 col-md-8 mb-3 my-sm-0">
            <div class="card card-dark">
              <div class="card-body">
                <h1 class="card-title fs-1 fw-bold focus">Programa de puntos</h1>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis urna feugiat, posuere est ac, congue tellus. Mauris tincidunt malesuada purus nec cursus. Suspendisse potenti.</p>
                <a href="../index.html" class="btn btn-primary">Conocer mas</a>
              </div>
            </div>
          </div>
        </div>
      <!-- Fin Seccion enlaces de interes -->
    </div>
  </div>

</div>
<!-- Fin Perfil Usuario-->
<!-- container fin -->`
}
}