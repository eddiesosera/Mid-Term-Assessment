import React from 'react'
import { CardForm } from '../cardForm'

export const AddProduct = () => {
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

    return (
        <div>
            <CardForm fields={cardFormObj} buttonTitle={"Add Product"} buttonFunction={"add"} />
        </div>
    )
}
