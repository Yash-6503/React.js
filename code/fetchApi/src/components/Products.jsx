import React, { useEffect, useState } from 'react'
import { getProducts } from '../api'
import { Link } from 'react-router-dom';

function Products() {

    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProducts().then((res) => setProduct(res));
    },[])

  return (
    <div className='md:px-20 py-5'>
        <h1 className='text-center font-extrabold text-3xl'>Products Page</h1>
        <div className='flex justify-around items-center flex-wrap gap-10 py-10'>
              
              {
                  product ? product.map((e, i) => (
                      <Link to={`/product/${e.id}`}>
                          <div key={i} className='w-70 px-8 text-center border py-2 border-gray-300 hover:shadow-2xl'>
                              <div className='flex justify-center items-center'>
                                  <img src={e.image} className='object-fill h-60' alt="" />
                              </div>
                              <div className="info py-2">
                                  <p className='text-md font-medium'>{e.title}</p>
                                  <p><strong>Price : &#8377;</strong>{e.price}</p>
                              </div>

                          </div>
                      
                      </Link>
                  ))
                      : <p> Products not available</p>
              }
        </div>
    </div>
  )
}

export default Products
