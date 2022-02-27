import React from 'react';
import './Home.css';
import Product from './Product';


const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img
                className="home_image"
                 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                 
                 <div className="home_row">
                     {/* 2 product */}
                     <Product 
                     id="12321341"
                     tittle='The learn startup' 
                     price={29.99} 
                     image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                     rating={5}
                     />
                     <Product 
                     id="49538094"
                     tittle="Knewood Kmix Stand Mixer for bakin. stylish kitchen mixer with X-brater, Dough Hook and whisk,5 litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
                     />
                   

                 </div>
                 <div className="home_row">
                 <Product 
                    id="4903850"
                    tittle="Samsung LC49RG90SSUXEN 49"
                   rating={3}
                   price={199.99}
                   image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX450_.jpg'
                 />
                 <Product 
                     id="23445930"
                     tittle="Amazon Echo (3rd genaration). stylish kitchen mixer with X-brater, Dough Hook and whisk,5 litre Glass Bowl"
                    price={90.99}
                    rating={4}
                    image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'

                 />
                 <Product 
                     id="49538094"
                     tittle="Knewood Kmix Stand Mixer for bakin. stylish kitchen mixer with X-brater, Dough Hook and whisk,5 litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX450_.jpg'

                 />
                     
                     {/* 3 product */}

                </div>
                <div className="home_row">
                    {/* 1 product */}
                    <Product 
                       id="12321341"
                       tittle='samsung product akks sjdhj sdjsdja sdjsdjas sidhkdh' 
                       price={1094.99} 
                       image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SY400_.jpg'
                       rating={5}

                    />
                     
                    
                </div>

            </div>
            
        </div>
    );
};

export default Home;