import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import "./Wishlist.css";

import Cartdetails from "../Components/Cartdetails";
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
      <div className="wishlist-subheader">
        <p>My Wishlist</p>
      </div>
      <div className="wishlist-courses-cartdetails">
        <div className="wishlist-courses">
          {items.map((val: any, index: number) => {
            return <Wishlistitem key={val.id} value={val} />;
          })}
        </div>
        <div className="cartdetails">
          <Cartdetails />
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
