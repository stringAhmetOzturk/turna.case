import React, { useState } from 'react'
import classes from "../../styles/components/popup/Popup.module.scss"
import Card from '../card/Card'
const Popup = ({click,close}) => {
  return ( click === true ?
    <div className={classes.popup}>
        <div className={classes.popup__container}>
        <p onClick={close}>X</p>
        <Card roomName={"Standart Oda"} ispopup={true}/>
        </div>
   
    </div> : ""
  )
}

export default Popup
