import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeallCart, removeItemCart } from "../redux/actions/cartActions";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import "./Cart.css";
import { addItemWishlist } from "../redux/actions/wishlistActions";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Cart() {
  let dispatch = useDispatch();

  const cart = useSelector((state: any) => state.cart);
  const allproducts = useSelector((state: any) => state.allproducts);
  const [cartitems, setCartitems] = useState([]);

  useEffect(() => {
    let items = allproducts.filter((item: any) => {
      if (cart.indexOf(parseInt(item.id)) !== -1) return true;
      return false;
    });
    setCartitems(items);
  }, [cart, allproducts]);

  return (
    <div className="cart-container">
      <div className="sub-header">
        <h3 className="subheader-title">{cartitems.length===0?"No items in Cart":`${cartitems.length} Items in cart`}</h3>
      </div>

      <div className="cart-list">
        <div className="cartitems">
          {cartitems.map((value: any, index: number) => { 
            return (
              <div className="cartdata" key={index}>
                <img src={value.image} alt={value.title} width="10%" height="60%"/>
                <p className="cartitem-title">{value.title}</p>
                <FavoriteIcon className="red-wishlist" onClick={() => {
                    dispatch(addItemWishlist(parseInt(value.id)));
                    dispatch(removeItemCart(parseInt(value.id)));
                  }}/>
                <p className="price">
                  <strong>
                    $
                    {value.price}
                  </strong>
                </p>
      
                  <DeleteForeverIcon className="deleteicon" onClick={() => {
                      dispatch(removeItemCart(parseInt(value.id)));
                    }}/>
          
            
              </div>
            );
          })}
        </div>
        <div className="totalprice">
          <div className="value">
            Total Cart Value <br />
            <div className="Price">$ 
              {cartitems.reduce((sum: number, val: any) => {
                if (val.price)
                  return sum +(val.price);
                else return sum + (val.price);
              }, 0)}
            </div>
          </div>
          <div className="checkout">
            <button
              onClick={() => {
                if (cartitems.length) alert("order successfull");
                dispatch(removeallCart());
              }}
            >
              <span>GO TO CHECKOUT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
