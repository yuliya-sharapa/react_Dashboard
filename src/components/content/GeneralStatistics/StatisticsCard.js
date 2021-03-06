import React, { Component } from 'react';
//import PropTypes from 'prop-types'

class StatisticsCard extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        switch(this.props.tipo){
            case "product":
                this.callAPI('http://localhost:3030/api/products')
                break;
            case "category":
                this.callAPI('http://localhost:3030/api/products')
                break;
            case "user":
                this.callAPI('http://localhost:3030/api/users')
                break;
            default:
                console.log("ERROR");
                break;
        }
    }

    callAPI = (urlApi) => {
        fetch(urlApi)
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            this.setDataCard(result)
        })
        .catch(error => console.log(error))
    }

    setDataCard = (data) => {
        switch(this.props.tipo){
            case "product":
                this.setState( {blcolor:'primary',
                                title:'Products in Data Base',
                                number: data.count,
                                icon:'clipboard-list'});
                break;
            case "category":
                let countCategory = Object.values(data.countByCategory).length
                this.setState( {blcolor:'success',
                                title:'Categories in Data Base',
                                number: countCategory,
                                icon:'clipboard-list'});
                break;
            case "user":
                this.setState( {  blcolor:'warning',
                                title:'Users quantity',
                                number: data.count,
                                icon:'user-check'});
                break;
            default:
                console.log("ERROR");
                break;
        }
    }

    render () {
        return (
        <div className="col-md-4 mb-4">
            <div className={`card border-left-${this.state.blcolor} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {this.state.title} </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">
                                { this.state.number}
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas fa-${this.state.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default StatisticsCard;

/*
StatisticsCard.propTypes = {
    blcolor: PropTypes.string,
    title: PropTypes.string,
    number: PropTypes.number,
    icon: PropTypes.oneOf(["clipboard-list", "dollar-sign", "user-check"])
}

StatisticsCard.defaultProps = {
    blcolor: "primary",
    title: "Data Base info",
    number: 0,
    icon: "clipboard-list"
}
*/