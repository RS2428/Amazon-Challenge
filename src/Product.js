import React from 'react';
import './product.css'
import { useStateValue } from './StateProvider';

const Product = ({id,title, image, price, rating}) => {
    const [{basket}, dispatch] = useStateValue();
    
    console.log("THis is absket ----->",basket);

    const addToBasket = () => {
        //dispatch the data item
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating
            }
          });
        };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>

                    ))
                    }
               
                 
                </div>
            </div>
            <img src={image} alt={title} />
            {/* <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="" /> */}
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
};

export default Product;