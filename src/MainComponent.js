import React, {useState} from 'react'
import Filters from './Filters'
import ProductList from './ProductList'

export default function MainComponent({products, filters, setFilters}) {
  // const [isDuns, setIsDuns] = useState(false);
  
  return (
    <div className='mainwrapper'>
       <div className="sidefilters">
         <Filters setIsDuns={setFilters} filters={filters} products={products}/>
       </div>
       <div className="productside-column">
          <div className="productsSection">
            <ProductList products = {products} isDuns={filters}/>
          </div>
       </div>
    </div>
  )
}
