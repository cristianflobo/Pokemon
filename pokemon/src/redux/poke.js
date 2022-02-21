import axios from  'axios'

//constates
let cont = 0
const dataInicial = {
    arrayPoke: [],
    info: []
}

const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"
const OBTENER_MAS_POKEMONES = "OBTENER_MAS_POKEMONES"
const OBTENER_INFORMACION = "OBTENER_INFORMACION"

//reducer
export default function pokeReducer(state = dataInicial , action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {
                ...state,
                arrayPoke: action.payload
            }
        case OBTENER_MAS_POKEMONES:
            return {
                ...state,
                arrayPoke: action.payload //state.arrayPoke.concat(action.payload) CONCATENA
            }
        case OBTENER_INFORMACION:
               console.log("3", action)
 
            return {
                ...state,
                info: action.payload
            }
        default: 
            return state
    }

} 



//acciones
export const obtenerPokemonesAccion = () => async (dispatch) => {
    console.log("2")
    try {
        const respuesta = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
        dispatch({
            type:OBTENER_POKEMONES_EXITO,
            payload:respuesta.data.results
        })
    } catch (error){
        console.log(error)
    }

}   
export const obtenerMasPokemones = () => async (dispatch) => {
    console.log("2")
    cont = cont + 20
    try {
        const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${cont}&limit=20`)
        
        dispatch({
            type:OBTENER_MAS_POKEMONES,
            payload:respuesta.data.results
        })
        
    }catch (error){
        console.log(error)
    }
    
}  

export const obtenerInformacion = () => async (dispatch) =>{

  
    let info = []
    let data= await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${cont}&limit=20`)
    console.log('data', data.data.results) 

    let a = await data.data.results.map(async item=>{
        let a = await axios(item.url)
        info.push(a.data)
    })

    console.log('aaaa',info);

    
    dispatch ({
                type:OBTENER_INFORMACION,
                payload: info
            })

}

//sprites/other/home/front_default