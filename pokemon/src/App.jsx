import Pokemones from './components/Pokemones';
import { Provider } from 'react-redux';           //es para leer la tineda 
import generateStore from './redux/store';
import {Routes,Route} from "react-router-dom";
import InformacionPoke from './components/InformacionPoke';

function App() {
  const store = generateStore()
  return (

    <Provider store={store}>   
      <Routes>
        <Route path="/" element={<Pokemones/>}/>
        <Route path="infromacion" element={<InformacionPoke/>}/>
      </Routes>
    </Provider>
    
  );
}

export default App;
