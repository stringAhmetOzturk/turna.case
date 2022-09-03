import React from 'react'
import classes from "../../../styles/components/body/Body.module.scss"
import Button from '../../button/Button'
const Mapinfo = () => {
  return (
    <div className={classes.body__mapinfo}>
      <div className={classes.body__mapinfo__header}>Otele Ulaşım</div>
      <div className={classes.body__mapinfo__address}>Antalya Şehir Merkezi, Sakıp Sabancı Bulvarı, Çimen Sokak, Antalya, Turkey, 07050</div>
      <div className={classes.body__mapinfo__map}>
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/map.jpg`} alt="logo"/>
      </div>
      <div className={classes.body__mapinfo__showonmap}><Button name={"Haritada Göster"}/></div>
    </div>
  )
}

export default Mapinfo
