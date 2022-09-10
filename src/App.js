import './App.css';
import { NavBar } from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicio } from './components/Inicio'
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>

        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/indumentaria' element={<ItemListContainer/>} />
        <Route path='/indumentaria/:id' element={<ItemDetailContainer/>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;