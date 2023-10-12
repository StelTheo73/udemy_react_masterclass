import "../static/css/ProductList.css";
import Loading from "../assets/loading.gif";

import { useState } from 'react';
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:8000/products");

    // Use Promise
    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //         fetch(url)
    //         .then(response => response.json())
    //         .then(data => setProducts(data));
    //     },
    //     [url]
    // );

    // Use async/await --> define the function inside of useEffect
    // const [products, setProducts] = useState([])
    // useEffect(() => {
    //     const fetchProducts = async () => {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setProducts(data);
    //     }
    //     fetchProducts();
    // }, [url]);

    // Use async/await with callback --> define the function outside of useEffect
    // const [products, setProducts] = useState([])
    // const fetchProducts = useCallback(async () => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     setProducts(data);
    // }, [url]);

    // useEffect(() => {
    //     fetchProducts();
    // }, [fetchProducts]);



    // Use custom hook
    const { data: products, loading, error } = useFetch(url);

    return (
        <section>
            <div className="filter">
                <button
                    onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}
                >In Stock
                </button>
                <button
                    onClick={() => setUrl("http://localhost:8000/products")}
                >All Products
                </button>
            </div>
            {loading && <p className="loading"><img src={Loading} alt="Loading products..."></img></p>}
            {error && <p className="error">{error}</p>}

            {!error && !loading && products && products.map((product) => (
                    <div className="card" key={product.id}>
                        <p className="id">{product.id}</p>
                        <p className="name">{product.name}</p>
                        <p className="info">
                            <span className="price">${product.price}</span>
                            <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In Stock" : "Unavailable"}</span>
                        </p>
                    </div>
                ))
            }
        </section>
    )
}
