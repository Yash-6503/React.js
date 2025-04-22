import React, { useEffect, useState } from 'react'
import { getProductById } from '../api'
import { useParams } from 'react-router-dom'

function Product() {

    const { id } = useParams();

    const [prod, setProd] = useState({});

    useEffect(() => {
        getProductById(id).then((res) => {
            setProd(res) 
            console.log(res);
        });
    },[])

  return (
    <div className='h-auto py-10 sm:flex sm:h-screen justify-around items-center px-10'>
          <div className="img flex justify-center items-center">
                <img src={prod.image} className='md:w-70 pb-5' alt="" />      
          </div>
          <div className="info md:w-[50%] flex-col gap-5">
              <h1 className='text-2xl font-bold'>{prod.title}</h1>
              {/* <p><strong>Ratings : </strong>{prod.rating.rate}</p> */}
              <p><strong>Price : </strong>&#8377;{prod.price}</p>
              <p><strong>Description : </strong>{prod.description}</p>
              
              <div className="btns text-center px-10 sm:px-0 sm:flex justify-start items-center py-2 gap-4">
                  <p className='w-40 hover:bg-blue-800 py-2 my-2 sm:px-10 sm:py-2 bg-blue-600 text-white font-medium cursor-pointer rounded-2xl'>Buy</p>
                  <p className='w-40 hover:bg-blue-800 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white font-medium cursor-pointer rounded-2xl'>Add to cart</p>
              </div>
          </div>
    </div>
  )
}

export default Product
