import React, { useContext,  } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
const FoodItem = ({ Id, name, price, description, image }) => {
  
  const{cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  
  return (
    <div className="foodItem">
      <div className="foodItem-image-container">
        <img className="foodItem-image " src={image} alt="" />
        {!cartItems[Id] ? (
          <img
            className="add"
            onClick={() => addToCart(Id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="Item-count">
            <img
              onClick={() => removeFromCart(Id)}
              src={assets.remove_icon_red}
              alt=""
            />

            <p>{cartItems[Id]}</p>

            <img
              onClick={() => addToCart(Id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}

        <div className="foodItem-info">
          <div className="foodItem-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="foodItem-desc">{description}</p>
          <p className="foodItem-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
