import { useState } from "react";
import "./Product.css";
import Blankheart from "../images/heart1.png";
import Redheart from "../images/redheart.png";
import { addItemCart, removeItemCart } from "../redux/actions/cartActions";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemWishlist,
  removeItemWishlist,
} from "../redux/actions/wishlistActions";
import {Link} from "react-router-dom";
function Product(props: any) {
  const cart = useSelector((state: any) => state.cart);
  const wishlist = useSelector((state: any) => state.wishlist);
  function productExistCart() {
    for (let i of cart) {
      if (i === parseInt(props.obj.id)) {
        return false;
      }
    }
    return true;
  }
  function productExistinWishlist() {
    for (let i of wishlist) {
      if (i === parseInt(props.obj.id)) {
        return false;
      }
    }
    return true;
  }
  const [isWishlisted, setIsWishlisted] = useState(productExistinWishlist());
  const [isCarted, setIsCarted] = useState(productExistCart());
  const dispatch = useDispatch();
  function toggle() {
    if (isWishlisted === true) {
      dispatch(addItemWishlist(props.obj.id));
    } else {
      dispatch(removeItemWishlist(props.obj.id));
    }
    setIsWishlisted(!isWishlisted);
  }
  function addcartbutton() {
    alert("item added to cart");
    if (isCarted === true) {
      dispatch(addItemCart(parseInt(props.obj.id)));
    }
    setIsCarted(!isCarted);
  }

  function removecartbutton() {
    alert("item removed from cart");
    dispatch(removeItemCart(parseInt(props.obj.id)));
    setIsCarted(!isCarted);
  }

  return (
    <div className="product-container">
      <div className="heart"><img
        onClick={toggle}
        className="heart-icon"
        src={isWishlisted ? Blankheart : Redheart}
        alt="wishlist"
      />
      </div>
      <div className="product-image-box"><img src={props.obj.image} alt={props.obj.title}></img>
      </div>
      
      <div className="product-title">
        <p>
        <Link className="link-remove-title" to="/productdetails"><b>{props.obj.title}</b></Link>
        </p>
      </div>
      <p className="product-category">{props.obj.category}</p>
      
      <p className="product-price">
        <b>
            ${props.obj.price}
        </b>
      </p>
      <div className="rating">
        <div><span style={{color:"red"}}>Rating: </span><span style={{fontWeight:"bold"}}>{props.obj.rating.rate}</span></div>
        <div><span style={{color:"red"}}>Items Sold: </span><span style={{fontWeight:"bold"}}>{props.obj.rating.count}</span></div>
      </div>
      <div className="cartbutton-group">
        {isCarted ? (
          <button  onClick={addcartbutton}>
            Add To Cart
          </button>
        ) : (
          <button onClick={removecartbutton}>
            Remove From Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
