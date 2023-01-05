import React from 'react';
import Title from '../nav/Title';
import Footer from './Footer';




const Contacto = () => {
  return (
    <div>
    <Title title='Contacto' />
        <body id="contacto">
    <main class="container">
        <div class="row">
            <div class="col-12 mb-5 mt-3">
                <h1>Contacto</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-sm-6 ">
                <p>Te invito a que te contactes enviándome un mensaje o bien por whatsapp.</p>
            </div>
            <div class="col-sm-6 col-12">
                <form action="" method="POST">
                    <div class="mb-3">
                        <input type="text" name="txtNombre" id="txtNombre" placeholder="Nombre" class="form-control shadow"/>
                    </div>
                    <div class="mb-3">
                        <input type="email" name="txtCorreo" id="txtCorreo" placeholder="Correo" class="form-control shadow"/>
                    </div>
                    <div class="mb-3">
                        <input type="tel" name="txtTelefono" id="txtTelefono" placeholder="Telefono/Whatsapp" class="form-control shadow"/>
                    </div>
                    <textarea name="txtMensaje" id="txtMensaje" placeholder="Escribe aquí tu mensaje" class="form-control shadow" required=""></textarea>
                    <div class="mb-3 mt-3">
                        <button id="btnEnviar" name="btnEnviar" class="btn btn-blanco ">ENVIAR</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
        <Footer/>
        </body>
    </div>
  )
}

export default Contacto