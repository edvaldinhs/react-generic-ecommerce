import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import api from '../../../services/api';
import Sidebar from '../../../containers/layout/aside';

const sizes = ['PPP', 'PP', 'P', 'M', 'G', '2G', '3G', '4G'];

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await api.get(`/produto/${id}`);
                setProduct(res.data);
                setSelectedImage(res.data.image);
            } catch (err) {
                console.error("Erro ao buscar produto", err);
            }
        }

        fetchProduct();
    }, [id]);

    if (!product) return <div>Carregando...</div>;

    return (
        <div className={styles.displayFlex}>
            <Sidebar logoEnabled={true} />
            <div className={styles['product-page']}>
                <div className={styles['image-gallery']}>
                    <div className={styles.thumbnails}>
                        <img
                            src={product.image}
                            alt={product.name}
                            onClick={() => setSelectedImage(product.image)}
                            className={`${styles.thumbnail} ${selectedImage === product.image ? styles.active : ''
                                }`}
                        />
                    </div>
                    <div className={styles['main-image']}>
                        <img src={selectedImage} alt="Selected hoodie" />
                    </div>
                </div>

                <div className={styles['product-details']}>
                    <p className={styles.breadcrumb}>HOME / PRODUTO</p>
                    <h1 className={styles.title}>{product.name}</h1>
                    <div className={styles.price}>
                        <span className={styles['new-price']}>R$ {product.price}</span>
                    </div>
                    <p className={styles.installments}>6x sem juros</p>

                    <div className={styles.sizes}>
                        <p>TAMANHO</p>
                        <div className={styles['size-options']}>
                            {sizes.map(size => (
                                <button
                                    key={size}
                                    className={`${styles['size-btn']} ${selectedSize === size ? styles.selected : ''
                                        }`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles['quantity-selector']}>
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    <button className={styles['cta-button']}>ADICIONAR AO CARRINHO</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
