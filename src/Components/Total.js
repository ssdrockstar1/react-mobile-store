import React from 'react'
import {Link} from 'react-router-dom'

function Total(props) {
    const {subTotal,tax,total,emptyCart}=props.value
    return (
        <div className="col-10 col-lg-2 ml-lg-auto text-capitalize my-2">
           <Link to="/"> <div className="btn btn-outline-danger my-3" onClick={()=>{emptyCart()}}>Empty Cart</div></Link>
            <h6>subtotal: ${subTotal}</h6>
            <h6>tax: ${tax}</h6>
            <hr/>
            <h4>total: ${total}</h4>
        </div>
    )
}

export default Total
