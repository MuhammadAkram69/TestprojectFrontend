import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainComponent from './MainComponent'
import SearchBarComponent from './SearchBarComponent';

const URL =`http://localhost:4000/products/`

export default function MainContainerComponent() {
    const {id}=useParams();
    // console.log("query parameters",id);

    const [products, setProducts]= useState([]);
    const [filters, setFilters] = useState([]);


    // useEffect(() => {

    //     (async ()=>{
    //         await getData(URL, {category: id})
    //     })();

    // }, [id]);
    useEffect(() => {

        (async ()=>{
            await getData(URL, {manufacturer: id})
        })();

    }, [id]);
  

    useEffect(()=>{
        if(products?.length>0){
            let newProduct = products?.map((item)=>{
                console.log('inside product ')

                if(item?.supplier_certification[0]?.title?.length>0){
                    return ({...item, isChecked: false})
                }
                
            })
            newProduct = newProduct.filter((item)=> item!=undefined)
            setFilters(newProduct)
        }
    },[products])

    async function getData(url , params){
        try{
            const res =await axios.get(url, {params})
            setProducts(res.data.Productlist)
            console.log(res.data)    
        }catch(e){
            console.log(e);
            setProducts([])
            alert("something went wrong");
        }
    }
    console.log('new producct added: ',products)
  return (
    <div className='main-content-wrapper'>
        <SearchBarComponent/>
        <MainComponent products = {products} setFilters={setFilters} filters={filters}/>
    </div>
  )
}
