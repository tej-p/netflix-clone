import React from 'react';
import { Card } from './Card';
import "../components/Home/Home.scss"

const imgUrl = "https://image.tmdb.org/t/p/original";

export const Heading = ({head, arr=[]}) => {
  return (
    <div className="heading">
        <p>{head}</p>
        <div>
            {arr.map((el,index) => (
                <Card key={index} img={`${imgUrl}/${el.poster_path}`} />
            ))}

        </div>
    </div>
  )
}

