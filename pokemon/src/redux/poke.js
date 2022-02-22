import axios from  'axios'

//constates
let cont = 0
const dataInicial = {
    arrayPoke: [],
    info: [],
    infoGeneral: []
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
                arrayPoke: action.payload, //state.arrayPoke.concat(action.payload) CONCATENA
                info: action.payloadInfo
            }
        case OBTENER_INFORMACION:
               console.log("3", action.payload)
 
            return {
                ...state,
                infoGeneral: action.payload
            }
        default: 
            return state
    }

} 



//acciones
export const obtenerPokemonesAccion = () => async (dispatch) => {
    console.log("2")
    const info1 = []
    const url = []
    try {
        const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        respuesta.data.results.map(item => {
            url.push(item.url)
        })
        url.map( async(item) => {
            const respuesta = await axios.get(item)
            info1.push(respuesta.data)
        })

        
        // for (let i = 1; i < 21; i++) {
        //     const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
        //     info1.push(respuesta.data)
        // }  
        dispatch({
            type:OBTENER_POKEMONES_EXITO,
            payload:info1,
        })
    } catch (error){
        console.log(error)
    }

}   
export const obtenerMasPokemones = () => async (dispatch) => {
    cont = cont + 20
    const info = [] 
    try {
        const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${cont}&limit=20`)
    
        dispatch({
            type:OBTENER_MAS_POKEMONES,
            payload:respuesta.data.results,
        })
        
    }catch (error){
        console.log(error)
    }
    
}  

export const obtenerInformacion = () => async (dispatch,getstate) =>{
    const url = getstate().pokemones.info
    const info = []
   try {
       url.map(async(item) =>{
        const respuesta = await axios(item)
        info.push(respuesta.data)
       })   
      
      
   } catch (error) {
       console.log(error)
   }
  
   
    dispatch ({
                type:OBTENER_INFORMACION,
                payload: info
            })

}

//sprites/other/home/front_default