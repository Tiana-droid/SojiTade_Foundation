import React from 'react'
import { Outer } from './style'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { tImg1, Avatar } from '../Assets';

const Testimonys = [
    {
        img: tImg1,
        content: 'We appreciate Sojitade Foundation for their massive support and gifts for children.',
        name: 'Mrs F.O Omiye',
        cause: 'H.M St. Finbarr School',
    },
    {
        img: '',
        content: 'We appreciate the food item, and clothing gifts. Also appreciate the face lifting of our main gate. Thanks alot for the gestures.',
        name: 'Mr. Ayodele',
        cause: 'Director, Baby Home, Oba-Ile',
    },
]

const Testimonies = () => {
  return (
        <Outer>
        <h1>Testimonies</h1>
        <Carousel
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        showArrows={true}
        >
        {Testimonys.map((testimony, index) => (
            <div className='container' key={index}>
                <div className="profile-pic">
                <img src={testimony.img ? testimony.img : Avatar} alt="" />
                </div>
                <div>
                <p>{testimony.content}</p>
                <h3>{testimony.name}</h3>
                <span>{testimony.cause}</span>
                </div>
            </div>
        ))}
        </Carousel>
        </Outer>
  )
}

export default Testimonies