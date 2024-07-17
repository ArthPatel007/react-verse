import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/INR`)
        .then(response => response.json())
        .then(data => {
          // Handle the data from the API here
          console.log(data);
        })
        .catch(error => {
          // Handle any errors here
          console.error('Error fetching currency data:', error);
        });
        
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;


