import React from 'react'
import CartItems from './CartItems'


function CartHader(props) {
    return (
        <div className="container col-12">
            <div className="row text-capitalize  text-muted ">
            <div className="col-lg-2">
            <p >products</p>
            </div>
            <div className="col-lg-2">
            <p >name of products</p>
            </div>
            <div className="col-lg-2">
            <p >price</p>
            </div>
            <div className="col-lg-2">
            <p >quantity</p>
            </div>
            <div className="col-lg-2">
            <p >remove</p>
            </div>
            <div className="col-lg-2">
            <p >total</p>
            </div>
            
            </div>
            <CartItems value={props.value}/>
            </div>
     
    )
}

export default CartHader
