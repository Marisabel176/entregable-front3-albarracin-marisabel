
import React from 'react'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

import Data from "./data.json";
import Item from "./Item";


export default function Listado(props) {
  return (
    <div className='container'>
      {/* renderizamos los Item aquí */}
      {Data.map((prod)=>{
       return (
       <Item nombre= {prod.producto.nombre} descripcion= {prod.producto.descripcion} stock= {prod.stock} sumar={props.onSumar}/>
       );
    })}
  
  </div>
  )
}
