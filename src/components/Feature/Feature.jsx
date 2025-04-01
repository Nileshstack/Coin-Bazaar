import React, { useEffect, useState } from 'react'
import './Feature.css'

function Feature() {
        const [feature, setFeature]=useState([]);
        const[inc, setInc]=useState(12);

        const load =()=>{
          setInc(inc+8)
        } 
        const unload=()=>{
          setInc(12)
        }

        const fetchfun=async()=>{
          const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-DKjpmzNTY2HV5UBGAHJawvuE'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/derivatives/exchanges?order=open_interest_btc_decs&per_page=${inc}&page=1`, options)
            .then(res => res.json())
            .then(res =>setFeature(res))
            .catch(err => console.error(err));
        }
        useEffect(()=>{
           fetchfun();
        },[inc])
  return (
    <div className="row my-5 mx-3">
      <div className="head">
        <h1>Futures Simplified <br /> Trade <span>Smarter</span>, Not Harder</h1>
      </div>
    {feature.map((item, index) => (
      <div className="col-md-3" key={index}>
        <div className="card" style={{ width: "18rem", margin: "20px auto" }}>
          <img
            src={
              item.image ||
              "https://assets.coingecko.com/markets/images/466/small/binance_futures.jpg?1706864452"
            }
            className="card-img-top"
            alt={item.name || "No image"}
            style={{ width: "100%", height: "190px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.name || "No Title"}</h5>
            <h6 class="card-text">Best Bits about this..</h6>
          </div>
          <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Rooted in {item.year_established}</b></li>
          <li className="list-group-item"><b>Liquidity of <u> {Math.floor(item.trade_volume_24h_btc).toLocaleString()}</u> in 24Hrs</b></li>
            <li className="list-group-item"><b>{item.number_of_futures_pairs} TradePairs Hub</b></li>
            <li className="list-group-item"><b>CryptoFlow Hub of {Math.floor(item.open_interest_btc).toLocaleString()}</b></li>
          </ul>
          <div className="card-body">
            <a href={item.url || "#"} className="card-link">
            <button type="button" class="btn btn-success"><b>Tap to Visit</b></button>
            </a>
          </div>
        </div>
        
      </div>
      
    ))}
   <div className="wrap">
   <div className="more">
      <button onClick={load}> More</button>
    </div>
   <div className={inc>12?'less':'block'}>
    <button onClick={unload}>Wrap</button>
   </div>
   </div>
  </div>
  )
}

export default Feature
