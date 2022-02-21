//atajo rafce tab(sale la parte inicial del componente)
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { obtenerInformacion, obtenerMasPokemones, obtenerPokemonesAccion } from '../redux/poke'
import { Link } from 'react-router-dom'



const Pokemones = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state);
    const pokemones = useSelector(store => store.pokemones.arrayPoke) //fuvnion flce retorna la store
    const info = useSelector(store => store.pokemones.info) //fuvnion flce retorna la store
    const [data, setData] = useState([])


    console.log('state',state);
    useEffect(() => {
        console.log('data', data)
        console.log(state,'state');

        setData (state.pokemones.info)

    }, [info])
    
 
    return (
        <div>
            Lista de pokemones
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>GET POKEMONES</button>
            <button onClick={() => dispatch(obtenerMasPokemones())}>MAS POKEMONES</button>
            <button onClick={() => dispatch(obtenerInformacion())}>INFO</button>
            <ul>
                {
                  pokemones && pokemones.map((item,i) => {
                      return <li key={i}>
                  <a >{item.name}</a>
                  </li>    
                })                          
                }
            </ul>
            <ul>
                {
                 data.length > 1 && data.map((item , index) => {
                    console.log ('item', item)
                    return <li key={index}>
                        <a >{item.name}</a>             
                    </li>    
                })                          
                }
            </ul>
        </div>
    )
}

export default Pokemones