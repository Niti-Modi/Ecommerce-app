import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

export default function ProductScreen(props) {
    //based on screen design we create 3 columns within one row.
    //find is an array function that finds an element based on the criterion that we define.
    //here we are searching for x._id which is the id for inside products array and comparing it with props.match.params.id
    //props.match.params.id = the value that user enter in id in route path="/product/:id" in URL
    // we compare this value with items in products array


    //so in product we basically get the product obj based on id.
    const product = data.products.find( (x) => x._id === props.match.params.id);
    if (!product) {

        return <div>Product not found</div>;
    }
    //if product is available return that product
    return (
    
        <div>

            <Link to="/">Back to results</Link>

        <div className= "row top" >
            <div className="col-2">

                <img className="large" src={product.image} alt={ product.name }></img>

            </div>
            <div className="col-1">

                <ul>
                    <li>
                        <h1>{ product.name}</h1>

                    </li>

                    <li>
                        price: ${ product.price}

                    </li>


                </ul>

            </div>
            <div className="col-1">
                <ul>
                    <li>
                        <div className="row">
                            <div>Price</div>
                            <div className="price">${product.price}</div>
                        </div>
                           

                    </li>

                    <li>
                        <div className="row">
                            <div>  Status </div>
                            <div>

                                {
                                    product.countInStock > 0

                                        ?
                                        (<span className="success">In stock</span>)
                                         :
                                        (<span className="danger">Unavailable</span>)

                                }

                            </div>


                        </div>

                    </li>
                    <li>
                        <button className="primary block">Add to Cart</button>
                    </li>

                </ul>




            </div>
        

        </div>


        </div>

    );
}