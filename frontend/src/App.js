
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import Private from './components/Private';
import Addproduct from './components/Addproduct';
import Productlist from './components/Productlist';
import Updateprod from './components/Updateprod';
import Profile from './components/Profile';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route element={<Private/>}>
      <Route path="/" element={<Productlist/>}/>
      <Route path="/Add" element={<Addproduct/>}/>
      <Route path="/Updateprod" element={<Updateprod/>}/>
      
      <Route path="/Profile" element={<Profile/>}/>
      </Route>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
     </Routes>
     
     </BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;
