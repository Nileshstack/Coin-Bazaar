import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Coincontext } from '../../context/Coincontext'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const {setCurrency} = useContext(Coincontext)

  const currencyHandle =(e)=>{
    switch(e.target.value){
      case "usd":{
        setCurrency({name:"usd", symbol:'$'});
        break;
      }
      case "eur":{
        setCurrency({name:"eur", symbol:'€'});
        break;
      }
      case "inr":{
        setCurrency({name:"inr", symbol:'₹'});
        break;
      }
      default: {
        setCurrency({name:"usd", symbol:'$'});
        break;
      }
    }
  }
  return (
    <div className='navbar'>
     <div className='maker'>
     <Link to={'/'} >
     <img src={logo} alt="" className='logo'/>
     </Link>
     <Link to={'/'} >
     <h1><span>C</span>oin<span>B</span>azaar</h1>
     </Link>
     </div>
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/Feature'><li>Futures</li></Link>
        <Link to='/News'><li>Trending</li></Link>
        <Link to='/Blog'><li>Aboutus</li></Link>
        
      </ul>
      <div className="navright">
        <select onChange={currencyHandle} >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
        <Link to='/Looginn'><button>Sign up</button></Link>
      </div>
    </div>
  )
}

export default Navbar
