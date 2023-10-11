import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "./cart";
import { CardForm } from "./cardForm";
import { UpdateProduct } from "./updateProduct";

function Card({ product }) {
    // const { addToCart } = useCart();
    const [invoceObj, setInvoiceObj] = useState({})
    const [isEditing, setIsEditing] = useState(false);
    // const [editedProduct, setEditedProduct] = useState({ ...product });

    useEffect(() => {
        setInvoiceObj({
            invoice_item: [
                {
                    user: 1,
                    productId: product?._id,
                    quantity: 1
                }
            ]
        });

        console.log(product)
    }, [product])

    const handleBuyClick = () => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://localhost:5500/api/createInvoice',
            headers: {},
            data: invoceObj
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleUpdateClick = () => {
        setIsEditing(true);
    };

    const handleDeleteClick = () => {
        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `http://localhost:5500/api/deleteProduct/${product?._id}`,
            headers: {
                'Content-Type': 'application/json'
            },
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    // const handleSaveClick = () => {
    //     // Send a PUT request to update the product in the database
    //     axios.put(`/api/products/${product.productId}`, editedProduct).then((response) => {
    //         // Update the product details with the edited product
    //         setEditedProduct({ ...response.data });
    //         setIsEditing(false);
    //     });
    // };

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setEditedProduct({
    //         ...editedProduct,
    //         [name]: value,
    //     });
    // };

    return (
        <div style={{ background: "white", padding: '15px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRadius: '12px', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '60px', alignItems: 'center', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', width: '100%' }}>
                    <img style={{ width: '50px', height: '50px', borderRadius: '8px' }} src={product?.image} />
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                        <div>{product?.name}</div>
                        <div>Car Make: {product?.carMake}</div>
                        <div>Car Model: {product?.carModel}</div>
                        <div>Chassis Number: {product?.chassisNumber}</div>
                        <div>Year: {product?.year}</div>
                        <div>Part ID: {product?.partId}</div>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <button onClick={e => handleUpdateClick()}>Update</button>
                    <button onClick={e => handleBuyClick()}>Buy</button>
                    <button onClick={e => handleDeleteClick()}>Delete</button>
                </div>

            </div>
            {isEditing && <UpdateProduct id={product} productObj={product} />}
        </div>

    );
}

export default Card;
