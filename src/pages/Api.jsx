import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Api = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        let url = 'https://fakestoreapi.com/products'
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data);
                setLoading(false);
            })
            .catch((error) =>{
                console.error("There was an error making the request", error);
            });
        const timer = setTimeout(() => {
            setLoading(false);
        }, 10000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            {loading ? <div className='spinner-border text-success' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div> : (
                <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '100px', gap: '20px', justifyContent: 'center'}}>
                    {products.map((product, index) =>(
                        <div key={index} style={{backgroundColor: 'teal', color: 'white', padding: '20px', borderRadius: '20px'}}>
                            <img src={product.image} width={200} height={200} style={{margin: '0px auto', borderRadius: '20px' }}/>
                            <p>{product.price}</p>
                            <p>{product.category}</p>
                            <p>{product.rating.rate}</p>
                            <p>{product.rating.count}</p>
                            <button style={{border: 'none', padding: '15px 30px', borderRadius: '30px'}}>Add to cart</button>
                        </div>
                    ))}
                </div>
            )  }
        </>
    )
}

export default Api