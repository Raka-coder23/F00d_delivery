import React, { useState } from 'react'
import './home.css'
import Header from '../../component/navbar/Header/Header'
import ExploreMenu from '../../component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../component/foodDisplay/foodDisplay'
import AppDownload from '../../component/AppDownload/AppDownload'

const Home = () => {
    
    const[category,setCategory]= useState("All")

  return (
    <div>
     <Header/>
     <ExploreMenu category={category} setCategory={setCategory}/>
     <FoodDisplay category={category}/>
     <AppDownload/>
    </div>
  )
}

export default Home
