import Card from "../card/Card";
import {useEffect, useState} from "react";
import axios from "axios";
import Styles from "./carlist.module.scss"
import {fetchData} from "../../../utils/apiFetchers";

const CarList = ({data, setData, facturers, products, setProducts}) => {
    const [mans, setMans] = useState({})

    useEffect(() => {
        const url = `https://api2.myauto.ge/ka/products?ForRent=${data.forRent}&Mans=${data.man_id}&Cats=${data.cat_Id}&PriceFrom=${data.minPrice}&PriceTo=${data.maxPrice}&Period=${data?.period}&SortOrder=${data?.sortOrder}`
        axios.get(url).then(res => {
            const data = res.data
            setProducts(data?.data?.items)
        }).catch(err => console.log(err))
    }, [data])

    useEffect(() => {
        fetchData("https://static.my.ge/myauto/js/mans.json", setMans)
    }, [data])


    if (products === null) {
        return null
    } else {
        products.forEach((product) => {
            mans?.forEach((man) => {
                if (+man.man_id === +product.man_id) {
                    product.man_name = man.man_name
                }
            })
        })

        const timeSorting = (e) => {
            setData({...data, period: e.target.value})
        }
        const dateSorting = (e) => {
            setData({...data, sortOrder: e.target.value})
        }
        return (<div className="col-md-8 col-lg-9 col-sm-none">
            <div className={Styles.parent}>
                <div>
                    <select onChange={(e) => timeSorting(e)} className={Styles.select} defaultValue="none">
                        <option value={"1h"}>ბოლო 1 საათი</option>
                        <option value={"2h"}>ბოლო 2 საათი</option>
                        <option value={"3h"}>ბოლო 3 საათი</option>
                        <option value={"1d"}>ბოლო 1 დღე</option>
                        <option value={"2d"}>ბოლო 2 დღე</option>
                        <option value={"3d"}>ბოლო 3 დღე</option>
                        <option value={"1w"}>ბოლო 1 კვირა</option>
                        <option value={"2w"}>ბოლო 2 კვირა</option>
                        <option value={"3w"}>ბოლო 3 კვირა</option>
                    </select>
                </div>
                <div>
                    <select onChange={(e) => dateSorting(e)} className={Styles.select} defaultValue="none">
                        <option value={1}>თარიღი ზრდადი</option>
                        <option value={2}>თარიღი კლებადი</option>
                        <option value={3}>ფასი ზრდადი</option>
                        <option value={4}>ფასი კლებადი</option>
                        <option value={5}>გარბენი ზრდადი</option>
                        <option value={6}>გარბენი კლებადი</option>
                    </select>
                </div>
            </div>
            {products.map((el) => {
                return <Card id={el.car_id} data={data} products={products}
                             manName={el.man_name}
                             year={el.prod_year}
                             manId={el.man_id}
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