import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeallCart, removeItemCart } from "../redux/actions/cartActions";
import Deleteicon from "../images/delete.png";
import "./Cart.css";
import { addItemWishlist } from "../redux/actions/wishlistActions";

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
        <h3 className="subheader-title">{cartitems.length} courses in cart</h3>
      </div>

      <div className="cart-list">
        <div className="cartitems">
          {cartitems.map((value: any, index: number) => {
            console.log(value);
            
            return (
              <div className="cartdata">
                <p className="cartitem-title">{value.title}</p>
                <p
                  className="Move"
                  onClick={() => {
                    dispatch(addItemWishlist(parseInt(value.id)));
                    dispatch(removeItemCart(parseInt(value.id)));
                  }}
                >
                  Move to Wishlist
                </p>
                <p className="price">
                  <strong>
                    Rs.
                    {value.discounted_price
                      ? value.discounted_price
                      : value.actual_price}
                    -/
                  </strong>
                </p>
                <button className="Delete">
                  <img
                    src={Deleteicon}
                    alt="delete"
                    onClick={() => {
                      console.log("vkdsn");
                      dispatch(removeItemCart(parseInt(value.id)));
                    }}
                  />
                </button>
              </div>
            );
          })}
        </div>
        <div className="totalprice">
          <div className="value">
            Total Cart Value <br />
            <div className="Price">
              {cartitems.reduce((sum: number, val: any) => {
                if (val.discounted_price)
                  return sum + parseInt(val.discounted_price);
                else return sum + parseInt(val.actual_price);
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
