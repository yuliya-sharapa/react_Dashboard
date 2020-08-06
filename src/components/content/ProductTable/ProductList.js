import React from 'react';
import TableColumns from './TableColumns';
import ProductDetails from './ProductDetails';

export default function ProductList() {
    return (
        <div id="ProductList">
            {/* PRODUCTS LIST */}
            <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%">
                            <thead>
                                <TableColumns/>
                            </thead>
                            <tfoot>
                                <TableColumns/>
                            </tfoot>
                            <ProductDetails />
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
