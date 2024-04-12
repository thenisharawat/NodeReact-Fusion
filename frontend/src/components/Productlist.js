import React, { useEffect, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'


function Productlist() {
    const [products,setProducts]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        getproducts()
    },[])
    async function getproducts()
    {
        let result=await fetch("http://localhost:5105/product")
        result=await result.json()
        setProducts(result)
    }
    async function deleteproduct(_id)
    {
        let result=await fetch(`http://localhost:5105/product/${_id}`,{
            method:"delete"            
        })
        result=await result.json()
        getproducts()
    }
    async function searchprod(event)
    {
        let key = event.target.value
        console.log(key)
        if (key) {
            let result = await fetch(`http://localhost:5105/search/${key}`)
            result = await result.json()
            // setProducts(result)
            console.log(result)
            if (result) {
                setProducts(result)
            }
        }
        else {
            getproducts()
        }
    }
    
    
  return (
    <div className='container'>
        <h2 className='text-primary'>List of Products</h2>
        <input type='search' placeholder='Search Product' className='inputbox' onChange={(event)=>searchprod(event)}/>
      <table className='table table-light table-bordered' align='center'>
        <thead>
            <tr><th>Sr.No.</th><th>NAME</th><th>PRICE</th><th>CATEGORY</th><th>COMPANY</th><th>Operation</th></tr>
        </thead>
        <tbody>
            {
                products.length>0?products.map((item,index)=>{
                    return (
                        <tr key={item._id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td>{item.company}</td>
                            <td><i class="fa-solid fa-trash" onClick={()=>deleteproduct(item._id)}></i>
                            <Link to="/Updateprod" state={item._id}><i class="fa-solid fa-pen-to-square ms-4"></i></Link></td>
                        </tr>
                    )
                })
                :<h1>No result found</h1>
            }
        </tbody>
      </table>
    </div>
  )
}

export default Productlist
