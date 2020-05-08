import React, { Component } from 'react'
import {ProductConsumer} from '../Components/Context'
import {Link} from 'react-router-dom'
import Modal from './ModalBox'
import ModalBox from './ModalBox'

class Details extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


    render() {
        return (
           
            <ProductConsumer>
                {(value)=>
                {const {id,img,price,company,info,inCart,title}=value.detailProduct
                return(
                    <div className="container">
                        <div className="row text-capitalize">
                            <div className="col-10 mx-auto text-center my-5">
                            <h1>{company}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-10 col-md-6 mx-auto my-3">
                                <img src={img} alt="productImg"/>
                            </div>
                            <div className="col-10 col-md-6 mx-auto my-3 text-capitalize mt-3 mb-2">
                              <h2>  model:{title}</h2>
                            <h4 className="text-muted">made by: <span className="text-uppercase">{company}</span></h4>
                            <h4><strong className="text-blue">Price: ${price}</strong></h4>
                            <p className="text-capitalize font-weight-bold">some info:</p>
                            <p className="text-muted mt-5 mb-0">{info}</p>
                            <div className="btns">
                                <Link to="/"><button type="button" className="btn btn-outline-success mt-3 mx-3">Back to Products</button></Link>
                                <button type="button" className="btn btn-outline-warning mt-3 mx-3" disabled={inCart?true:false}
                                onClick={()=>{value.addToCart(id)}}>{inCart?"In Cart":"Add to Cart"}</button>
                        </div>
                            </div>
                       
                        </div>
                        <ModalBox show={value.openModal}
                             onHide={() => {value.handleModal()}}/>
                    </div>
                   
                )}}
                
            </ProductConsumer>
    
            
        )
    }
}

export default Details