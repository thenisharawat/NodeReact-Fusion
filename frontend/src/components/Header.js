import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
function Header() {
  const auth=localStorage.getItem("user")
  const navigate=useNavigate()
  function Logout()
  {
    localStorage.clear()
    navigate('/Signup')
  }
  return (
    <div>
      {auth?<ul className='navlink'>
        <li><Link to="/">Products</Link></li>
        <li><Link to="/Add">Add Products</Link></li>
        <li><Link to="/Updateprod">Update Products</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link to="/Logout" onClick={Logout}>Logout ({JSON.parse(auth).name})</Link></li>
      </ul>
      :<ul className='navlink'>
      <li><Link to="/Signup">Sign Up</Link></li>
      <li><Link to="/Login">Login</Link></li>
      </ul>}
    </div>
  )
}

export default Header
