import React, { Component } from 'react'

export default class ProductRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            product:{
                relaciones:[]
            }
        }
    }

    componentDidMount(){
        fetch(this.props.url)
            .then(res=>res.json())
            .then(result=>{
                this.setState({
                    product: result
                })
            })
    }

    render() {
        let {product} = this.state;
        return (
            <React.Fragment>
                <td >{product.descripcion}</td>
                <td >{product.detalle}</td>
                <td >${product.precio}</td>
                <td >
                    <ul>
                        {product.relaciones.map(relacion=>{
                            return(
                                <li>{Object.values(relacion)}</li>
                            )
                        })}
                    </ul>
                </td>
            </React.Fragment>
        )
    }
}

