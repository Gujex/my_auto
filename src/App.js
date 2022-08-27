import React, {useContext, useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import Header from "./components/header/Header";
import FilterSection from "./components/Filter/filterSection";
import CarList from "./components/carSection/carList/carList"
import {UserContext} from "./context/dataContext";
import axios from "axios";


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
    })


    useEffect(() => {
        const URL = "https://static.my.ge/myauto/js/mans.json"
        axios.get(URL).then(res => {
            const data = res.data
            setFactures(data)
        }).catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const URL = "https://api2.myauto.ge/ka/cats/get"
        axios.get(URL).then(res => {
            const categories = res.data
            setCategories(categories.data)
        })
    }, [])



    return (
        <>
            <Header/>
            <Container>
                <div className="row">
                    <UserContext.Provider value={data, setData}>
                        <FilterSection setCategories={setCategories} categories={categories} facturers={facturers}
                                       setFactures={setFactures} data={data} setData={setData}/>
                        <CarList facturers={facturers} data={data} setData={setData}/>
                    </UserContext.Provider>
                </div>
            </Container>
        </>
    );
};


export default App;