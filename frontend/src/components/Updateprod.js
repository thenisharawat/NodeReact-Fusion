import React,{useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Updateprod() {
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [company,setCompany]=useState("")
    const location=useLocation()
    const navigate=useNavigate()
    useEffect(()=>{
        console.log(location.state)
        getproductdetails()
    },[])
    async function getproductdetails()
    {
        let result=await fetch(`http://localhost:5105/product/${location.state}`)
        result=await result.json()
        console.log(result)
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
     
    }
    async function updateproduct()
    {
        console.log(name,price,category,company)
      
       let result=await fetch(`http://localhost:5105/product/${location.state}`,{
        method:"Put",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify({name,price,category,company})
        
       })
       result=await result.json()
       console.log(result)
       navigate('/')
    }
  return (
    <div>
      <h1>Update Product</h1>
      <input type='text' className='inputbox' placeholder='Enter Product Name' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
      <input type='text' className='inputbox' placeholder='Enter Product Price' value={price} onChange={(e)=>setPrice(e.target.value)}/><br/><br/>
      <input type='text' className='inputbox' placeholder='Enter Product Category' value={category} onChange={(e)=>setCategory(e.target.value)}/><br/><br/>
      <input type='text' className='inputbox' placeholder='Enter Product Company' value={company} onChange={(e)=>setCompany(e.target.value)}/><br/><br/>
      <button onClick={updateproduct}>Update Product</button>
    </div>
  )
}

export default Updateprod
