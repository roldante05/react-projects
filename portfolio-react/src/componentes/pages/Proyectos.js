import React from 'react';
import Title from '../nav/Title';
import Footer from './Footer';


const Proyectos = () => {
  return (
    <div>
    <Title title='Proyectos' />
        <main class="container">
        <div class="row">
            <div class="col-12 mb-3 mt-3">
                <h1>Proyectos</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p>Los siguientes son algunos de los trabajos que he realizado:</p>
            </div>
        </div>
        <div class="row contenedor-proyecto">
        </div>
    </main>

         <Footer/>
    </div>
  )
}

export default Proyectos