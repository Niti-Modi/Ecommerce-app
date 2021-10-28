import React, { useEffect } from 'react';
import Product from '../components/Product';

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';




export default function HomeScreen() {
    //get prod list from redux store here
    const dispatch = useDispatch();
    //to get product from redux store we use useselector
    //use selector takes redux state as parameter and from this parameter we just need to get product list
    const productList = useSelector((state) => state.productList);
    
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts());
        
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