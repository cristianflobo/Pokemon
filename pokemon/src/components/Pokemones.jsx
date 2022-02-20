//atajo rafce tab(sale la parte inicial del componente)
import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { obtenerMasPokemones, obtenerPokemonesAccion } from '../redux/poke'


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
                  pokemones && pokemones.map(item => (<li key={item.name}>{item.name}</li>))
                }
            </ul>
        </div>
    )
}

export default Pokemones