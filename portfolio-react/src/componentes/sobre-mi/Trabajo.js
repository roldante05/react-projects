import React from 'react'

const Trabajo = () => {
  return (
    <div>
         <section id="trabajo">
        <div className="container">
            <h3 className="my-sm-5 my-5 title"><i className="fa-solid fa-briefcase" style={{ "margin-right": "5px" }} ></i>Experiencia laboral</h3>
            <div className="row shadow">
                <div className="col-12 col-sm-5 pt-4">
                    <div className="row">
                        <div className="caae col-2 col-sm-4 d-none d-sm-block">
                            <img src="./images/tecnico.png" width="120" alt=""/>
                        </div>
                        <div className="titles col-10 col-sm-8 pb-sm-2">
                            <h3>Emprendimiento</h3>
                            <h4>Servicio Tecnico de PC</h4>
                            <h5> Marzo 2021 - Mayo 2022 </h5>
                            <ul>
                                <li>Instalación de Software</li>
                                <li>Instalación de Programas</li>
                                <li>Mantenimiento de Software</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-7 pt-4">
                    <div className="row">
                        <div className="caae col-2 col-sm-3 d-none d-sm-block">
                            <img src="./images/web.png" width="130" alt=""/>
                        </div>
                        <div className="titles col-10 col-sm-9 pb-sm-2">
                            <h3>FREELANCE</h3>
                            <h4>Programación Web</h4>
                            <h5> Mayo - Junio 2022 </h5>
                            <ul>
                                <li>Desarrollo de paginas web</li>
                                <li>Implementando tecnologías como HTML, CSS, Bootstrap y PHP</li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
    </div>
  )
}

export default Trabajo