import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import { Coincontext } from '../../context/Coincontext'
import { ReactTyped } from "react-typed";
import {Link} from 'react-router-dom'
const Home = () => {

    const {coin, currency} = useContext(Coincontext);
    const [display, setDisplay]=useState([]);
    const[search, setSearch]=useState('');

    const inputh=(e)=>{
        setSearch(e.target.value);
        if(e.target.value===""){
            setDisplay(coin)
        }
    }

    const searchh=async (e)=>{
       e.preventDefault();
      const coins= await coin.filter((item)=>{
        return item.name.toLowerCase().includes(search.toLowerCase())
       })
       setDisplay(coins)
    }


    useEffect(()=>{
        setDisplay(coin);
    },[coin])
  return (
    <div className='home'>
       <div className='hero'>
        <h1>Largest <br /> <span>Crypto</span> Marketplace</h1>
        <p>Welcome to one of the largest Cryptocurrency marketplace. <u>Sign up</u> to explore more about <span><ReactTyped 
                         strings={['Cryptos','Futures','Market Cap']}
                         typeSpeed={100} 
                         backSpeed={90} 
                         loop/> </span>.</p>
        <form onSubmit={searchh}>
            <input type="text" onChange={inputh} list={search === '' ? '' : 'coinlist'} value={search} placeholder='Search crypto..' required/>

            <datalist id='coinlist'>
                {
                    coin.map((item,index)=>(<option key={index} value={item.name}/>))
                }
            </datalist>


            <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypyotable">
            <div className="tablelayout">
                <p>Rank</p>
                <p>Coins</p>
                <p>Price</p>
                <p style={{textAlign:"center"}}>24H change</p>
                <p className='market'>Market Cap</p>
            </div>
            {
                display.slice(0,10).map((item, index)=>(
                    <Link to={`/coin/${item.id}`} className="tablelayout" key={index}>
                       <p>{item.market_cap_rank}</p>
                       <div>
                        <img src={item.image} alt="" />
                        <p>{item.name +" - "+ item.symbol}</p>
                       </div>
                       <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                        <p style={{textAlign:"center"}} className={item.price_change_percentage_24h>0?"green":"red"}>{Math.floor(item.price_change_percentage_24h*100)/100}</p>
                        <p className='market'> {currency.symbol}{item.market_cap.toLocaleString()}</p>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Home
