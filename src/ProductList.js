import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UseFetchData from './UseFetchData';
import { ProductContext } from './ProductContextProvider';

export default function ProductList({products, isDuns}) {
  const [isFilter, setIsFilter] = useState(false)
  // console.log('product list list: ', isDuns)


  const checkIsFilter = () =>{
    for(let i=0; i<isDuns?.length; i++){
      if(isDuns[i]?.isChecked){
        return true;
      }
    }
    return false;
  }
 
  if(!products) return <div>Loading</div>

  return (
    <div>
      <div className="products-con">
        {/* {checkIsFilter()} */}
        {checkIsFilter()? isDuns?.map((product)=>{
          if(product.isChecked){
            if(!isFilter ){
              setIsFilter(true)
            }
            return (
              <div className="product-items" key={product?.id}>
                <div className="img-con">
                  <img src={product?.productImage} alt={product?.name} />
                </div>
                <div className="product-details">
                  <p>{product?.title}</p>
                  <p>MOQ: {product?.MOQ}</p>
                  <p>Price: ${product?.price}/BOX</p>
                  <button className="img-btn">Add to Cart</button>
                </div>
              </div>
            )
          }
         
        }): ''}
        {
          !checkIsFilter()? 
          products?.map((product)=>{
            return (
              <div className="product-items" key={product.id}>
                <div className="img-con">
                  <img src={product.productImage} alt={product.name} />
                </div>
                <div className="product-details">
                  <p>{product.title}</p>
                  <p>MOQ: {product.MOQ}</p>
                  <p>Price: ${product.price}/BOX</p>
                  <button className="img-btn">Add to Cart</button>
                </div>
              </div>
            )
          })
          :''

          // if(!isFilter){
//   console.log('else value')
//   return (
//     <div className="product-items" key={product.id}>
//       <div className="img-con">
//         <img src={product.productImage} alt={product.name} />
//       </div>
//       <div className="product-details">
//         <p>{product.title}</p>
//         <p>MOQ: {product.MOQ}</p>
//         <p>Price: ${product.price}/BOX</p>
//         <button className="img-btn">Add to Cart</button>
//       </div>
//     </div>
//   )
// }
        }
      </div>
    </div>
  );
}



