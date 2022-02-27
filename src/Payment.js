import React from 'react';
import Checkoutproduct from './Checkoutproduct';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";


const Payment = () => {
    
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className='payment__container'>

            <h1>
                Checkout 
                {<Link to="/checkout">{basket?.length} items</Link>
                }
                </h1>




                   {/* Payment Section Delivery address */}

                <div className='payment__section'>
                    <div className='payment__tittle'>
                        <h3>Delivery Adrress</h3>

                    </div>

                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                     
                    </div>
                </div>

              {/* Payment Section Review item */}
                <div className='payment__section'>
                    <div className="payment__tittle">
                      <h3>Review item and delivery</h3>
                    </div>
                    <div className="payment__items">
                        
                             {basket.map((item) => (
                                <Checkoutproduct
                                  id={item.id}
                                  title={item.title}
                                  image={item.image}
                                  rating={item.rating}
                                 price={item.price}
                                />
                              ))}
                        
                    </div>
                    </div>



                   {/* Payment Section Payment Method */}


                    <div className='payment__section'>
                        <div className="payment__tittle">
                            <h3>Payment Method</h3>
                        </div>
                        <div className="payment__details">

                        </div>
                    
                    </div>

            </div>
            
        </div>
    );
};

export default Payment;