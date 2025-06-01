import { Routes, Route } from 'react-router-dom';
import Home from '../home';
import Register from '../register'
import Cart from '../cart';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default RoutesApp