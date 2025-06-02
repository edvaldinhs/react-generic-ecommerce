import { useEffect, useState, useRef } from 'react';
import styles from "./styles.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import api from '../../../services/api';

const ProductCarousel = ({ scale = 1 }) => {
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await api.get('/produto');
        setProducts(res.data);
      } catch (err) {
        console.error("Erro ao buscar produtos", err);
      }
    }

    fetchProducts();
  }, []);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 1000;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleClick = (id) => {
    navigate(`/product/${id}`);
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
              <button
                className={styles["add-btn"]}
                onClick={() => handleClick(product.id)}
              >
                +
              </button>
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
