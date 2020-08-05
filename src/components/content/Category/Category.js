import React, {Component} from 'react';
import CategoryItem from './CategoryItem';


export default class Category extends Component {
      render(){
        return (
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
              </div>
              <div className="card-body">
                <CategoryItem />
              </div>
           </div>
          </div>
      )
      }

}
