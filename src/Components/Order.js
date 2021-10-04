import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
export class Order extends React.Component{
constructor(){
    super();
    
}


render(){
    return(
   
 <div class="card mb-3 border-success">
  <div class="card-header  bg-primary"><h5>Order Confirmation</h5></div>
  <div class="card-body bg-light" >
    <h5 class="card-title">Thank you!</h5>
    <p class="card-text">Your order has been placed successfully! It will Delivered within 4-5 working Days!</p>
   
  </div>
</div>
                              
    )
}
}
export default Order;