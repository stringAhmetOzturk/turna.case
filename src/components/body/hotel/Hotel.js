import React from 'react'
import classes from "../../../styles/components/body/Body.module.scss"
import Button from '../../button/Button'
const Hotel = ({hotelname,star,location,content,images}) => {
  return (
    <div>
        <div className={classes.body__details__header}>
        <div className={classes.body__details__header__info}>
            <div className={classes.body__details__header__info__title}>
                <div className={classes.body__details__header__info__title__hotelname}>{hotelname}</div>
                <div className={classes.body__details__header__info__title__hotelstar}>{star}</div>
            </div>
            <div className={classes.body__details__header__info__location}>{location}</div>
        </div>
        <div className={classes.body__details__header__rez}><Button name={"Rezervasyon Yap"}/></div>
        </div>
        <div className={classes.body__details__img}>   
            <img
            src={`${process.env.PUBLIC_URL}/${images}`} alt="hotel"/>
        </div>
        <div className={classes.body__details__content}>
            {content}
        </div>
    </div>
  )
}

export default Hotel
