import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'
const Linechart = ({hisdata}) => {

    const[data, setData]=useState([["Date","Prices"]])
    useEffect(()=>{
         let dataCopy=[["Date","Prices"]];
         if(hisdata.prices){
            hisdata.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            setData(dataCopy)
         }
    },[hisdata])

  return (
   <Chart
   chartType='LineChart'
   data={data}
   height="100%"
   legendToggle
   />
  )
}

export default Linechart
