import React from 'react'
import classes from "../../styles/components/body/Body.module.scss"
import Details from './details/Details'
import Mapinfo from './mapinfo/Mapinfo'
const Body = ({open}) => {
  return (
    <div className={classes.body}>
      <Mapinfo/>
      <Details open={open}/>
    </div>
  )
}

export default Body
