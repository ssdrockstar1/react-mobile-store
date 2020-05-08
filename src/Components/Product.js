import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {ProductConsumer} from '../Components/Context'
import ModalBox from '../Components/ModalBox'
import './CSSFiles/Product.css'


class Product extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inCart:this.props.product.inCart
        }
    }

    render() {
        const {id,title,img,price,inCart}= this.props.product;
        const btnText=inCart? "In Cart":
        <i class="fa fa-shopping-cart"></i>
        
        return (
            <ProductConsumer>
                {(value)=>{
                    return(
                    <div className="col-md-3 m-5">
          <div className="card" style={{width: "18rem"}}>
              
            <div className="img-container p-5">
            <Link to="/details">
            <img src={img} className="card-img-top " alt="..."  onClick={()=>{value.handleDetails(id)}}/>
            </Link>
            <div className="btn-container">
            <button style={{width: "5rem", backgroundColor:"transparent",border:"none"}} disabled={inCart?true:false} onClick={()=>{value.addToCart(id)}}>
            {btnText}
            </button>
            </div>
            </div>
            
          <div className="card-footer d-flex justify-content-between mb-0">
           <p>{title}</p> 
           <h5>{`$${price}`}</h5>
        </div>
    </div>
        <ModalBox show={value.openModal}
                onHide={() => {value.handleModal()}}/>
    </div>)
                }}
        
    </ProductConsumer>
        )
    }
}

Product.propType={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        price:PropTypes.number,
        title:PropTypes.string,
        inCart:PropTypes.bool
    }).isRequired
};

export default Product