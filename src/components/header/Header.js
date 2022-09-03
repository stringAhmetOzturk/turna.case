import React from 'react'
import classes from "../../styles/components/header/Header.module.scss"
import Leftmenu from './leftmenu/Leftmenu'
import Logo from './logo/Logo'
import Rightmenu from './rightmenu/Rightmenu'
import Toggle from './togglebutton/Toggle'

const Header = () => {
  return (
    <div className={classes.header}>
        <Logo/>
        <Leftmenu/>
        <Rightmenu/>
        <Toggle/>
    </div>
  )
}

export default Header
