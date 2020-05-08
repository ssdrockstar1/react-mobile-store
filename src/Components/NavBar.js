import React, { Component } from 'react'
import {Navbar,Button,Nav,Form,FormControl} from 'react-bootstrap';
import './CSSFiles/Navbar.css';
import {Link} from 'react-router-dom'
import { ProductConsumer } from './Context';

class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <ProductConsumer>
                    {(value)=>{
                        return(
                        <Navbar bg="dark" variant="primary">
            <Navbar.Brand href="#home"><i className="fa fa-mobile icon" ></i></Navbar.Brand>
              <Nav className="mr-auto" >
                <Link to="/"> <Nav.Link  href="/">Home</Nav.Link></Link>
                <Nav.Link href="/details">Features</Nav.Link>
                <Nav.Link href="#pricing">Go to </Nav.Link>
              </Nav>
        <Form inline>
         <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e)=>{value.searchProduct(e.target.value)}} />
        <Link to="/cart"><Button variant="outline-info">My Cart {''}<i class="fa fa-shopping-cart"></i></Button></Link>
        </Form>
        </ Navbar>
                        )
                    }}
        
        </ProductConsumer>
 </div>
        )
    }
}

export default NavBar