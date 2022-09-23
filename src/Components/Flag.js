import React from 'react'
import "../style.css"
var countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

function Flag(props) {
    let proba = props.data.probability*100
    let newProba = proba.toFixed(2)
    let imgUrl = `https://countryflagsapi.com/png/${props.data.country_id}`
    
    
  return (
    <>
    <div className='EachData'>
        <img src={imgUrl} className="img" alt='Flag Holder'></img>
        <div className='country'>{countries.getName(props.data.country_id,"en")}</div>
        <div>{newProba + "%"}</div>
    </div>
    </>
  )
}

export default Flag