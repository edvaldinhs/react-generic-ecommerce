import { Routes, Route } from 'react-router-dom';
import Home from '../home';
import Register from '../register'
import Cart from '../cart';
import Product from '../product';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
}

export default RoutesApp