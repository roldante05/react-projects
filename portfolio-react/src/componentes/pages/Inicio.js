import React from 'react';
import Footer from './Footer';

const Inicio = () => {
  return (
   
     <div>
      <body id="inicio">
        <main className="container">
        <div className="row">
            <div className="col-12 col-sm-12 ">
                <div className="m-4 text-center my-4 ">
                </div>
                <div className="text-center col-12  d-flex justify-content-center">
                    <div className="texto mt-1">
                        <p className="col-12 py-1 px-4">Bienvenid@ a mi sitio web sobre sistemas.</p>
                    </div>
                </div>
                <div className="btn-violet text-center mb-3">
                    <a href="proyectos.php">Conoce mis proyectos</a>
                </div>
            </div>
        </div>
        </main>
        <Footer/>
      </body>
    </div> 
    
    
  )
  
}

export default Inicio
