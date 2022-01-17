import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import wishlistimage from "../images/wish.png";
import "./Wishlist.css";
import Wishlistitem from "../Components/Wishlistitem";

function Wishlist() {
  const wishlist = useSelector((state: any) => state.wishlist);
  const allproducts = useSelector((state: any) => state.allproducts);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let wishlistItems = allproducts.filter((item: any) => {
      if (wishlist.indexOf(parseInt(item.id)) !== -1) return true;
      return false;
    });
    setItems(wishlistItems);
  }, [wishlist, allproducts]);

  return (
    <div className="wishlist-container">
      <div className="wishlist-image">
        <img src={wishlistimage} alt="wishist"/>
      </div>
        <div className="wishlist-products">
          {items.map((val: any) => {
            return <Wishlistitem key={val.id} value={val}/>;
          })}
      </div>
    </div>
  );
}

export default Wishlist;
