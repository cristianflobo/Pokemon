import axios from  'axios'

//constates
let cont = 0
const dataInicial = {
    arrayPoke: [],
    info: [],
    infoGeneral: [],
    carga: true
}

const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"
const OBTENER_MAS_POKEMONES = "OBTENER_MAS_POKEMONES"
const OBTENER_INFORMACION = "OBTENER_INFORMACION"

//reducer
export default function pokeReducer(state = dataInicial , action){

    //console.log(action.payload)
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {
                ...state,
                arrayPoke: action.payload
            }
        case OBTENER_MAS_POKEMONES:

          return  { 
                ...state,               
               arrayPoke: action.payload, //state.arrayPoke.concat(action.payload) CONCATENA
               carga : action.carga
                //info: action.payloadInfo
            }
        case OBTENER_INFORMACION:
               console.log("OBTENER", action)
 
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
    const info1 = []
    const info2 = []
    const url = []
    try {   
        for (let i = 1; i < 21; i++) {
            const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            info1.push(respuesta.data)
        }  

        // const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        //     respuesta.data.results.map(item => {
        //     url.push(item.url)
        //     })
        // url.map( async(url)=> {
        //     const respuesta = await axios.get(url)
        //     info2.push(respuesta.data)
        // })  

        // url.map( async(item) => {
        //     const respuesta = await axios.get(item)
        //     info1.push(respuesta.data)   
        // })
        dispatch({
            type:OBTENER_POKEMONES_EXITO,
            payload:info1,
        })
        
              
       
    } catch (error){
        console.log(error)
    } 
    

}   
export const obtenerMasPokemones = () => async (dispatch) => {
    cont  = cont + 20
    const info1 = []

    //console.log(`https://pokeapi.co/api/v2/pokemon?offset=${cont}&limit=20`)
    try {
        dispatch({
            type:OBTENER_MAS_POKEMONES,
            carga:false
        })

        for (let i = 1+cont; i < 21+cont; i++) {
            const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
            info1.push(respuesta.data)
        }  

        // const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${cont}&limit=20`)    
        // respuesta.data.results.map(item => {
        //     url.push(item.url)
        // })
        // url.map( async(item) => {
        //     const respuesta = await axios.get(item)
        //     info1.push(respuesta.data)
        // })  
       
        
    }catch (error){
        console.log("busca error",error)
    }finally {
        console.log("listo mas")
        dispatch({
            type:OBTENER_MAS_POKEMONES,
            payload:info1,
            carga:true
        })
    }
    
}  

export const obtenerInformacion = () => async (dispatch) =>{
    
    
   
  
   
    dispatch ({
                type:OBTENER_INFORMACION,
                payload: "state"
            })

}

//sprites/other/home/front_default