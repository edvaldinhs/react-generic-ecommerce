import { useEffect, useState } from 'react';
import CartItemCard from './cartitemcard';
import styles from './cartitemcard/styles.module.scss';
import api from '../../../services/api';

function CartGrid({ userId }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchCart() {
      try {
        const res = await api.get(`/cart/${userId}`);
        setCartItems(res.data?.items || []);
      } catch (err) {
        console.error("Erro ao buscar carrinho", err);
      }
    }

    fetchCart();
  }, [userId]);

  return (
    <div>
      <h2 className={styles.heading}>Seu carrinho</h2>
      <div className={styles.grid}>
        {cartItems.map((item, idx) => (
          <CartItemCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CartGrid;
