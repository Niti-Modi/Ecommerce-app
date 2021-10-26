import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

//import data from '../data';



export default function HomeScreen() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {


            try {
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProducts(data);
            //setproducts sets all the data to products
            }
            catch (err) {
              
                setError(err.message);
                setLoading(false);

            }


           
        };
        fetchData();
    }, []);


    //here using products we fetch wach products.
    // here in render if products are loading render loading box component.
    // else if there is any error, render error component
    //and if there is no loading and no error render other components
    //we deifine loading box component and messagebox component in another screen.
    return (
        <div>

            {loading ?
                (<LoadingBox></LoadingBox>
                ) : error ? (

                    

                    <MessageBox variant="danger">{error}</MessageBox>
                    //here {error} is a children of MessageBox 
                    ) : (                      

                        <div className="row center">

                            {products.map((product) => (
                                <Product key={product._id} product={product}></Product>
                            ))}
                        </div>
                        
                        
                        )
                
                
                
                
                }


        </div>
    );
}