import React from 'react'
import CategoryItem from './CategoryItem';


export default function Category() {
    return (
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
          </div>
          <div className="card-body">
            <div className="row">
              <CategoryItem categoryName = "Category 01" />
              <CategoryItem categoryName = "Category 02" />
              <CategoryItem categoryName = "Category 03" />
              <CategoryItem categoryName = "Category 04" />
              <CategoryItem categoryName = "Category 05" />
              <CategoryItem categoryName = "Category 06" />
            </div>
          </div>
        </div>
      </div>
    )
}
