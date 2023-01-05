import React from 'react'

const Cursos = () => {
  return (
    <div>
            <section id="cursos">
        <div className="container">
            <h3 className="my-3 my-sm-5 title"><i className="fa-solid fa-graduation-cap" style={{"margin-right": "5px" }}></i> Cursos de
                desarrollo profesional</h3>
            <div className="row shadow">
                <div className="col-12 col-sm-6">
                    <div className="row">
                        <div className="depcsuite col-sm-4  d-none d-sm-block">
                            <img className="pt-5" src="./images/logo-depcsuite.svg" width="130" alt=""/>
                        </div>
                        <div className="titles col-sm-8 py-3">
                            <h3>DePc Suite</h3>
                            <h4>Programación Web Full Stack</h4>
                            <h5> Marzo - Agosto 2022 </h5>
                                <p><a href="https://depcsuite.com/">DePC Suite</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="row">
                        <div className="ungs col-sm-4 py-3 d-none d-sm-block">
                            <img src="./images/papillote.png" width="130" alt=""/>
                        </div>
                        <div className="titles col-sm-8 py-3">
                            <h3>Bartender</h3>
                            <h4>Papillote Coworking</h4>
                                <h5> Febrero - Abril - 2022</h5>
                                    <p><a href="https://www.instagram.com/cocktailclan.sm/">Papillote Coworking</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="row">
                        <div className="ungs col-sm-4 py-3 d-none d-sm-block">
                            <img src="./images/fundacionp.jpg" width="170" alt=""/>
                        </div>
                        <div className="titles col-sm-8 py-3">
                            <h3>Fundación Pescar, Santander , J.P Morgan</h3>
                            <h4>Educación IT</h4>
                                <h4>Desarrollo Web Full Stack</h4>
                                    <h5> Julio - Actualmente - 2022</h5>
                                        <p> <a href="http://www.pescar.org.ar/wp/">Fundación Pescar</a> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Cursos