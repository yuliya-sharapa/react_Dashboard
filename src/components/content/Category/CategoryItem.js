import React from 'react'

export default function CategoryItem(props) {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">{ props.categoryName }</div>
            </div>
        </div>
    )
}
