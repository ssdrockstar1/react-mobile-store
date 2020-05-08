import React from 'react'
import {Modal,Button} from 'react-bootstrap'
import {ProductConsumer} from '../Components/Context'
import {Link} from 'react-router-dom'

function ModalBox(props) {
  return (
    <ProductConsumer>
      {(value)=>
                {const {id,img,price,company,info,inCart,title}=value.detailProduct
                return(
    <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter" className="text-center mx-5 ml-2" >
      Item Added to Cart
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="container">
        <div className="row text-capitalize"> 
        <div className="col mx-auto my-2 text-center">            
        <img src={img} alt="" style={{height:"200px"}}/>
            <h2><strong> price:${price}</strong></h2>
            <p className="text-muted">{title}</p>
            </div>

      </div>
      <div className="col-10 mx-auto text-center">
      <Link to="/"> <Button className="my-2 mx-auto" variant="outline-success " onClick={props.onHide}> Continue Shopping</Button></Link>
      </div>
      <div className="col-10 mx-auto text-center">
      <Link to="/cart"><Button className=" mx-auto" variant="outline-warning">Go to Cart</Button></Link>
      </div>
      </div>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
                )}}
  </ProductConsumer>
                
  )
}

export default ModalBox
