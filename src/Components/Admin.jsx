import React from "react";
import {Link,Switch,Route} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
//import {Customers} from './Customers';
import './Styling/Link.css'
import axios from "axios";
import data from "./Home/data";
import 'bootstrap/dist/css/bootstrap.min.css';

export class Admin extends React.Component{
  constructor(){
      super();
      this.state={
          user:[],
          orders:[],
          Sell:[],
          totaluser:0
      }
     this.handleChange=this.handleChange.bind(this);
     this.handleOrder=this.handleOrder.bind(this);
     this.handleSell=this.handleSell.bind(this);
     this.handletotaluser=this.handletotaluser.bind(this);
  }
  //componentDidMount(){
      handleChange(){
    axios.get('http://localhost:4000/app/alluser').then(
        response=>
       // console.log(response.data),
        this.setState({user:response.data})
     //   alert({user})
    ).catch(err=>
        console.log("error: "+err)
    )
  }
  handleOrder(){
    axios.get('http://localhost:4000/app/allOrders').then(
        response=>
       // console.log(response.data),
        this.setState({orders:response.data})
     //   alert({user})
    ).catch(err=>
        console.log("error: "+err)
    )
  }
  handleSell(){
    axios.get('http://localhost:4000/app/allSeller').then(
        response=>
       // console.log(response.data),
        this.setState({Sell:response.data})
     //   alert({user})
    ).catch(err=>
        console.log("error: "+err)
    )
  }
  handletotaluser(){
    axios.get('http://localhost:4000/app/totalOrders').then(
        response=>
       // console.log(response.data),
        this.setState({totaluser:response.data})
     //   alert({user})
    ).catch(err=>
        console.log("error: "+err)
    )
  }
 
    render(){
        const { user } = this.state;
        const {orders}=this.state;
        const {Sell}=this.state;
        const {totaluser}=this.state;
   return <div>
        <div class="btn-group text-center"><button  class = "btn btn-success" onClick={this.handleChange}>Get All Customers</button>
       
        <button class="btn btn-success" onClick={this.handleOrder}>Get All OrderDetail</button>
        <button class="btn btn-success" onClick={this.handleSell}>Get All sellers</button>
        <button class="btn btn-success" onClick={this.handletotaluser}>Get Total orders</button></div>
     <div>
    
         
           

<table class="table">
<tbody>
    
  {user.map(item => (
    <tr>
             <th scope="row">1</th>
     
             
               
               <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
            
        
    </tr> ))} 
    </tbody>
   
</table>

<table class="table">
<tbody>
  {orders.map(item => (
    <tr>
             <th scope="row">1</th>
     
             
               
               <td>id: {item._id}</td>
              <td>firstname: {item.firstname}</td>
              <td>email: {item.email}</td>
              <td>phone: {item.phone}</td>
              <td>Total: {item.Total}</td>
              <td>items: {item.NumOfItems}</td>
              <td>date: {item.date}</td>
            

            
        
    </tr> ))} 
    </tbody>
   
</table>

<table class="table">
<tbody>
  {Sell.map(item => (
    <tr>
             <th scope="row">1</th>
     
             
               
               <td>id: {item._id}</td>
              <td>category: {item.category}</td>
              <td>Title: {item.Title}</td>
              <td>Price: {item.price}</td>
              <td>contact: {item.contact}</td>
              <td>date: {item.date}</td>
            
        
    </tr> ))} 
    </tbody>
   
</table>
<table>
    
</table>
<table class="table">
<tbody>
    
  
    <tr>
             <th scope="row">1</th>
     
             
               
             
              <td>Total orders: {totaluser}</td>
            
            
        
    </tr> 
    </tbody>
   
</table>
     </div>
    </div>
   }
}
export default Admin;