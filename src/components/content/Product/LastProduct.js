import React, {Component} from 'react';

export default class LastProduct extends Component {

    constructor(props){
        super(props);
        this.state = {
            product:{}
        }
    }

    componentDidMount(){

        fetch('http://localhost:3030/api/products')
            .then(res=>res.json())
            .then(result=>{
                this.setState({
                    product: result.products.slice(-1)[0]
                });
            });

    }

    render(){
        var {product} = this.state;
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: '25rem'}} src={`http://localhost:3030/${product.urlImagen}`} alt={product.name}/>
                        </div>
                        <p><strong>{product.name}.</strong> {product.descripcion}</p>
                        <a target="_blank" rel="nofollow" href="/">View product detail</a>
                    </div>
                </div>
            </div>
    )
    }
}
