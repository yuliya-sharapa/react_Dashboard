import React, { Component } from 'react'
import StatisticsCard from './StatisticsCard'

class GeneralStatistics extends Component {

   constructor(props){
    super(props)
    this.state = {
      users: {},
      products: {},
      categories: {}
      };
   }

    componentDidMount() {
      //  this.callAPI('http://localhost:3030/api/users')
    }

    callAPI(urlApi){
      fetch(urlApi)
      .then(res => res.json())
      .then((data) => {
          console.log(data);
          this.setState({ users: data })
      })
      .catch(error => console.log(error))
    }

    render () {
      const { users } = this.state;
      console.log(users);
      return (
        <div>
            <StatisticsCard cards={[
            {
              blcolor:"primary",
              title:'Products in Data Base',
              number: 169,
              icon:"clipboard-list"
            },
            {
              blcolor:'success',
              title:'Amount in products',
              number:546.456,
              icon:"dollar-sign"
            },
            {
              blcolor:'warning',
              title:'Users quantity',
              number:38,
              icon:"user-check"
            }

          ]}/>
        </div>
      )
    };
}

export default GeneralStatistics;
