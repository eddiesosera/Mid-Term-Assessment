import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/api/products").then((response) => {
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            {products.map((product) => (
                <Card key={product._id} product={product} />
            ))}
        </div>
    );
}

export default Home;
