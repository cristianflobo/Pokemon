import axios from  'axios'

//constates
let cont = 0
const dataInicial = {
    arrayPoke: []
}

const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"
const OBTENER_MAS_POKEMONES = "OBTENER_MAS_POKEMONES"

//reducer
export default function pokeReducer(state = dataInicial , action){
    console.log("2")
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
        default: 
            return state
    }

} 



//acciones
export const obtenerPokemonesAccion = () => async (dispatch,getState) => {
    console.log("11")
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
export const obtenerMasPokemones = () => async (dispatch,getState) => {
    
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