import "./Productdetails.css";
import { Link } from "react-router-dom";
import { addItemCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addItemWishlist } from "../redux/actions/wishlistActions";
function Productdetails(props: any) {
  const [cartstatus, setCartstatus] = useState(false);
  const [wishliststatus, setwishliststatus] = useState(false);
  const dispatch = useDispatch();
  function addtocart() {
    dispatch(addItemCart(parseInt(props.location.state.id)));
    setCartstatus(true);
  }
  function addtowishlist() {
    dispatch(addItemWishlist(parseInt(props.location.state.id)));
    setwishliststatus(true);
  }
  return (
    <div className="viewpage">
      <div className="details-container">
        <div className="redirecttohome">
          <Link to="/" className="link-remove-products">
            <p>All Products<span style={{marginLeft:".3rem"}}>&gt;</span></p>
          </Link>
          <p style={{marginLeft:".3rem"}}>
            {" "}
            {props.location.state.category}
          </p>
        </div>
        <div className="detailswithcartbox">
          <div className="productdescription">
            <h4 style={{marginTop:"2rem"}}>{props.location.state.title}</h4>
            <img src={props.location.state.image} alt={props.location.state.title} width="20%" height="50%"/>
            <p style={{marginTop:"2rem"}}>{props.location.state.description}</p>
            <p style={{marginTop:"2rem",color:"red"}}>$ {props.location.state.price}</p>
            <p style={{marginTop:"2rem"}}>Rating: {props.location.state.rating.rate}</p>
            <p style={{marginTop:"2rem"}}>Items sold: {props.location.state.rating.count}</p>
          </div>
          <div className="pricingcartwishlist">
            <div className="detail-buttongroup">
              {cartstatus ? (
                "item already in cart"
              ) : (
                <button className="addtocartbtn" onClick={addtocart}>
                  ADD TO CART
                </button>
              )}
              {wishliststatus ? (
                "item already in wishlist"
              ) : (
                <button className="addtocartbtn" onClick={addtowishlist}>
                  ADD TO WISHLIST
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productdetails;
