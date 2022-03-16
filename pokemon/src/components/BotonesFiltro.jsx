import React from 'react'

const BotonesFiltro = () => {
    const filtroDece = (event) =>{
        console.log(event)
    }
    const filtroAce = (event) =>{
        console.log(event)
    }

  return (
    <div>
        <span style={{marginLeft:30}} >Filtar por:</span>
        <select name="select" style={{border:0}} onChange={filtroAce} >   
            <option  value="decre">Decreciente</option>
            <option  value="ace" >Acendente</option>
            <option  value="peso">Peso</option>
        </select>
    </div>
  )
}

export default BotonesFiltro