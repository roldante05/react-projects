import React from 'react';
import Educacion from '../sobre-mi/Educacion';
import Tecnologias from '../sobre-mi/Tecnologias';
import Trabajo from '../sobre-mi/Trabajo';
import Footer from './Footer';


const Sobremi = () => {
  return (
    <div>
    <body id="sobre-mi">
    <main className="container">
        <div className="row">
            <div className="d-flex align-sm-items-center">
                <div className="col-11 col-sm-7 descripcion-de-mi">
                    <h1 className="mt-1 mb-3">Sobre mí</h1>
                    <p className="col-sm-9 col-12">Mi nombre es Dante Roldan, soy estudiante universitario, apasionado
                        por la tecnología y videojuegos.Busco nuevas experiencias que me permitan crecer profesionalmente 
                        en el área it. Me gusta trabajar en equipo, soy creativo y con capacidad para adaptarme a los cambios. 
                        Cuento con conocimientos en el área de programación web full stack y experiencia en diferentes proyectos
                    </p>
                    <div className="correo-de-mi mt-sm-3 mt-1">
                        <a href="mailto:roldandante72@gmail.com">Enviar mensaje</a>
                    </div>
                </div>
                <div className="mt-5 mt-sm-4 mb-4 foto-de-mi ms-4">
                </div>
            </div>
        </div>
    </main>
   
   <Tecnologias/> 
   <Trabajo/>
   <Educacion/>
    

        <Footer/>
    </body>
    </div>
  )
}

export default Sobremi