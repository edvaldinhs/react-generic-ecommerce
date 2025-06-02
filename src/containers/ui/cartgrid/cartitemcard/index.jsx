import styles from './styles.module.scss';

function CartItemCard({ item }) {
  const { produto, quantity } = item;

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
      </div>
    </div>
  );
}

export default CartItemCard;
