import React, { Component } from 'react';
import {ProductConsumer} from './Context'
import Product from './Product';
import './CSSFiles/ProductList.css'

class ProductList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="productPage">
            <h1 style={{textAlign:"center", fontFamily:"Pacifico, cursive"}}><span style={{color:"blue"}}>Our</span>{""}-<span style={{color:"rgb(70, 179, 124)"}}>Product</span></h1>
            <div className="d-flex row">
            <ProductConsumer>
                {(value)=>{return value.productList.map((product)=>{
                        return <Product product={product}/>
                }) }}
               
            </ProductConsumer>
            
           
            </div>
            </div>
        )
    }
}

export default ProductList

