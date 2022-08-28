import axios from "axios";

export const fetchData = (url, setData) => {
    axios.get(url).then(res => {
        const data = res.data
        setData(data)
    }).catch(err => console.log(err))
}