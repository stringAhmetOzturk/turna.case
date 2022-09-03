import classes from "../../styles/components/card/Card.module.scss"
import Button from "../button/Button"
import {AiOutlineCheckCircle} from "react-icons/ai"
const Card = ({roomName,open,ispopup}) => {

  return (
    <div className={ispopup ===true ? classes.cardpopup:classes.card}>
    <div className={classes.card__img}> 
      <img
      src={`${process.env.PUBLIC_URL}/assets/images/hotel.jpg`} alt="hotel"/>
      </div>
    <div className={classes.card__details}>
      <div className={classes.card__details__header}>{roomName}</div>
      <div className={classes.card__details__featuresandprice}>
      <div className={classes.card__details__featuresandprice__features}>
        <div className={classes.card__details__featuresandprice__features__item}>
           <span><AiOutlineCheckCircle className={classes.card__details__featuresandprice__features__item__icon}/></span>
           <div>Banyo</div>
        </div>
        <div className={classes.card__details__featuresandprice__features__item}>
           <span><AiOutlineCheckCircle className={classes.card__details__featuresandprice__features__item__icon}/></span>
           <div>İnternet</div>
        </div>
        <div className={classes.card__details__featuresandprice__features__item}>
           <span><AiOutlineCheckCircle className={classes.card__details__featuresandprice__features__item__icon}/></span>
           <div>Havlu Seti</div>
        </div>
      
      </div>
      <div className={classes.card__details__price}>
        <div>1200</div>
        <div>1500</div>
      </div>
      </div>
      
      <div className={classes.card__details__book}><Button open={open} name={"Odayı Ayır"} icon={true}/></div>
    </div>
  </div>
  )
}

export default Card
