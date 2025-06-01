import { useEffect, useState, useRef } from 'react';
import styles from "./styles.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import api from '../../../services/api'

function FillProducts() {
  const [produtos, setProdutos] = useState([])

  async function getProdutos() {
    const produtosFromApi = await api.get('/produto')

    setProdutos(produtosFromApi.data)
  }

  useEffect(() => {
    getProdutos()
  }, [])

  return produtos
}



const ProductCarousel = ({ scale = 1 }) => {
  const products = FillProducts();

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 1000;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={styles["carousel-container"]}
      style={{ "--scale": scale }}
    >
      <button
        className={`${styles["nav-btn"]} ${styles["nav-btn-left"]}`}
        onClick={() => scroll("left")}
        aria-label="Scroll Left"
      >
        <ChevronLeft />
      </button>

      <div className={styles.carousel} ref={carouselRef}>
        {products.map((product, index) => (
          <div className={styles.card} key={index}>
            <img src={product.image} alt={product.name} />
            <div className={styles.name}>{product.name}</div>
            <div className={styles.price}>R${product.price}</div>
            <div className={styles.rating}>
              <span>⭐ {product.rating}</span>
              <button className={styles["add-btn"]}>+</button>
            </div>
          </div>
        ))}

        <div className={styles.rlblock}>
          <div className={styles.rlshadow} />
        </div>
        <div className={styles.rrblock}>
          <div className={styles.rrshadow} />
        </div>
      </div>

      <button
        className={styles["nav-btn"]}
        onClick={() => scroll("right")}
        aria-label="Scroll Right"
      >
        <ChevronRight className={styles.textCenter} />
      </button>
    </div>
  );
};

export default ProductCarousel;
