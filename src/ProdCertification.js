import React from 'react'
import Checkboxcomponent from './Checkboxcomponent'

export default function ProdCertification() {
  return (
    <div className='Pmain-div'>
        <p>Product Certification</p>
         <div className='proSearch'>
            <input type="text" placeholder='Product Certificatons...'></input>
         </div>
         <Checkboxcomponent valuarray={["BV", "Intertek", "ISO13485"]}/>
    </div>
  )
}
