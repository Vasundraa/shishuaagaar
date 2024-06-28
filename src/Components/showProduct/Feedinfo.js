import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feedinfo = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get('https://vasubanu.pythonanywhere.com/breastfeed-detail/');
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
                        <th>Parent Name</th>
                        <th>startTime</th>
                        <th>stopTime</th>
                        <th>breastSide</th>
                        <th>Feeding Type</th>
                        <th>painLevel</th>
                        <th>nippleShape</th>
                        <th>nippleColor</th>
                        <th>milkBlister</th>
                        <th>nippleCracks</th>
                        <th>feelings</th>
                        <th>presentWeight</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.submission_date}</td>
                            <td>{product.parentName}</td>
                            <td>{product.startTime}</td>
                            <td>{product.stopTime}</td>
                            <td>{product.breastSide}</td>
                            <td>{product.supplement}</td>
                            <td>{product.painLevel}</td>
                            <td>{product.nippleShape}</td>
                            <td>{product.nippleColor}</td>
                            <td>{product.milkBlister}</td>
                            <td>{product.nippleCracks}</td>
                            <td>{product.feelings}</td>
                            <td>{product.presentWeight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Feedinfo;
