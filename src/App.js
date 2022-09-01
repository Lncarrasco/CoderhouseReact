import './App.css';
import { NavBar } from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {


  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Listado de productos'}/>
    <ItemCount/>
    </>
  );
}

export default App;
