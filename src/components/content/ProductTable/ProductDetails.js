import React from 'react'

export default function ProductDetails(props) {
    return (
        <tbody>
        {props.products.map( (product, index) =>{
            return(
                <tr key={"row" + index }>
                    <td key={"tdname" + index } >{product.name}</td>
                    <td key={"tddescripcion" + index } >{product.description}</td>
                    <td key={"tdprice"+ index}  >${product.price}</td>
                    <td key={"tdcategory" + index }>
                        <ul>
                            {product.categories.map((category, i)=>{
                                return(
                                    <li key={i}>{category}</li>
                                )
                            })}
                        </ul>
                    </td>
                    <td key={"tdcolor" + index} >
                        <ul>
                            {product.colors.map((color, i)=>{
                                return(
                                    <li key={i}>{color}</li>
                                )
                            })}
                        </ul>
                    </td>
                    <td key={"tdstock" + index }>{product.stock}</td>
                </tr>
            )
        }
        )
        }
        </tbody>
    )
}
