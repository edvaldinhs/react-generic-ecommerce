import { useEffect, useState } from 'react';
import ProductCard from '../productcard';
import styles from './styles.module.scss';
import api from '../../../services/api';

function ProductGrid() {

  const [products, setproducts] = useState([]);

  useEffect(() => {
    async function getproducts() {
      try {
        const productsFromApi = await api.get('/produto')
        setproducts(productsFromApi.data)
      } catch (error) {
        console.error("Erro ao buscar produtos, error", error)
      }
    }

    getproducts();
  }, [])


  return (
    <div>
      <h2 className={styles.heading}>Você vai adorar</h2>
      <div className={styles.grid}>
        {products.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;