import React from 'react'
import classes from "../../../styles/components/body/Body.module.scss"

import Card from "../../card/Card"
import Feature from "../../feature/Feature"
import Hotel from '../hotel/Hotel'
const Details = ({open}) => {
  return (
    <div className={classes.body__details}>
      <Hotel hotelname={"Rixos Downtown Hotel (9.0)"} star={5} location={"Antalya, Merkez"} content="The purpose of lorem ipsum is to create a natural 
        looking block of text (sentence, paragraph, page, etc.) 
        that doesn’t distract from the layout. A practice not without controversy,
        laying out pages with meaningless filler text can be."
        images={"assets/images/hotel.jpg"}
        />
      <Card roomName={"Standart Oda"} open={open}/>
      <Card roomName={"İki Balkonlu Oda (Delux)"} open={open}/>
      <Feature header={"Otel Özellikleri"}  />
      <Feature header={"Otel Koşulları"}/>
    
    </div>
  )
}

export default Details
