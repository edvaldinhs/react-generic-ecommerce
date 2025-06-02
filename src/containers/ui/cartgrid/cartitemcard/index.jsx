import styles from './styles.module.scss';
import api from '../../../../services/api';

function CartItemCard({ item, onRemove }) {
  const { produto, quantity, id } = item;

  const handleRemove = async () => {
    try {
      await api.delete(`/cartItem/${id}`);
      if (onRemove) onRemove(id);
    } catch (err) {
      console.error("Erro ao remover item do carrinho:", err);
    }
  };

  return (
    <div className={styles.card}>
      <img src={produto.image} alt={produto.name} className={styles.image} />

      <div className={styles.content}>
        <p className={styles.name}>{produto.name}</p>

        <div className={styles.priceSection}>
          <span className={styles.price}>R${produto.price}</span>
          <span className={styles.quantity}>x{quantity}</span>
        </div>

        <div className={styles.meta}>
          <span>⭐ {produto.rating || "N/A"}</span>
        </div>

        <div className={styles.removeButtonWrapper}>
          <button className={styles.removeButton} onClick={handleRemove}>
            Remover
          </button>
        </div>

      </div>
    </div>
  );
}

export default CartItemCard;
