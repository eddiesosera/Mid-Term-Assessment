import React, { useEffect } from 'react'
import { CardForm } from './cardForm'

export const UpdateProduct = (id, productObj) => {

    const cardFormObj = [
        {
            name: 'image',
            type: 'text',
            placeholder: 'Image'
        },
        {
            name: 'name',
            type: 'text',
            placeholder: 'Name',
        },
        {
            name: 'carMake',
            type: 'text',
            placeholder: 'Car Make'
        },
        {
            name: 'carModel',
            type: 'text',
            placeholder: 'Car Model'
        },
        {
            name: 'chasisNumber',
            type: 'text',
            placeholder: 'Chasis Number'
        },
        {
            name: 'year',
            type: 'number',
            placeholder: 'Year'
        },
        {
            type: 'partId',
            placeholder: 'Part ID'
        },
        {
            name: 'quantity',
            type: 'number',
            placeholder: 'Quantity'
        },
    ]

    useEffect(() => {

    }, [id, productObj])

    return (
        <div>
            <CardForm fields={cardFormObj} buttonTitle={"Update Product"} buttonFunction={"update"} productId={id} productValues={productObj} />
        </div>
    )
}
