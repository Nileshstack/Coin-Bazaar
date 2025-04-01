import { useEffect, useState } from "react";
import { createContext } from "react";

export const Coincontext = createContext();

const CoincontextProvider = (props) => {
    const [coin, setCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: 'usd',
        symbol:"$"
    })

       const fetchCoin= async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-DKjpmzNTY2HV5UBGAHJawvuE'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(res => res.json())
            .then(res => setCoin(res))
            .catch(err => console.error(err));
       }

       useEffect(()=>{
           fetchCoin();
       },[currency])

    const contextValue = {
      coin, currency, setCurrency
    };

    return (
        <Coincontext.Provider value={contextValue}>
            {props.children}
        </Coincontext.Provider>
    );
};

export default CoincontextProvider;