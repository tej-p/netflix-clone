import React from 'react'
import "../components/Home/Home.scss"


export const Card = ({img}) => {
  return (
    <img src={img} alt="" className="card" />
  )
}

