import React, { Component } from 'react'
import CartHader from './CartHader'
import CartItems from './CartItems'
import { ProductConsumer } from '../Context'
import Total from '../Total'


class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    return(
                   <React.Fragment>
                    <h3 className="my-4"style={{fontFamily:"Pacifico, cursive"}}>Your Cart Items</h3>
                    <CartHader value={value}/>
                    <Total value={value}/>
                  </React.Fragment>
            )
                }}
            
            </ProductConsumer>
        )
    }
}

export default Cart