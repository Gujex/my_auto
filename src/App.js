import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import Header from "./components/header/Header";
import FilterSection from "./components/Filter/filterSection";
import CarList from "./components/carSection/carList/carList"
import {currencyConverter} from "./utils/currencyConvert";
import {fetchData} from "./utils/apiFetchers";
import "./app.css"

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
        fetchData("https://static.my.ge/myauto/js/mans.json", setFactures)
        fetchData("https://api2.myauto.ge/ka/cats/get", setCategories)
        currencyConverter(data, setData)
    }, [])

    return (<>
        <Header/>
        <Container>
            <div  className="row">
                <FilterSection categories={categories.data} facturers={facturers}
                               data={data} setData={setData}/>
                <CarList facturers={facturers} data={data} setData={setData}/>
            </div>
        </Container>
    </>);
};

export default App;