import React, { Component } from 'react'



class CartItems extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count:1
        }
    }


    render() {
        const{value}=this.props;
  
        return (

            value.cart.map((item)=>{ return(
                
                    <div className="row  text-capitalize ">
                        
                                <div className="col-10 col-lg-2 ml-auto my-2 ">
                                <img src={item.img} alt="" style={{height:"50px"}}/>
                                </div>        
                                <div className="col-10 col-lg-2 ml-auto my-2">
                                <p>{item.title}</p>
                                </div> 
                                <div className="col-10 col-lg-2 ml-auto my-2">
                                 <p>{item.price}</p>
                                 </div>
                                 <div className="col-10 col-lg-2 ml-auto my-2">
                                <p><input type="button" value="-" onClick={()=>{value.minusItem(item.id)}}/><input type="text" name="" id="" value={item.count} style={{width:"1rem"}}/><input type="button" value="+" onClick={()=>{value.plusItem(item.id)}}/></p></div>
                                <div className="col-10 col-lg-2 ml-auto my-2">
                                <i className="fa fa-trash" onClick={()=>{value.deleteItem(item.id)}}></i>
                                </div>
                                <div className="col-10 col-lg-2 ml-auto my-2">
                                <p>{item.total}</p>
                                </div>
                            
                       
                    </div>
                    
              
                )})

            )
        
        
    }
}

export default CartItems