import React from 'react'
import MisProyectos from './MisProyectos'
import Databases from '../../api/db.json'

const ApiProyectos = () => {
  return (
    <div class="row contenedor-proyecto">
          {
        Databases.map((database) => {
         return (
          <MisProyectos nombre={database.nombre} descripcion={database.descripcion} repositorio={database.repositorio} />
         )
        })
      }
    </div>
  )
}

export default ApiProyectos