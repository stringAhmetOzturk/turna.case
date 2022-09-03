import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai"
import classes from "../../styles/components/button/Button.module.scss"
const Button = ({open,name,icon,color}) => {
  return (
    <div className={classes.button}>
      <button className={classes.button__btn} onClick={open}>{name}
      {icon === true ? <span ><AiOutlineArrowRight className={classes.button__btn__icon}/></span> : ""}

      </button>
    </div>
  )
}

export default Button
