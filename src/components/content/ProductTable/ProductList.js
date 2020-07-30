import React from 'react';
import TableColumns from './TableColumns';
import ProductDetails from './ProductDetails';

export default function ProductList() {
    return (
        <div>
            {/* PRODUCTS LIST */}
            <h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <TableColumns/>
                            </thead>
                            <tfoot>
                                <TableColumns/>
                            </tfoot>
                            <ProductDetails products={[
                                {
                                name: "Leche",
                                description: "Muy bueno",
                                price: 10,
                                categories: ['descremado', 'entero', 'chocolatado'],
                                colors:['blanco', 'morron'],
                                stock: 50
                                },
                                {
                                name: "Galletas",
                                description: "Muy ricas",
                                price: 20,
                                categories: ['sin azucar', 'con avena'],
                                colors:['amarillo', 'morron', 'blanco'],
                                stock: 500
                                }
                            ]}/>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
