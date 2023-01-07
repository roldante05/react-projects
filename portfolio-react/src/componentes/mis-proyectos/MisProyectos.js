import React from 'react'
import { Link } from "react-router-dom";

const MisProyectos = (props) => {

    let imagen = "./images/img-proyectos/ "
  return (
    <div className="col-12 col-sm-4 p-3"  >
    <div className="proyecto">
        
    <img src={imagen + props.img} alt={props.nombre} className="img-fluid"/> 
        
        <h2 className="p-3 d-block">{ props.nombre }</h2>
        <p className="p-3 pb-5 d-block">{ props.descripcion }</p>
        <div className="row my-5 align-items-center">
            <div className="col-6 ps-4">
             <a href={ props.repositorio } target="_blank" className="btn btn-rojo">Ver Repositorio</a>
            </div>
            <div className="col-6 text-center">
            {/* {props.demo ? <a  href={props.demo} target="_blank" className="btn-blanco" >Ver online</a>  : <a onclick="return false;" href={props.demo} target="_blank" className="text-black" style="cursor: default;  background-color:#a1a1a1;  border-radius:16px ;  padding: 6px 12px; ">Ver online</a> } */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default MisProyectos