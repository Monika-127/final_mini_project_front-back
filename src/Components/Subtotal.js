import React from 'react'
import CurrencyFormat from 'react-currency-format';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useStateValue} from "./StateProvider"
import "./Styling/Subtotal.css";
import { getBasketTotal } from './reducer';
// import CurrencyFormat from "react-currency-format";
import {Nav} from 'react-bootstrap';
import {Link,useHistory} from 'react-router-dom'
import ProceedToCheckout from './ProceedToCheckout';
import Login from './Login';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    const [{user}] = useStateValue();
    const auth=getAuth();

    return (
        <div className="subtotal">
            {/* price */}

            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                    (Subtotal {basket.length} items ) : <strong>{`${value}`}</strong>
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
           
           <Nav.Link as={Link} to={user ? "/ProceedToCheckout" : '/Login'} className="btn btn-primary">proceed to checkout</Nav.Link>{/*<button>Proceed to checkout</button>*/}
        </div>
    )
}

export default Subtotal
