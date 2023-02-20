import React from 'react'
import Checkboxcomponent from './Checkboxcomponent'

export default function SupplierCertification({setIsDuns, filters,supplierCert}) {
  console.log("---------------",supplierCert);
  return (
    <div className='Pmain-div'>
    <p>Supplier Certification</p>
     <div className='proSearch'>
        <input type="text" placeholder='Supplier Certificatons...'></input>
     </div>
     {/* <div className='chkbox-main-div'>
        <div className='chkbox-wrap'>
          <div className='chkbox-items'>
            <input type="checkbox" value="DUNS"></input>
            <span className='chkbox-title'>DUNS</span>
          </div>
          <div className='chkbox-items'>
            <input type="checkbox" value="DRS"></input>
            <span className='chkbox-title'>DRS</span>
          </div>
          <div className='chkbox-items'>
            <input type="checkbox" value="BSCI"></input>
            <span className='chkbox-title'>BSCI</span>
          </div>
          <div className='chkbox-items'>
            <input type="checkbox" value="CE"></input>
            <span className='chkbox-title'>CE</span>
          </div>
          <div className='chkbox-items'>
            <input type="checkbox" value="HACCP"></input>
            <span className='chkbox-title'>HACCP</span>
          </div>
        </div>
     </div> */}
     <Checkboxcomponent setIsDuns={setIsDuns} filters={filters}/>
</div>
  )
}
