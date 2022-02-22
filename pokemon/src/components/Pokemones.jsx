//atajo rafce tab(sale la parte inicial del componente)
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { obtenerInformacion, obtenerMasPokemones, obtenerPokemonesAccion } from '../redux/poke'
import { Link } from 'react-router-dom'
import './Card.css'



const Pokemones = () => {
    const dispatch = useDispatch()
    const store1 = useSelector(state => state)
    const info = useSelector(store => store.pokemones.infoGeneral) //fuvnion flce retorna la store
    const pokemones = useSelector(store => store.pokemones.arrayPoke) //fuvnion flce retorna la store

    const [data, setData] = useState([])


    setTimeout(() => {
      setData(pokemones)
     }, 100);
 
    return (
        <div>
            Lista de pokemones
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>GET POKEMONES</button>
            <button onClick={() => dispatch(obtenerMasPokemones())}>MAS POKEMONES</button>
            <button onClick={() => dispatch(obtenerInformacion())}>INFO</button>
            <ul>
                {
                  pokemones && pokemones.map((item,i) => {
                      return <li className='Card' key={i}>
                  <a className='texto-encima' >{item.name}</a>
                  <img style={{maxHeight: 200, maxHeight:200}} alt="casa" src={item.sprites.other.home.front_default}></img>
                  </li>    
                })                          
                }
            </ul>
        
            
        </div>
    )
}

export default Pokemones
