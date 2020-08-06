import React, { Component } from 'react';

export default class CategoryItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
    }

    componentDidMount(){

        fetch('http://localhost:3030/api/categories')
            .then(res=>res.json())
            .then(result=>{
                this.setState({
                    items: result
                })
            })

    }

    render(){
        var {items} = this.state;
        return (
            <div className="row">
                {items.map((item)=>(
                <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                        <div className="card-body">
                            {item.descripcion}: <b> {item.countRubro} </b> productos
                        </div>
                    </div>
                </div>
                ))}
            </div>
        )

    }

}


