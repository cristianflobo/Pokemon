import Pokemones from './components/Pokemones';
import { Provider } from 'react-redux';           //es para leer la tineda 
import generateStore from './redux/store';

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>   
      <Pokemones/>
    </Provider>
    
  );
}

export default App;
