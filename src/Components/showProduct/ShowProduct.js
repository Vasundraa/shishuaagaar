import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../showProduct/showProduct.css'

const ShowProduct = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get('https://vasubanu.pythonanywhere.com/product/');
            const productsWithData = response.data.map(product => ({
                ...product,
                parentName: product.parentName, // Fetch parent name
            }));
            setProducts(productsWithData);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Parent name</th>
                        <th>Date</th>
                        <th>Sex</th>
                        <th>Gestational age</th>
                        <th>Weight</th>
                        <th>Height</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.submission_date}</td>
                            <td>{product.parentName}</td>
                            <td>{product.date}</td>
                            <td>{product.sex}</td>
                            <td>{product.premature}</td>
                            <td>{product.weight}</td>
                            <td>{product.height}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShowProduct;
 
