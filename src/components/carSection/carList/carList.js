import React from 'react';
import Card from "../card/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import Styles from "./carlist.module.scss"
const CarList = ({data, setData, facturers}) => {
    const [mans, setMans] = useState({})
    const [models, setModels] = useState({})
    const [products, setProducts] = useState(null)
    // const [miu, setMiu] = useState(null)


    // useEffect(() => {
    //     const url = `https://api2.myauto.ge/ka/getManModels?man_id=${2}`
    //     axios.get(url).then(res => {
    //         const data = res.data
    //         setModels(data.data)
    //     }).catch(err => console.log(err))
    // }, [data])

    useEffect(() => {
        const url = `https://api2.myauto.ge/ka/products?ForRent=${data.forRent}&Mans=${data.man_id}&Cats=${data.cat_Id}&PriceFrom=${data.minPrice}&PriceTo=${data.maxPrice}`
        axios.get(url).then(res => {
            const data = res.data
            setProducts(data?.data?.items)
        }).catch(err => console.log(err))
    }, [data])

    // function go(manid) {
    //     const url = `https://api2.myauto.ge/ka/getManModels?man_id=${manid}`
    //     axios.get(url).then(res => {
    //         const data = res.data
    //         setModels(data.data)
    //     }).catch(err => console.log(err))
    // }

    useEffect(() => {
        const url = "https://static.my.ge/myauto/js/mans.json"
        axios.get(url).then(res => {
            const data = res.data
            setMans(data)
        }).catch(err => console.log(err))

    }, [data])



    if (products === null) {
        return <div>Loading</div>
    } else {

        products.forEach((le) => {
            mans.map((man) => {
                if (man.man_id == le.man_id) {
                    le.man_name = man.man_name
                }
            })
        })

        // products?.forEach((el) => {
        //     models?.map((model) => {
        //         if (model.man_id == el.man_id) {
        //             el.model_name = model.model_name
        //             console.log("--==>>>",el)
        //         }
        //     })
        // })

        return (<div className="col-md-9 col-lg-9 col-sm-12">
            <div className="d-flex">
                <div>
                <select className={Styles.select} defaultValue="none">
                    <option>ბოლო 3 საათი</option>
                    <option>ქირავდება</option>
                    <option>იყიდება</option>
                    <option>ქირავდება</option><option>იყიდება</option>
                    <option>ქირავდება</option><option>იყიდება</option>
                    <option>ქირავდება</option><option>იყიდება</option>
                    <option>ქირავდება</option><option>იყიდება</option>
                    <option>ქირავდება</option><option>იყიდება</option>
                    <option>ქირავდება</option><option>იყიდება</option>
                </select>
                </div>
                <div>
                    <select className={Styles.select} defaultValue="none">
                        <option>თარიღი ზრდადი</option>
                        <option>ქირავდება</option>
                        <option>იყიდება</option>
                        <option>ქირავდება</option><option>იყიდება</option>
                        <option>ქირავდება</option><option>იყიდება</option>
                        <option>ქირავდება</option><option>იყიდება</option>
                        <option>ქირავდება</option><option>იყიდება</option>
                        <option>ქირავდება</option><option>იყიდება</option>
                        <option>ქირავდება</option><option>იყიდება</option>
                    </select>
                </div>
            </div>
            {products.map((el) => {
                // go(el.man_id)
                return <Card products={products} modelName={el?.model_name} manName={el.man_name} manId={el.man_id}
                             facturers={facturers}
                             fuel_type_id={el?.fuel_type_id}
                             right_wheel={el?.right_wheel ? 1 : 0}
                             car_run_km={el?.car_run_km}
                             price={el.price} views={el.views} customsPassed={el?.customs_passed} carId={el?.car_id}
                             photo={el?.photo}/>
            })}
        </div>);
    }


}

export default CarList;