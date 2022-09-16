import './App.css';
import { NavBar } from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Inicio } from './components/Inicio'
import ItemDetailContainer from './components/ItemDetailContainer';
import { Cart } from './components/Cart'
import CartProvider from './context/CartContext';

function App() {

  return (
    <BrowserRouter>
          <CartProvider>

      <NavBar/>
      <Routes>

        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/indumentaria' element={<ItemListContainer/>} />
        <Route path='/indumentaria/:id' element={<ItemDetailContainer/>} />

      </Routes>
    </CartProvider>
    </BrowserRouter>
  );
}

export default App;