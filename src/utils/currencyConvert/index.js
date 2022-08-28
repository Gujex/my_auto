import axios from "axios";

export function currencyConverter(data, setData) {
    const url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/gel.json?fbclid=IwAR14YaBJKRfmR_N5R0B_JhkCNo--X18KuvpEzruKTD0rbNdPDporrJ2z7ss"
    axios.get(url).then(res => {
        let rate = res.data.gel
        setData({...data, currencyRate: rate})
    }).catch(err => console.log(err))
}