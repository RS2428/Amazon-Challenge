import React from 'react';
import'./Checkout.css';
import Checkoutproduct from './Checkoutproduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';


const Checkout = () => {
    const[{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img 
                className="checkout_ad"
                 src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' 
                 alt="" />
                 <div >
                     <h3>HELLO, {user?.email}</h3>
                     <h2 className="checkout_tittle">Your Shoping Busket</h2>
                    
                    {basket.map(item => (
                        <Checkoutproduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                         />

                    ) )}
                    
                 </div>
            </div>

            <div className="checkout_right">
                <Subtotal/>
                <h2>The Subtotal will go here</h2>
            </div>
            
            
        </div>
    );
};

export default Checkout;