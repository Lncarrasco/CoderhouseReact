import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={'Listado de productos'}/>
    </>
  );
}

export default App;
