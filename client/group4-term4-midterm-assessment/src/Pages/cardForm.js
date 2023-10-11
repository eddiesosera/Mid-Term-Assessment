import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const CardForm = ({ fields, buttonTitle, buttonFunction, productId, productValues }) => {

    const [formObj, setFormObj] = useState({});

    useEffect(() => {
        console.log(productId)
    }, [fields, formObj, productValues]);

    const addProduct = () => {

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5500/api/createProduct',
            headers: {
                'Content-Type': 'application/json'
            },
            data: formObj
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    };

    const updateProduct = () => {
        let config = {
            method: 'patch',
            maxBodyLength: Infinity,
            url: `http://localhost:5500/api/updateProduct/${productId?.id?._id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: formObj
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
                {
                    fields?.map((cardField) => {
                        const value = cardField?.name
                        return (
                            <input type={cardField.type} style={{ width: cardField?.type === "number" ? "90px" : "150px" }} placeholder={cardField?.placeholder} onChange={e => { setFormObj({ ...formObj, [cardField?.name]: e.target.value }) }} />
                        )
                    })
                }
            </div>
            <button className='button' onClick={e => { buttonFunction === "add" ? addProduct() : updateProduct() }}>
                {
                    buttonFunction === "add" ? "Add Product" : "Update Product"
                }
            </button>
        </div>
    )
}
