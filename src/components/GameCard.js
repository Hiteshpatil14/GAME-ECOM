import React, { useEffect, useState } from 'react'
import "./GameCard.css"
import { useContext } from 'react'
import { Cartcontext } from '../App'

function GameCard({element}) {
  const [toggle,setToggle]=useState(true)
  const {addtocart}=useContext(Cartcontext)
  console.log(addtocart)
  

    const url=`http://localhost:1337${element.attributes.CardImage.data[0].attributes.url}`
  
  return (
    <div className="MainCard">
      <img src={url} alt='gameimg' />
      <section className='cardBody'>
      <h1 className='title'>{element.attributes.Title}</h1>
      <p className='description'>{element.attributes.Description}</p>
      <section className='CardPrice'>
        <h2>{element.attributes.Price} Rs</h2>
        {toggle &&<button className='checkoutButton' onClick={()=>{addtocart(element) ;setToggle(false)}}>Add To Card</button>}
        {!toggle &&<button className='checkoutButton' >Added</button>}
      </section>
      </section>
    </div>
  )
}
//C:\PRE-PREOJECTS\10x-games\src\assets\GTA.jpg
//10x-games\src\assets\GTA.jpg
export default GameCard
