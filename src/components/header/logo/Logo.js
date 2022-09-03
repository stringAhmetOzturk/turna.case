import React from 'react'
import classes from "../../../styles/components/header/Header.module.scss"
const Logo = () => {
  return (
    <div className={classes.header__logo}>
    <img className={classes.header__logo__image}
       src={`${process.env.PUBLIC_URL}/assets/images/turna_com_logo.png`} alt="logo"/>
    </div>
  )
}

export default Logo
