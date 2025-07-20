import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import Home from '../../pages/home/home'

const ExploreMenu = ({category,setCategory}) => {
  
  return (
    <div className='explore-menu'id ='ex-menu'>
      <h1>Explore our menu</h1>
      <p className='ex-menuText'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, minima amet obcaecati asperiores fugiat itaque?</p>
      <div className="ex-menu-list">
        {menu_list.map((item,index)=>
        {
          return(
            <div  onClick={()=>setCategory(prev =>prev===item.menu_name?"All":item.menu_name)} key={index} className="ex-menu-list-item">
              <img className ={category===item.menu_name?"active":""}src={item.menu_image}alt=''/>
              <p>{item.menu_name}</p>
            </div>
          )

        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
