import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Poopinfo = () => {
    const [poops, setPoops] = useState([]);

    const getPoops = async () => {
        try {
            const response = await axios.get('https://vasubanu.pythonanywhere.com/poop_detail/');
            const poopsWithData = response.data.map(poop => ({
                ...poop,
                parentName: poop.parentName, // Fetch parent name
            }));
            setPoops(poopsWithData);
        } catch (error) {
            console.error('Error fetching poops:', error);
        }
    };

    useEffect(() => {
        getPoops();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Parent Name</th>
                        <th>Urine Time</th>
                        <th>Pee Time</th>
                        <th>Colour</th>
                        <th>Texture</th>
                    </tr>
                </thead>
                <tbody>
                    {poops.map((poop, index) => (
                        <tr key={index}>
                            <td>{poop.submission_date}</td>
                            <td>{poop.parentName}</td>
                            <td>{poop.timing}</td>
                            <td>{poop.time}</td>
                            <td>{poop.colour}</td>
                            <td>{poop.texture}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Poopinfo;
