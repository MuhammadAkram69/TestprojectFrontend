import React,{useState, useEffect} from 'react'
// import { GoSearch } from "react-icons/go";
// import Categories from './Categories'
import PriceComponent from './PriceComponent'
import MOQcomponent from './MOQcomponent'
// import ProdCertification from './ProdCertification'
import SupplierCertification from './SupplierCertification'
// import ManufacturerLocation from './ManufacturerLocation'
// import StockAvailability from './StockAvailability'
import CategorySearch from './CategorySearch'

export default function Filters({setIsDuns, filters, products}) {
  const [productCert, setProductCert] = useState([])
  const [supplierCert, setSupplierCert] = useState([])
  const [manufacturer, setManufacturer] = useState([])
  const [stockAvailability, setStockAvailability] = useState([])

  useEffect(()=>{
    if(products?.length>0){
      products.map((item)=>{
        if(item?.pro_certification?.length>0){
          setProductCert(item);
        }
        if(item?.supplier_certificationsupplier_certification?.length>0){
          console.log('self cehck')
          setSupplierCert(item);
        }
        if(item?.manufacturer?.length>0){
          setManufacturer(item);
        }
        if(item?.stockregion?.length>0){
          setStockAvailability(item);
      
        }
      })
    }
  },[filters])

  return (
    <div className='main-div'>
        <div className='CatSearch'>
            {/* <input type="text" placeholder='More Categories'></input> */}
            {/* <div className='Categories'> </div> */}
            
            {/* <Categories categories={[{name:"PPE"},{name:"Face Mask"},{name:"Gloves"}]} /> */}
            <CategorySearch/>
            <PriceComponent/>
            <MOQcomponent/>
            {/* <ProdCertification setIsDuns={setIsDuns} filters={filters} productCert={productCert}/> */}
            <SupplierCertification setIsDuns={setIsDuns} filters={filters} supplierCert={supplierCert}/>
            {/* <ManufacturerLocation setIsDuns={setIsDuns} filters={filters}/> */}
            {/* <StockAvailability setIsDuns={setIsDuns} filters={filters}/> */}
            
           </div>
        
    </div>
  )
}
