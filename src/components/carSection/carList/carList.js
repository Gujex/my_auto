import React from 'react';
import Card from "../card/Card";
import {useEffect, useState} from "react";
import axios from "axios";

const CarList = ({data, setDat, facturers}) => {

    const [products, setProducts] = useState(null)
    useEffect(() => {
        const url = `https://api2.myauto.ge/ka/products?ForRent=${data.forRent}&Mans=${data.man_id}&Cats=${data.cat_Id}&PriceFrom=${data.minPrice}&PriceTo=${data.maxPrice}`
        axios.get(url).then(res => {
            const data = res.data
            setProducts(data)
            console.log(url)
        }).catch(err => console.log(err))

        console.log("hahahah", data.cat_Id)
    }, [data])


    if (products?.data?.items === null) {
        return <div>Loading</div>
    } else {
        return (<div className="col-md-9 col-lg-9">
            {products?.data?.items.map((el) => {
                console.log('----==========',facturers.filter(he => he.man_id === el.man_id))
                return <Card manId={el.man_id} facturers={facturers}  fuel_type_id={el?.fuel_type_id} right_wheel={el?.right_wheel ? 1 : 0}
                             car_run_km={el?.car_run_km}
                             price={el.price} views={el.views} customsPassed={el?.customs_passed} carId={el?.car_id} photo={el?.photo}/>
            })}
        </div>);
    }


}

export default CarList;