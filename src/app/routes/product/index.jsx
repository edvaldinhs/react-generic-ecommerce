import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './styles.module.scss';
import api from '../../../services/api';
import Sidebar from '../../../containers/layout/aside';

const types = ['PPP', 'PP', 'P', 'M', 'G', '2G', '3G', '4G'];

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

    const handleAddToCart = async () => {
        const USER_ID = "683de4499b6258ea7d76e7ad";
        // Esse id é do usuário genérico para testes, don't worry.
        // Quando (e se) implementar contas, só pegar o do usuário
        // atualmente logado...

        try {
            let cartRes = await api.get(`/cart/${USER_ID}`);
            let cart = cartRes.data;

            if (!cart) {
                const newCartRes = await api.post(`/cart`, { userId: USER_ID });
                cart = newCartRes.data;
            }

            await api.post(`/cartItem`, {
                cartId: cart.id,
                produtoId: product.id,
                quantity: quantity
            });

            alert("Produto adicionado ao carrinho!");
        } catch (err) {
            console.error("Erro ao adicionar produto ao carrinho", err);
            alert("Erro ao adicionar ao carrinho.");
        }
    };

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
                            className={`${styles.thumbnail} ${selectedImage === product.image ? styles.active : ''}`}
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

                    <div className={styles.types}>
                        <p>Tipo</p>
                        <div className={styles['type-options']}>
                            {types.map(type => (
                                <button
                                    key={type}
                                    className={`${styles['type-btn']} ${selectedSize === type ? styles.selected : ''}`}
                                    onClick={() => setSelectedSize(type)}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className={styles['quantity-selector']}>
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                    </div>

                    <button className={styles['cta-button']} onClick={handleAddToCart}>
                        ADICIONAR AO CARRINHO
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
