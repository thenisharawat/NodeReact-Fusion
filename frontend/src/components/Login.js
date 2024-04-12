import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    useEffect(()=>{
        const auth=localStorage.getItem("user")
        if(auth)
        {
            navigate("/")
        }
    },[])
    async function userlogin()
    {
        let result=await fetch("http://localhost:5105/login",{
            method:"post",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({email,password})
        })
        result=await result.json()
        if(result.email)
        {
            localStorage.setItem("user",JSON.stringify(result))
            navigate("/")
        }
        else
        {
            alert("Enter correct details")
        }
    }
  return (
    <div>
        <h1>Login Page</h1>
      <input className="inputbox" type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
      <input type='password' className="inputbox" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
      <button onClick={userlogin}>Login</button>
    </div>
  )
}

export default Login
