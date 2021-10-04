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
function ProceedToCheckout({img, title, price, desc, id}) {
    const [{basket}, dispatch] = useStateValue();
    let [onOff, setOnOff] = React.useState(true);
    const [orderid,setOrderid]=useState(null);
    useEffect(()=>{
        const{email}=state;
        axios.get('http://localhost:4000/app/getId/'+email).then(response=>{
            setOrderid(response.data)
          // alert("your data: "+response.data)
        })
        .catch(e=>{
            console.log(e);
        })
    }, [onOff])

    const [state , setState] = useState({
        firstname:"",
        Lastname:"",
        phone:"",
        email : "",
        address:"",
        State:"",
        zipcode : "",
        City:"",
        Total:0,
        NumOfItems:""
       
      


    })
    let name,value;
const handleInputs=(e)=>{
console.log(e)
name=e.target.name;
value=e.target.value;
setState({...state,[name]:value});

}
    
    const handlClick=(e)=>{
       e.preventDefault();
        const{
        firstname,
        Lastname,
        email,
        phone,
        City,
        State,
        zipcode,
        address

    }=state;
   const Total=getBasketTotal(basket);
   console.log( firstname+
    Lastname+
    email+
    phone+
    City+
    State+
    zipcode+
    address+Total);
    axios.post('http://localhost:4000/app/order',{ firstname,
    Lastname,
    email,
    phone,
    City,
    State,
    zipcode,
    address,
    Total:getBasketTotal(basket),
    NumOfItems:basket.length

   
    })
    .then(alert("your data is successfully stored! Thank you"));
}

    

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
                                            <input type="text" name="firstname" onChange={handleInputs}  value={state.firstname}className="form-control" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Last Name</label>
                                            <input type="text" name="Lastname" onChange={handleInputs} value={state.Lastname} className="form-control" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Phone Number</label>
                                            <input type="text" name="phone" onChange={handleInputs} value={state.phone}className="form-control" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Email Address</label>
                                            <input type="text" name="email" onChange={handleInputs} value={state.email} className="form-control" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Full Address</label>
                                            <textarea rows="3" name="address" onChange={handleInputs} value={state.address} className="form-control" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-4">                           
                                        <div classame="form-group mb-3"> 
                                            <label> City</label>
                                            <input type="text" name="City" onChange={handleInputs} value={state.City}className="form-control" required="true"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">                           
                                        <div classame="form-group mb-3"> 
                                            <label> State</label>
                                            <input type="text" name="State" onChange={handleInputs} value={state.State}className="form-control" required/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">                           
                                        <div classame="form-group mb-3"> 
                                            <label> Zip Code</label>
                                            <input type="text" name="zipcode" onChange={handleInputs} value={state.zipcode}className="form-control" required/>
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
                   order id: {orderid}<br></br><br></br>
                    order date:    {Date()}<br></br><br></br>
                    Total Items:   {basket.length}<br></br><br></br>
                    Order Total  : <strong>{`${value}`}</strong><br></br><br></br>
                    Payment Method:  Cash on Delivery <br></br><br></br>
                    <div className="col-md-12 text-center">                           
                    <div classame="form-group text-end ">
                                        <button onClick={()=>setOnOff(!onOff)} className="btn btn-primary">Track Id</button>
                                        </div>
                                        <div classame="form-group text-center"> 
                                        <br></br> <Nav.Link as={Link} to="/Order" /*onClick={handleId}*/ className="btn btn-primary">Confirm order</Nav.Link>
                                         
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