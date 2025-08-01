import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div className="cartItems">
         <div className="cartItems-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
         </div>
         <br />
         <hr />
         {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
              return(
                <div>
                <div className='cartItems-title cartItems-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>

                  <p  onClick ={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>
                 <hr />
                 </div>
              )
          }
         })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-totals-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-totals-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:3}</p>
          </div>
          <hr />
          <div className="cart-totals-details">
            <p>Total</p>
            <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
          </div>
          <button onClick={()=>navigate ('/order')} > Place Order</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code ,Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text"  placeholder='promocode'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
