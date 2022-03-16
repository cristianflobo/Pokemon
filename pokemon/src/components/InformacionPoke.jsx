import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './InfoPoke.css'

const InformacionPoke = () => {
  const info = useSelector(store => store.pokemones.arrayPoke)
  const idArray = (useParams().id-1)
  const poke = info[idArray] 
  return (
    <div className='informacion'>
    
      <img className='imagen' src={poke.sprites.other.home.front_default} alt="" />
    </div>
  )
}

export default InformacionPoke