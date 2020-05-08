import React, { Component, createContext } from 'react';
import { render } from '@testing-library/react';
import {storeProducts,detailProduct} from '../data'

const ProductContext = createContext();

class ProductProvider extends Component{

    state={ productList:[],
            detailProduct:detailProduct,
            cart:[],
            openModal:false,
            subTotal:0,
            tax:0,
            total:0}


    componentDidMount(){
        this.setProducts()
    }       

    setProducts=()=>{
        let tempProducts=[];
        storeProducts.forEach((item)=>{
            const singleItem={...item};
            tempProducts=[...tempProducts,singleItem]
        })
        this.setState(()=>{
            return {productList:tempProducts}
        })
    }

    getItem=(id)=>{
        const productItem=this.state.productList.find(item=>item.id===id);

        return productItem;
    }

    handleDetails=(id)=>{
        console.log(`HandleDetail:${id}`);
        
      const productSelected=this.getItem(id);
      this.setState(()=>{
          return{detailProduct:productSelected};
      });
        
    }

    searchProduct=(text)=>{
            if(text){
                let tempProductList=[...this.state.productList];
                let shownProduct=tempProductList.filter((item)=>{
                    if(item.title.indexOf(text)!==-1){
                        return item
                    }
                })
                console.log(shownProduct);
                this.setState(()=>{
                    return{productList:shownProduct}
                })
            }else{
                this.setProducts()
            }
    }

    addToCart=(id)=>{
        const productSelected=this.getItem(id);
        productSelected.inCart=true;
        productSelected.count=1;
        productSelected.total=productSelected.price;
        this.setState(()=>{
            return{detailProduct:productSelected, cart:[...this.state.cart,productSelected],openModal:true};
        },()=>{this.addTotal()});
        
    }

    handleModal=()=>{
        this.setState(()=>{
            return {openModal:false}
        })
    }

    plusItem=(id)=>{
        // const productSelected=this.getItem(id);  Through this line we changed the product List item,which inturn is 
        //changing the cart item present too as the cart item are coming from there only.
        const tempProduct=[...this.state.cart];
        const productSelected=tempProduct.find((item)=>item.id===id)
         productSelected.count=productSelected.count+1;
        productSelected.total=productSelected.total+productSelected.price;
        this.setState(()=>{
            return{cart:[...tempProduct]}
        },()=>{this.addTotal()}) //Remember the callback function here. We can use when want to run a function only after 1st one
        console.log(this.state.cart);
        console.log(productSelected);
    }

    minusItem=(id)=>{
        const tempProduct=[...this.state.cart];
        const productSelected=tempProduct.find((item)=>item.id===id)
       
        if(this.state.cart.length==1&&productSelected.count==1){
           
            this.emptyCart()
            
            return;
        }
        
        if(productSelected.count==1){
            this.deleteItem(id);
            return
        }
        productSelected.count=productSelected.count-1;
        productSelected.total=productSelected.total-productSelected.price;
        this.setState(()=>{
            return{cart:[...tempProduct]}
        },()=>{this.addTotal()}) //Remember the callback function here. We can use when want to run a function only after 1st one
        console.log(this.state.cart);
        console.log(productSelected);
        
    }

    addTotal=()=>{
        let subTotal=0;
        this.state.cart.forEach((item)=>{
            subTotal+=item.total;
        })
        let itemTax=subTotal*0.1;
        let tax=parseFloat( itemTax.toFixed(2));
        let itemTotal=subTotal+tax;
        this.setState({
            
                subTotal:subTotal,
                tax:tax,
                total:itemTotal
            
        })
    }

    deleteItem=(id)=>{
     let filteredProductList=   [...this.state.cart].filter((item)=>{
                                            return item.id!==id; });
      this.setState(()=>{
          return{cart:filteredProductList}
      },()=>{this.addTotal()})     
    console.log("deleteItem")                                 
    }

    emptyCart=()=>{
        this.setState(()=>{
            return{cart:[]}
        },()=>{this.addTotal()})
        this.setProducts();
        this.setState({openModal:false})
    }

render(){
    return(
        <ProductContext.Provider value={{...this.state,
                handleDetails:this.handleDetails,
                searchProduct:this.searchProduct,
                addToCart:this.addToCart,
                handleModal:this.handleModal,
                deleteItem:this.deleteItem,
                plusItem:this.plusItem,
                minusItem:this.minusItem,
                emptyCart:this.emptyCart}}
        >
            {this.props.children}
        </ProductContext.Provider>
    )
}
}

const ProductConsumer=ProductContext.Consumer;

export {ProductProvider,ProductConsumer}