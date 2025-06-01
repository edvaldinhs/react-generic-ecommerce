import styles from './styles.module.scss';

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />

      <div className={styles.content}>

        <p className={styles.name}>{product.name}</p>

        <div className={styles.priceSection}>
          <span className={styles.price}>R${product.price}</span>
        </div>

        <div className={styles.meta}>
          <span>⭐ {product.rating} |</span>
        </div>
      </div>

      <div className={styles.cartIcon}>
        🛒
      </div>
    </div>
  );
}

export default ProductCard;
