import React from 'react'
import {TiTick} from "react-icons/ti"
import classes from "../../styles/components/feature/Feature.module.scss"
const Feature = ({header}) => {
  return (
    <div className={classes.features}>
        <div className={classes.features__header}>{header}</div>
        <div className={classes.features__list}>
      
            <div className={classes.features__list__item}>
              <span><TiTick/></span><div>Sauna</div>
            </div>
            <div className={classes.features__list__item}>
              <span><TiTick/></span><div>Market</div>
            </div>
            <div className={classes.features__list__item}>
              <span><TiTick/></span><div>Hamam</div>
            </div>
            <div className={classes.features__list__item}>
              <span><TiTick/></span><div>Bar</div>
            </div>
            <div className={classes.features__list__item}>
              <span><TiTick/></span><div>Mesaj</div>
            </div>
            <div className={classes.features__list__item}>
              <span><TiTick/></span><div>Açık Restoran</div>
            </div>
            <div className={classes.features__list__item}>
              <span><TiTick/></span><div>Spa Merkezi</div>
            </div>
            <div className={classes.features__list__item}>
              <span><TiTick/></span><div>Kapalı Restoran</div>
            </div>
            <div className={classes.features__list__item}>
              <span><TiTick/></span><div>Otelde Otopark</div>
            </div>
          
        </div>
    </div>
  )
}

export default Feature
