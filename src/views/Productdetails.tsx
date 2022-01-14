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
          <Link to="/">
            <p>All Products </p>
          </Link>
          <p>
            {" "}
            {">"} {props.location.state.title}
          </p>
        </div>
        <div className="coursenameauthornametags">
          <h3>{props.location.state.title}</h3>
          {props.location.state.description}
         
        </div>
        <div className="detailswithcartbox">
          <div className="coursedescription">
            <p>Product Details</p>
            <p>{props.location.state.details}</p>
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
