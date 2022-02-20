//atajo rafce tab(sale la parte inicial del componente)
import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion } from '../redux/poke'


const Pokemones = () => {
    const dispatch = useDispatch()
    return (
        <div>
            Lista de pokemones
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>TRAER</button>
        </div>
    )
}

export default Pokemones