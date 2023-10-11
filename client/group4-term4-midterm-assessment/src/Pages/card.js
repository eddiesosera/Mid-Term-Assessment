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
        <div>
            <div style={{ display: 'flex', gap: '20px' }}>

                <img style={{ width: '50px', height: '50px' }} src={product?.image} />
                <h3>{product?.name}</h3>
                <p>Car Make: {product?.carMake}</p>
                <p>Car Model: {product?.carModel}</p>
                <p>Chassis Number: {product?.chassisNumber}</p>
                <p>Year: {product?.year}</p>
                <p>Part ID: {product?.partId}</p>

                {/* {isEditing ? ( */}
                {/* <button onClick={handleSaveClick}>Save</button> */}
                {/* ) : ( */}
                <button onClick={e => handleUpdateClick()}>Update</button>
                {/* )} */}
                <button onClick={e => handleBuyClick()}>Buy</button>
                <button onClick={e => handleDeleteClick()}>Delete</button>
            </div>
            {isEditing && <UpdateProduct id={product} productObj={product} />}
        </div>

    );
}

export default Card;
