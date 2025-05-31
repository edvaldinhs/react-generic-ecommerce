import React, { useRef } from "react";
import styles from "./styles.module.scss";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "Processador AMD Ryzen 5 5600G, 3.9GHz",
    price: "R$949,99",
    rating: 4.9,
    image: "https://example.com/ryzen.png",
  },
  {
    name: "Smart TV Samsung 43 Polegadas UHD 4K",
    price: "R$1929,99",
    rating: 5.0,
    image: "https://example.com/tv.png",
  },
  {
    name: "Cadeira Gamer Husky Gaming, Preto e Vermelho",
    price: "R$1135,99",
    rating: 4.5,
    image: "https://example.com/chair.png",
  },
  {
    name: "Nobreak SMS NET4+ 1500VA Bivolt - 27296",
    price: "R$929,99",
    rating: 4.2,
    image: "https://example.com/nobreak.png",
  },
  {
    name: "SSD 480GB A400",
    price: "R$199,99",
    rating: 3.9,
    image: "https://example.com/ssd.png",
  },{
    name: "Processador AMD Ryzen 5 5600G, 3.9GHz",
    price: "R$949,99",
    rating: 4.9,
    image: "https://example.com/ryzen.png",
  },
  {
    name: "Smart TV Samsung 43 Polegadas UHD 4K",
    price: "R$1929,99",
    rating: 5.0,
    image: "https://example.com/tv.png",
  },
  {
    name: "Cadeira Gamer Husky Gaming, Preto e Vermelho",
    price: "R$1135,99",
    rating: 4.5,
    image: "https://example.com/chair.png",
  },
  {
    name: "Nobreak SMS NET4+ 1500VA Bivolt - 27296",
    price: "R$929,99",
    rating: 4.2,
    image: "https://example.com/nobreak.png",
  },
  {
    name: "SSD 480GB A400",
    price: "R$199,99",
    rating: 3.9,
    image: "https://example.com/ssd.png",
  },
];

const ProductCarousel = ({ scale = 1 }) => {
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
            <div className={styles.price}>{product.price}</div>
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
