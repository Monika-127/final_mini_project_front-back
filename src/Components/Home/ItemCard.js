import React, { useEffect } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
//import { useHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useCart } from "react-use-cart";
import '../Styling/style.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import axios from 'axios';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {Nav} from 'react-bootstrap';
//import useLocalStorage from "../../hooks/useLocalStorage";
const ItemCard = (props) =>{
    //let history = useHistory();
   const [{ basket }, dispatch] = useStateValue();
  // const [item_stored,setItemStored]=useLocalStorage("cart",JSON.stringify(item_stored));
  /* const [{ basket }, dispatch] = useLocalStorage('item',[{img:props.img,
    title:props.title,
    price:props.price,
    id:props.id,
    desc:props.desc}]);*/
    const [{user}] = useStateValue();
    const auth=getAuth();
   
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                img:props.img,
                title:props.title,
                price:props.price,
                id:props.id,
                desc:props.desc,
            },
        }); 
        if(user){
        const item_stored={
         //   img:props.img,
         email:user.email, id:props.id,
            title:props.title,
            price:props.price,
           
            desc:props.desc
        }
        
      //  localStorage.setItem('cartItems',JSON.stringify(item_stored));
        axios.post('http://localhost:4000/app/StoreCart',item_stored)
        .then(console.log("added"));
    }
    };
    return (
            <div className="col-4" id="itemcard">
               <img src={props.img} width={200} height={200} />
                <div class="card-body">
                    <h5 className="title">{props.title}</h5>
                    <h7 className="price">Rs.{props.price}/-</h7>
                    <h5 className="description">{props.desc}</h5>
                   
                    <Nav.Link as={Link} to={user ? {addToBasket} : '/Login'} onClick={addToBasket} className="btn btn-success">Add To Cart</Nav.Link>
                </div>
            </div>
       
    );
}

export default ItemCard;