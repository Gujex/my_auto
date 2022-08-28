import React, { useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import Header from "./components/header/Header";
import FilterSection from "./components/Filter/filterSection";
import CarList from "./components/carSection/carList/carList"
import axios from "axios";
import {currencyConverter} from "./utils/currencyConvert";

const App = () => {
    const [facturers, setFactures] = useState([])
    const [categories, setCategories] = useState([])
    const [data, setData] = useState({
        image: "https://static.my.ge/myauto/photos/4/2/0/6/3/thumbs/76360249_1.jpg?v=1",
        dealType: 0,
        man_id: "",
        cat_Id: "",
        minPrice: "",
        maxPrice: "",
        forRent: false,
        fuelType: "0",
        transmission: "0",
        counter: 0,
        currency: "₾",
        id: Math.random().toString()
    })

    useEffect(() => {
        const URL = "https://static.my.ge/myauto/js/mans.json"
        axios.get(URL).then(res => {
            const data = res.data
            setFactures(data)
        }).catch(err => console.log(err))
        currencyConverter(data, setData)
    }, [])

    useEffect(() => {
        const URL = "https://api2.myauto.ge/ka/cats/get"
        axios.get(URL).then(res => {
            const categories = res.data
            setCategories(categories.data)
        })
    }, [])

    return (<>
            <Header/>
            <Container>
                <div style={{paddingTop: "68px"}} className="row">
                        <FilterSection   categories={categories} facturers={facturers}
                                       data={data} setData={setData}/>
                        <CarList  facturers={facturers} data={data} setData={setData}/>
                </div>
            </Container>
        </>);
};


export default App;