//atajo rafce tab(sale la parte inicial del componente)
import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { obtenerMasPokemones, obtenerPokemonesAccion } from '../redux/poke'
import { Link } from 'react-router-dom'



const Pokemones = () => {
    const dispatch = useDispatch()
    const pokemones = useSelector(store => store.pokemones.arrayPoke) //fuvnion flce retorna la store
    console.log(pokemones)
    return (
        <div>
            Lista de pokemones
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>GET POKEMONES</button>
            <button onClick={() => dispatch(obtenerMasPokemones())}>MAS POKEMONES</button>
            <ul>
                {
                  pokemones && pokemones.map(item => {
                      console.log(item)
                      return <li>
                  {/* <li key={item.name}>{item.name}</li> */}
                  <a href={item.url} target="_blank">{item.name}</a>
                  
                  </li>
                })       
                  
                }
            </ul>
        </div>
    )
}

export default Pokemones