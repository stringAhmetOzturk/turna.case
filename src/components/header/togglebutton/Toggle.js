import React from 'react'
import classes from "../../../styles/components/header/Header.module.scss"
import {MdMenu} from "react-icons/md"
const Toggle = () => {
  return (
    <div className={classes.header__toggle}>
    <MdMenu className={classes.header__toggle__button}/>
   </div>
  )
}

export default Toggle
