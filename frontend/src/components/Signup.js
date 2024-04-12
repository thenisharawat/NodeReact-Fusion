import React, { useEffect, useState } from 'react'
import './Signup.css';
import {useNavigate} from 'react-router-dom'
function Signup() {

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  const [error, setError] = useState(false)

    const navigate=useNavigate()
    async function collectinfo()
    {
        console.log(name,email,password)
        let result=await fetch("http://localhost:5105/register",{
          method:"post",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({name,email,password})
        })
        result=await result.json()
        console.warn(result)
        if(!name||!email||!password)
        {
            setError(true)
            return false
        }
        if(result)
        {
          localStorage.setItem("user",JSON.stringify(result))
          navigate('/')
        }
       
        // navigate('/')
    }
    useEffect(()=>{
      const auth=localStorage.getItem("user")
      if(auth)
      {
        navigate('/')
      }
    })
  return (

    <div>
      <h1>Sign Up</h1>

      <input type='text' className="inputbox" value={name} placeholder='Enter name'
        onChange={(e) => setName(e.target.value)} />{error && !name && <span style={{ marginTop: "0px", marginLeft: "-200px", display: "block", color: "red" }}>Enter Valid Name</span>}<br /><br />

      <input type='email' className="inputbox" value={email} placeholder='Enter email'
      onChange={(e)=>setEmail(e.target.value)}/>{error&&!email&&<span style={{marginTop:"0px",marginLeft:"-200px",display:"block",color:"red"}}>Enter Valid Email</span>}<br/><br/>
      <input type='password' className="inputbox" value={password} placeholder='Enter password'

      onChange={(e)=>setPassword(e.target.value)}/>{error&&!password&&<span style={{marginTop:"0px",marginLeft:"-200px",display:"block",color:"red"}}>Enter Valid Password</span>}<br/><br/>
     
      <button onClick={collectinfo}>Sign Up</button>

    </div>
  )
}

export default Signup
