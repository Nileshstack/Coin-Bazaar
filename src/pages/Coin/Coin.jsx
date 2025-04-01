import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { Coincontext } from '../../context/Coincontext';
import Linechart from '../../components/Linechart/Linechart';
const Coin = () => {
  const {coinId} =useParams();
  const[data, setData]=useState();
  const[hisdata, setHisdata]=useState();
  const{currency}=useContext(Coincontext);

  const fetchcoda= async()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-DKjpmzNTY2HV5UBGAHJawvuE'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.error(err));
  }

  const fetcghisdata= async()=>{
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-DKjpmzNTY2HV5UBGAHJawvuE'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=15&interval=daily`, options)
      .then(res => res.json())
      .then(res => setHisdata(res))
      .catch(err => console.error(err));
  }


  useEffect(()=>{
    fetchcoda();
    fetcghisdata();
  },[currency])


 if(data && hisdata){
  return (
    <div className='coin'>
     <div className='coinname'>
      <img src={data.image.large} alt="" />
      <p><b>{data.name} ({data.symbol.toUpperCase()})</b></p>
     </div>
     <div className='coinchart'>
      <Linechart hisdata={hisdata}/>
     </div>

     <div className="coininfo">
      <ul>
        <li>Crypto Market rank</li>
        <li>{data.market_cap_rank}</li>
      </ul>
      <ul>
        <li>Current Price</li>
        <li>{currency.symbol} {data.market_data.current_price[currency.name].toLocaleString()}</li>
      </ul>
      <ul>
        <li>Market Cap</li>
        <li>{currency.symbol} {data.market_data.market_cap[currency.name].toLocaleString()}</li>
      </ul>
      <ul>
        <li>24 hour High</li>
        <li>{currency.symbol} {data.market_data.high_24h[currency.name].toLocaleString()}</li>
      </ul>
      <ul>
        <li>24 hour Low</li>
        <li>{currency.symbol} {data.market_data.low_24h[currency.name].toLocaleString()}</li>
      </ul>
     </div>


    </div>
  )
 }
 else{
  return (
    <div className="spinner">
      <div className="spin"></div>
    </div>
  );

 }
}

export default Coin
