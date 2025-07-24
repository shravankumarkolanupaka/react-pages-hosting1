import React from 'react'

const Discount = ({orp,ofp}) => {
    const orpNumber = orp.replace(/[^0-9]/g, "")
    const ofpNumber = ofp.replace(/[^0-9]/g, "")

const convertToCurrency = (amount)=>{
   return amount.toLocaleString("fr", {
  style: "currency",
  currency: "INR",
});
}    


  return (
    <span>{convertToCurrency(orpNumber-ofpNumber)}</span>
  )
}

export default Discount