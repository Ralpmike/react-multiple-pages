import React from 'react'
import HomeCard from '../components/HomeCard'
import ProductImages from '../components/ProductImages'


const Home = ({data, handleClick}) => {
  return (
    <div className="home-page">
      <div className="bg-pic">
        <p>Hello, my name Raphael; join me on this journey of style and self-expression. Explore the latest trends, embrace timeless classics, and redefine your fashion narrative with Raphael's Fashion Haven - where every piece tells a story, and every outfit is an expression of your unique identity.. </p>
      </div>
      <HomeCard data={data} handleClick={handleClick}/>
      <ProductImages data={data} />
    </div>
  )
}

export default Home