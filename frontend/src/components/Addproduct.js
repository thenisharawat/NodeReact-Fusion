import React, { useState } from 'react'

function Addproduct() {
    const [name,setName]=useState("")
    const [price,setPrice]=useState("")
    const [category,setCategory]=useState("")
    const [company,setCompany]=useState("")
    const [error,setError]=useState(false)
    async function addproduct()
    { 
        const userid=JSON.parse(localStorage.getItem('user',name))
        console.log("userId",name)
        let result=await fetch("http://localhost:5105/add-product",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name,price,category,company,userid})
        })
        result=await result.json()
        console.log(result)
        if(!name||!price||!category||!company)
        {
            setError(true)
            return false
        }
    }
  return (
    <div>
        <h1>Add New Product</h1>
      <input type='text' className='inputbox' placeholder='Enter Product Name' value={name} onChange={(e)=>setName(e.target.value)}/>{error&&!name&&<span style={{marginTop:"0px",marginLeft:"-200px",display:"block",color:"red"}}>Enter Valid Name</span>}<br/><br/>
      <input type='text' className='inputbox' placeholder='Enter Product Price' value={price} onChange={(e)=>setPrice(e.target.value)}/>{error&&!price&&<span style={{marginTop:"0px",marginLeft:"-250px",display:"block",color:"red"}}>Enter Price</span>}<br/><br/>
      <input type='text' className='inputbox' placeholder='Enter Product Category' value={category} onChange={(e)=>setCategory(e.target.value)}/>{error&&!category&&<span style={{marginTop:"0px",marginLeft:"-175px",display:"block",color:"red"}}>Enter Valid Category</span>}<br/><br/>
      <input type='text' className='inputbox' placeholder='Enter Product Company' value={company} onChange={(e)=>setCompany(e.target.value)}/>{error&&!company&&<span style={{marginTop:"0px",marginLeft:"-175px",display:"block",color:"red"}}>Enter Valid Company</span>}<br/><br/>
      <button onClick={addproduct}>Add Product</button>
    </div>
  )
}

export default Addproduct
