import React, { useState } from 'react'

const Contador = () => {

    const [contador, setContador] = useState(0);

  return (
    <div>
        <h1> Componente {contador} </h1>
        <button onClick={ () => setContador(contador + 1 ) } > Aumentar</button>
        <button onClick={ () => setContador(contador - 1 ) } > Disminuir</button>
    </div>
  )
}

export default Contador