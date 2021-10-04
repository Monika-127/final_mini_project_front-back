import React,{useEffect,useState} from 'react';
import axios from 'axios'
import {Link,useHistory} from 'react-router-dom'
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider"
import { getBasketTotal } from './reducer';
// import CurrencyFormat from "react-currency-format";
import {Order} from './Order'

//function ProceedToCheckout({img, title, price, desc, id}) {
    export class TestOrder extends React.Component{
    //const [{basket}, dispatch] = useStateValue();
  constructor(){
        firstname:"monika",
        Lastname:"salunkhe",
        phone:"1",
        email : "2",
        address:"3",
        State:"4",
        zipcode : "5",
        City:"7",
        Total:0,
        NumOfItems:""


    }
    /*
    const changeFirstname=(event)=>{
     
        setState({
            firstname:event.target.value
        })
    }*/
   changeLastname=(event)=>{
        setState({
            Lastname:event.target.value
        })
    }
     changePhone=(event)=>{
        setState({
            phone:event.target.value
        })
    }
     changeEmail=(event)=>{
        setState({
           email:event.target.value
        })
    }
    changeAddress=(event)=>{
        setState({
            address:event.target.value
        })
    }
    changeCity=(event)=>{
        setState({
            Citye:event.target.value
        })
    }
    changeState=(event)=>{
        setState({
            State:event.target.value
        })
    }
    changeZipCode=(event)=>{
        setState({
            zipcode:event.target.value
        })
    }
    handlClick=(event)=>{
       const collectedDetail={
        firstname:state.firstname,
        Lastname:state.Lastname,
        email:state.email,
        phone:state.phone,
        City:state.City,
        State:state.State,
        zipcode:state.zipcode,
        address:state.address

    }
    console.log(collectedDetail);
    axios.post('http://localhost:4000/app/order',collectedDetail)
    .then(alert("your data is successfully stored! Thank you"));
}
    
    render

    return (
        <div>
            <div className="py-3 bg-warning"> 
                <div className="container"> 
                    <h6>Home / Checkout</h6>
                </div>
            </div>    
       
I           <div className="py-4">
                <div className="container">
                    <div className="row">
                          
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Basic Information</h4>
                                </div>
                            <div className="card-body">
                            
                                <div className="row">
                                    <div className="col-md-6">                           
                                      
                                        <div classame="form-group mb-3"> 
                                            <label> First Name</label>
                                            <input type="text" name="firstname" onChange={event=>{setState(event.target.value)}}  value={state.firstname}className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Last Name</label>
                                            <input type="text" name="Lastname" onChange={changeLastname} value={state.Lastname} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Phone Number</label>
                                            <input type="text" name="phone" onChange={changePhone} value={state.phone}className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Email Address</label>
                                            <input type="text" name="email" onChange={changeEmail} value={state.email} className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Full Address</label>
                                            <textarea rows="3" name="address" onChange={changeAddress} value={state.address} className="form-control" ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-4">                           
                                        <div classame="form-group mb-3"> 
                                            <label> City</label>
                                            <input type="text" name="City" onChange={changeCity} value={state.City}className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">                           
                                        <div classame="form-group mb-3"> 
                                            <label> State</label>
                                            <input type="text" name="State" onChange={changeState} value={state.State}className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Zip Code</label>
                                            <input type="text" name="zipcode" onChange={changeZipCode} value={state.zipcode}className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-4">                           
                                        <div classame="form-group text-end"> 
                                           <br></br> <button type="button" className="btn btn-primary" onClick={handlClick}>Confirm Order</button>
                                        </div>
                                    </div>
                                </div>
                           
                            </div>   
                        </div>
                       
                        </div> 
                        <div className="col-md-4">
                            <div className="card">
                            <div className="card-header">
                                    <h4>Order Summery</h4>
                                </div>
                        <CurrencyFormat 
                        renderText = {(value) => (
                    <>
                        <p>
                   
                    order date:    {Date()}<br></br><br></br>
                    Total Items:   {basket.length}<br></br><br></br>
                    Order Total  : <strong>{`${value}`}</strong><br></br><br></br>
                    Payment Method:  Cash on Delivery<br></br><br></br>
                    <div className="col-md-12">                           
                                        <div classame="form-group text-end"> 
                                        <Nav.Link as={Link} to="/Order" className="btn btn-primary">Confirm order</Nav.Link>
                                          
                                        </div>
                                    </div>
                        </p>
                        {/* <small className="subtotal__gift">
                            <input type="checkbox"/> 
                        </small> */}
                    </>
                )}
                // decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'Rs.'} 
            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div> 
                  
    )


}

export default ProceedToCheckout;