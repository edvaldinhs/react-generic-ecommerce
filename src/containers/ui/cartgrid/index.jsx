import { useEffect, useState } from 'react';
import CartItemCard from './cartitemcard';
import styles from './styles.module.scss';
import api from '../../../services/api';

function CartGrid({ userId }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      if (!userId) return;
      try {
        const res = await api.get(`/cart/${userId}`);
        setCartItems(res.data?.items || []);
      } catch (err) {
        console.error("Erro ao buscar carrinho", err);
      }
    }

    fetchCart();
  }, [userId]);

  const handleRemove = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const total = cartItems.reduce((acc, item) => {
    return acc + (item.produto?.price || 0) * item.quantity;
  }, 0);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Seu carrinho</h2>
      <h2 className={styles.total}>Total: R${total.toFixed(2)}</h2>
      <div className={styles.grid}>
        {cartItems.map((item) => (
          <CartItemCard key={item.id} item={item} onRemove={handleRemove} />
        ))}
      </div>
    </div>
  );
}


export default CartGrid;
