//atajo rafce tab(sale la parte inicial del componente)
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { obtenerInformacion, obtenerMasPokemones, obtenerPokemonesAccion } from '../redux/poke'
import './Card.css'



const Pokemones = () => {
    //console.log(props)
    const dispatch = useDispatch()
    const poke = useSelector(store => store.pokemones.arrayPoke)
   // console.log("poke",poke)
   

    return (
        <div >
            Lista de pokemones
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>GET POKEMONES</button>
            <button onClick={() => dispatch(obtenerMasPokemones())}>MAS POKEMONES</button>
            <button onClick={() => dispatch(obtenerInformacion())}>INFO</button>
            <ul>
                { 
                  poke && poke.map((item,i) => {
                      return <li className='Card' key={i}>
                        <a className='texto-encima' >{item.name}</a>
                        <img style={{Height: 200, width:200, marginTop:25}} alt="casa" width={"60px"}  height={"160px"} src={item.sprites.other.home.front_default}/>
                        </li>    
                    }) 
                // pokemones && pokemones.map((item,i) => { console.log(item)
                //       return <li key={i}>{item.name}
                //         </li>    
                //     })                           
                }
            </ul>
        
            
        </div>
    )
}

export default Pokemones

//<a href="URL DESTINO"><img src="URL DE LA IMAGEN"></a>
//