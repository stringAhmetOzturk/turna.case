import React from 'react'
import classes from "../../../styles/components/header/Header.module.scss"

const Rightmenu = () => {
  return (
    <div className={classes.header__rightMenu}>
      <div className={classes.header__rightMenu__flag}>
      <img 
       src={`${process.env.PUBLIC_URL}/assets/images/turk_flag.png`} alt="logo"/>
      </div>
      <div className={classes.header__rightMenu__lira}>
      <img 
       src={`${process.env.PUBLIC_URL}/assets/images/turk_lirasi.png`} alt="logo"/>
      </div>
      <div className={classes.header__rightMenu__items}>
      <ul>
        <li>
            Yardım
        </li>
        <li>
            Giriş Yap
        </li>
        <li>
           Üye Ol
        </li>
    </ul>
      </div>
    </div>
  )
}

export default Rightmenu
