import React, {useEffect, useState} from 'react';
import {FaCarSide, FaMotorcycle} from "react-icons/fa";
import {GiFarmTractor} from "react-icons/gi"
import styles from "./filterSection.module.scss"
import axios from "axios";

const FilterSection = ({data, setData, facturers, categories}) => {
    const [forRent, setForRent] = useState(false)
    const [catId, setCatId] = useState("")
    const [manId, setManId] = useState()
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(100000)
    const [products, setProducts] = useState([])

    useEffect(() => {
        const URL = "https://api2.myauto.ge/ka/products/"
        axios.get(URL).then(res => {
            const products = res.data
            setProducts(products.data)
        })
    }, [])

    function sub(e) {
        if (catId.length > 0) {
            setCatId(+catId)
        }
        if (manId > 0) {
            setManId(+manId)
        }
        setData({
            ...data, forRent: forRent, cat_Id: catId, man_id: manId, minPrice: minPrice, maxPrice: maxPrice,
        })
    }

    return (<div key={Math.random()} style={{
        border: "1px solid gray",
        borderRadius: "10px 10px 0 0",
        background: "white",
        boxShadow: "0px 4px 16px 0px #A4AEC11A",
        padding: 0,
    }}
                 className="col-md-4 col-lg-3 col-sm-12 h-50">
        <div style={{borderBottom: "1px solid #E9E9F0"}} className="d-flex justify-content-between ">
            <div className={styles.icons}>
                <FaCarSide color="#FD4100" size={30}/>
            </div>
            <div style={{borderRight: "1px solid #E9E9F0", borderLeft: "1px solid #E9E9F0"}}
                 className={styles.icons}>
                <GiFarmTractor size={30}/>
            </div>
            <div className={styles.icons}>
                <FaMotorcycle size={30}/>
            </div>
        </div>
        <form className={styles.form}>
            <div className={styles.form__selects}>
                <div>
                    <p className={styles.form__selects__p}>გარიგების ტიპი</p>
                    <select defaultValue="none"
                            onChange={(e) => setForRent(e?.target.value)}
                            name="sell" className="form-control" id="exampleFormControlSelect1">
                        <option value={0}>იყიდება</option>
                        <option value={1}>ქირავდება</option>
                    </select>
                </div>
                <div>
                    <p className={styles.form__selects__p}>მწარმოებელი</p>
                    <select onChange={(e) => setManId(e?.target.value)} className="form-control  "
                            id="exampleFormControlSelect1">
                        <option value="">ყველა მწარმოებელი</option>
                        {facturers.map((data, index) => {
                            return <option key={index}  value={data?.man_id}>{data?.man_name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <p className={styles.form__selects__p}>კატეგორია</p>
                    <select onChange={(e) => setCatId(e?.target.value)}
                            className="form-control"
                            id="exampleFormControlSelect1">
                        <option value="">ყველა კატეგორია</option>
                        {categories.map((el, index) => {
                            return <option key={index} value={el?.category_id}>{el.title}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className={styles.form__priceSection}>
                <div>ფასი</div>
                <div className="d-flex">
                    <div onClick={() => setData({...data, currency: "₾"})}
                         className={data.currency == "₾" ? styles.activeCurrency : styles.inActiveCurrency}>₾
                    </div>
                    <div onClick={() => setData({...data, currency: "$"})}
                         className={data.currency == "$" ? styles.activeCurrency : styles.inActiveCurrency}>$
                    </div>
                </div>
            </div>
            <div className={styles.form__priceInputs}>
                <input onChange={(e) => setMinPrice(e?.target.value)} placeholder="დან" type="number"
                       className="form-control"
                       aria-label="Dollar amount (with dot and two decimal places)"/>
                <span className={styles.form__priceInputs__dir}>-</span>
                <input onChange={(e) => setMaxPrice(e?.target.value)} placeholder="მდე" type="number"
                       className="form-control"
                       aria-label="Dollar amount (with dot and two decimal places)"/>
            </div>
        </form>
        <div className={styles.btnParent}>
            <button onClick={() => sub()} type="submit" className={styles.btn}>ძებნა (992893)</button>
        </div>
    </div>);
};

export default FilterSection;