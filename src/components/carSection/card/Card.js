import Styles from "./card.module.scss"
import engine from "../../../images/engine.png"
import transmits from "../../../images/transmis.png"
import wheelImg from "../../../images/wheel.png"
import run from "../../../images/run.png"
import {wheel, fuels} from "../../../utils/helperDatas";

const Card = ({
                  fuel_type_id,
                  right_wheel,
                  year,
                  car_run_km,
                  price,
                  views,
                  customsPassed,
                  carId,
                  photo,
                  manName,
                  data,
                  id
              }) => {

    return (<div key={id}>
        <div className={Styles.parent}>
            <div className={Styles.parent__content}>
                {/*media Remake*/}
                <div className={Styles.mediaTiTleList}>
                    <div className={Styles.mediaTiTleList__carName}>{manName}<span> {year} წ</span></div>
                    <div>
                        <div
                            className={Styles.mediaTiTleList__price}>{data.currency === "₾" ? (price * data.currencyRate).toFixed(2) : price.toFixed(2)}
                            <div className={Styles.mediaTiTleList__priceIcon}> {data.currency} </div>
                        </div>
                    </div>
                </div>
                {/*---*/}
                <div>
                    <img alt="carImg" className={Styles.parent__image}
                         src={`https://static.my.ge/myauto/photos/${photo}/thumbs/${carId}_1.jpg`}
                    />
                </div>
                <div className={Styles.parent__middleContent}>
                    <div className={Styles.parent__middleContent__carName}>{manName}<span>{year} წ</span></div>
                    <div>
                        <div className="d-flex">
                            <div className={Styles.parent__middleContent__optionLines}><img alt="engine" src={engine}/> <span
                                className={Styles.parent__middleContent__option}>{fuels[fuel_type_id]}</span></div>
                            <div><img alt="run" src={run}/> <span
                                className={Styles.parent__middleContent__option}>{car_run_km}</span></div>
                        </div>
                        <div className="d-flex">
                            <div className={Styles.parent__middleContent__optionLines}><img alt="transmits" src={transmits}/><span
                                className={Styles.parent__middleContent__option}>ავტომატიკა </span></div>
                            <div className={Styles.parent__middleContent__optionLines}><img alt="wheelType" src={wheelImg}/> <span
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
                        <div
                            className={Styles.parent__rightInfoParent__price__value}>{data.currency === "₾" ? (price * data.currencyRate).toFixed(2) : price.toFixed(2)}</div>
                        <span className={Styles.parent__rightInfoParent__price__currency}>{data.currency}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default Card;