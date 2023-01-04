import React from 'react';
import Ajax from '../../assets/images/tecnologias/ajax.png';
import Apache from '../../assets/images/tecnologias/apache.png';
import Bootstrap from '../../assets/images/tecnologias/boostraps.png';
import Css from '../../assets/images/tecnologias/cssdos.png';
import Git from '../../assets/images/tecnologias/git.png';
import Html from '../../assets/images/tecnologias/html.png';
import Javascript from '../../assets/images/tecnologias/javascript.jpeg';
import Jquery from '../../assets/images/tecnologias/jquery.jpg';
import Laravel from '../../assets/images/tecnologias/laravel.png';
import MySQL from '../../assets/images/tecnologias/mysql.png';
import Php from '../../assets/images/tecnologias/php.jpg';
import ReactImg from '../../assets/images/tecnologias/react.png';

const Tecnologias = () => {
  return (
    <div>
 <section id="tecnologias">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="my-sm-5 text-white my-3 ">Dominios de tecnologias</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mb-4 mb-sm-0">
                        <h3>HTML5</h3>
                        <img class="img-fluid d-block mx-auto" width="60" src={Html} alt=""/>
                    </div>
                </div>

                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mb-4 mb-sm-0">
                        <h3>CSS3</h3>
                        <img class="img-fluid d-block mx-auto" width="80" src={Css} alt=""/>
                    </div>
                </div>

                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mb-4 mb-sm-0">
                        <h3>Bootstrap</h3>
                        <img class="img-fluid d-block mx-auto" width="60" src={Bootstrap} alt=""/>
                    </div>
                </div>
                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mb-4 mb-sm-0 js">
                        <h3>Javascript</h3>
                        <img class="img-fluid d-block mx-auto " width="60" src={Javascript} alt=""/>
                    </div>
                </div>


                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mb-4 mb-sm-0 react">
                        <h3>React</h3>
                            <img class="img-fluid d-block mx-auto " width="60" src={ReactImg} alt="React"/>
                    </div>
                </div>
                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mb-4 mb-sm-0 jquery">
                        <h3>Jquery</h3>
                            <img class="img-fluid d-block mx-auto " width="60" src={Jquery} alt="Jquery"/>
                    </div>
                </div>

            </div>
            <div class="row">

                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mt-4 mb-sm-4">
                        <h3>PHP</h3>
                        <img class="img-fluid d-block mx-auto" width="100" src={Php} alt=""/>
                    </div>
                </div>

                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mt-4 mb-sm-4 laravel">
                        <h3>Laravel</h3>
                        <img class="img-fluid d-block mx-auto " width="100" src={Laravel} alt=""/>
                    </div>
                </div>
                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mt-4 mb-sm-4 mysql">
                        <h3>MySQL</h3>
                        <img class="img-fluid d-block mx-auto" width="80" src={MySQL} alt=""/>
                    </div>
                </div>

                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mt-4 mb-sm-4">
                        <h3>Git</h3>
                        <img class="img-fluid d-block mx-auto" width="60" src={Git} alt=""/>
                    </div>
                </div>
                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mt-4 mb-sm-4">
                        <h3>Apache</h3>
                        <img class="img-fluid d-block mx-auto" width="130" src={Apache} alt=""/>
                    </div>
                </div>
                <div class="col-6 col-sm-2">
                    <div class="card py-5 px-4  mx-0 mt-4 mb-sm-4 mercadopago">
                        <h3>AJAX</h3>
                        {/* <!-- <img class="img-fluid d-block mx-auto " width="80" src="./images/ajax.png" alt=""> --> */}
                        <img class="img-fluid d-block mx-auto " width="80" src={Ajax} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Tecnologias