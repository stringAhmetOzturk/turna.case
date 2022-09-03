import React from 'react'
import classes from "../../../styles/components/header/Header.module.scss"
const Leftmenu = () => {
  return (
    <nav className={classes.header__menu}>
    <ul>
        <li>
            Uçak Bileti
        </li>
        <li>
            Otobüs Bileti
        </li>
        <li>
            Otel Rezervasyon
        </li>
    </ul>
 </nav>
  )
}

export default Leftmenu
