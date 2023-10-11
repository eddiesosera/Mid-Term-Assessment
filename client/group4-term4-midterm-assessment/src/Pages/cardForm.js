import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const CardForm = ({ fields, buttonTitle, buttonFunction, getFormData }) => {

    const [formObj, setFormObj] = useState({});

    useEffect(() => {
        console.log(formObj)
    }, [fields, formObj]);

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

    }


    return (

        <div>
            {
                fields?.map((cardField) => {
                    return (
                        <input type={cardField.type} placeholder={cardField?.placeholder} onChange={e => { setFormObj({ ...formObj, [cardField?.name]: e.target.value }) }} />
                    )
                })
            }
            <button onClick={e => { buttonFunction === "add" ? addProduct() : updateProduct() }}>
                {
                    buttonFunction === "add" ? "Add Product" : "Update Product"
                }
            </button>
        </div>
    )
}
