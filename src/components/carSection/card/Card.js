import React, {useContext, useEffect, useState} from 'react';
import Styles from "./card.module.scss"
import engine from "../../../images/engine.png"
import transmits from "../../../images/transmis.png"
import wheelImg from "../../../images/wheel.png"
import run from "../../../images/run.png"
import {UserContext} from "../../../context/dataContext";
import axios from "axios";
import Media from "./mediaCard.module.css"

const Card = ({
                  fuel_type_id,
                  right_wheel,
                  car_run_km,
                  price,
                  views,
                  customsPassed,
                  carId,
                  photo,
                  manName,
                  facturers,
                  manId,
                  modelName
              }) => {
    const fuels = {
        2: "ბენზინი",
        3: "დიზელი",
        5: "გაზი/ბენზინი",
        6: "ჰიბრიდი",
        7: "ელექტრო",
        10: "დატენვადი ჰიბრიდი",
        12: "წყალბადი",
        8: "ბუნებრივი გაზი",
        9: "თხევადი გაზი",
        11: "ჰიბრიდი"
    }
    const driveType = {
        1: "წინა", 2: "უკანა", 3: "4x4", 4: "4x2", 5: "6x4", 6: "8x4",
    }

    const wheel = {
        1: "მარჯვენა",
        0: "მარცხენა"
    }


    return (
        <div>
            <div className={Styles.parent}>
                <div className={Styles.parent__content}>
                    <div>
                        <img className={Styles.parent__image}
                             src={`https://static.my.ge/myauto/photos/${photo}/thumbs/${carId}_1.jpg`}
                        />
                    </div>
                    <div className={Styles.parent__middleContent}>
                        <div>{manName} {modelName}<span>2013 წ</span></div>
                        <div>
                            <div className="d-flex">
                                <div className={Styles.parent__middleContent__optionLines}><img src={engine}/> <span
                                    className={Styles.parent__middleContent__option}>{fuels[fuel_type_id]}</span></div>
                                <div><img src={run}/> <span
                                    className={Styles.parent__middleContent__option}>{car_run_km}</span></div>
                            </div>
                            <div className="d-flex">
                                <div className={Styles.parent__middleContent__optionLines}><img src={transmits}/><span
                                    className={Styles.parent__middleContent__option}>ავტომატიკა </span></div>
                                <div className={Styles.parent__middleContent__optionLines}><img src={wheelImg}/> <span
                                    className={Styles.parent__middleContent__option}>{wheel[right_wheel]} </span></div>
                            </div>
                        </div>
                        <div>
                            <span className={Styles.parent__middleContent__views}>{views} ნახვა • 2 დღის წინ</span>
                        </div>
                    </div>
                    <div className={Styles.rightInfoContainer}>
                        <div className={Styles.parent__rightInfoParent}>
                            <div style={{marginRight: "10px"}}
                                 className={Styles.parent__rightInfoParent__info}>{customsPassed ? "განბაჟებული" : "განუბაჟებელი"}
                            </div>
                            <div className={Styles.parent__rightInfoParent__info}>თბილისი</div>
                        </div>
                        <div className={Styles.parent__rightInfoParent__price}>
                            <div className={Styles.parent__rightInfoParent__price__value}>{price}</div>
                            <span className={Styles.parent__rightInfoParent__price__currency}>₾</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default Card;