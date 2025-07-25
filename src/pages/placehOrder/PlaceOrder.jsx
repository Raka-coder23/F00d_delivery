import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
const PlaceOrder = () => {
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
       <input type="text"  placeholder='First name'/>
       <input type="text"  placeholder='Last name'/>
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text"  placeholder='Street'/>

        <div className="multi-fields">
       <input type="text"  placeholder='City'/>
       <input type="text"  placeholder='State'/>
        </div>
        
          <div className="multi-fields">
       <input type="text"  placeholder='Pin code'/>
       <input type="text"  placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone no.' />
      </div>
      <div className="place-order-right">
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
          <button >Proceed To Payment</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
