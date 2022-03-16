//atajo rafce tab(sale la parte inicial del componente)
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { obtenerInformacion, obtenerMasPokemones, obtenerPokemonesAccion } from '../redux/poke'
import BotonesFiltro from './BotonesFiltro'
import './Card.css'
import CardPoquemone from './CardPoquemone'



const Pokemones = () => {
    //console.log(props)
    const dispatch = useDispatch()
    const poke = useSelector(store => store.pokemones.arrayPoke)
    const carga = useSelector(store => store.pokemones.carga) 
    //const [loding, setLoding] = useState(carga)
    //console.log("poke",loding)
    console.log("cargando.111",poke)
    const cargando = ()=>{
        dispatch(obtenerMasPokemones()) 
        console.log("cargando.222",carga)
    }
 
    return (
        <div className='poke-padre' >
            Lista de pokemones
            <button onClick={() => dispatch(obtenerPokemonesAccion())}>GET POKEMONES</button>
            <button onClick={cargando}>MAS POKEMONES</button>
            {/* <button onClick={() => dispatch(obtenerMasPokemones())}>MAS POKEMONES</button> */}
            <button onClick={() => dispatch(obtenerInformacion())}>INFO</button>
            <BotonesFiltro />
            <ul>
                
                { 
                
                   carga? poke && poke.map((item,i) =>{
                       return (
                        <li className='Card' id={item.id}>
                        <CardPoquemone name={item.name} img ={item.sprites.other.home.front_default} id={item.id}/> 
                        </li>  
                        ) })   :<img style={{display:"block",margin:"auto"}} src="https://pa1.narvii.com/6607/6da40c914c7145c591c0777ada8a9a177bb4f9ba_hq.gif"/>
                        
                }
            </ul>
        
            
        </div>
    )
}

export default Pokemones

//<a href="URL DESTINO"><img src="URL DE LA IMAGEN"></a>
//