import React, {Component} from 'react';
import ProductRow from './ProductRow';


export default class ProductDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            products:[]
        }
        
    }

    componentDidMount(){
        fetch('http://localhost:3030/api/products')
            .then(res=>res.json())
            .then(result=>{
                this.setState({
                    products: result.products
                })
            })

    }

    render(){
        let {products} = this.state;
        return (
            <tbody>
            {products.map( (product, index) =>{
                return(
                    <tr>
                        <ProductRow url={`http://localhost:3030${product.detail}`}/>
                    </tr>
                )
            }
            )
            }
            </tbody>
        )
    }

}
