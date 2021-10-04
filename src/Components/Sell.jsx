import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route } from 'react-router-dom'
import img1 from './Images/Logo6.png';
import {Nav} from 'react-bootstrap'
import './Styling/Sell.css';
import axios from 'axios'
export class Sell extends React.Component {
    constructor(){
        super()
        this.state={
            category:'',
            Title:'',
            Description:'',
            price:0,
            contact:''//,
        // imgfile: null
           
        }
        this.changeCategory=this.changeCategory.bind(this)
        this.changeTitle=this.changeTitle.bind(this)
        this.changeDescription=this.changeDescription.bind(this)
        this.changePrice=this.changePrice.bind(this)
        this.changeContact=this.changeContact.bind(this)
      // this.changeFile=this.changeFile.bind(this)
        this.Submitted=this.Submitted.bind(this)
      
     
    }
    changeCategory(event){
        this.setState({
            category:event.target.value
        })
    }
    changeTitle(event){
        this.setState({
            Title:event.target.value
        })
    }
    changeDescription(event){
        this.setState({
            Description:event.target.value
        })
    }
    changePrice(event){
        this.setState({
            price:event.target.value
        })
    } changeContact(event){
        this.setState({
            contact:event.target.value
        })
    }
  /*  changeFile=event=>{
       console.log(event.target.files[0]);
       this.setState({
        imgfile:event.target.files[0]
       })
    }*/
    Submitted(event){
        event.preventDefault()
        const registered={
            category: this.state.category,
            Title: this.state.Title,
            Description:this.state.Description,
            price:this.state.price,
            contact:this.state.contact,
           // imgfile: this.state.imgfile,
            //imgfile:this.state.imgfile.name
        }
       axios.post('http://localhost:4000/app/sell',registered)
     .then(alert("your data is successfully stored! Thank you"))

      
       window.location='/' //to move on home page
      // alert(registered);
      
    }
 

    render() {
        return <div className="sell">
            {/* <h2>This is a Login</h2> */}
                <Nav.Link as={Link} to="/">
                    <img className="sell__logo" src={img1} alt="" />
                </Nav.Link>
            <div className="sell__container">
                <h1>Enter Details</h1>
                <form onSubmit={this.Submitted}>
                    <h5>Category</h5>
                    <input type="text" onChange={this.changeCategory} value={this.state.category} required/>
                    <h5>Add Title</h5>
                    <input type="text" onChange={this.changeTitle} value={this.state.Title} required/>
                    <h5>Description</h5>
                    <input type="text" className="desc" onChange={this.changeDescription} value={this.state.Description} required/>
                    <h5>Set Price</h5>
                    <input type='text' onChange={this.changePrice} value={this.state.price} required/>
                    <h5>Contact Number</h5>
                    <input type='text' onChange={this.changeContact} value={this.state.contact} required/> 
                   {/* <input type="file" onChange={this.changeFile} value={this.state.file}/>*/}
                    <br></br>    
                    <button type="submit" className="submit">Submit</button>
                </form>
            </div>
        </div>

    }
}

export default Sell;