import React from 'react'

export default function ProductDetails(props) {
    return (
        <tbody>
        {props.products.map(product=>{
            return(
                <tr>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>${product.price}</td>
                    <td>
                        <ul>
                            {product.categories.map((category, i)=>{
                                return(
                                    <li key={i}>{category}</li>
                                )
                            })}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            {product.colors.map((color, i)=>{
                                return(
                                    <li key={i}>{color}</li>
                                )
                            })}
                        </ul>
                    </td>
                    <td>{product.stock}</td>
                </tr>
            )
        }
        )
        }
        </tbody>
    )
}
