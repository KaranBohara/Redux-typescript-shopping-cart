import { useDispatch } from "react-redux";
import "./Wishlistitem.css";
import DeleteIcon from "../images/delete.png";

import { addItemCart } from "../redux/actions/cartActions";
import { removeItemWishlist } from "../redux/actions/wishlistActions";

function Wishlistitem(props: { key: number; value: any }) {
  const dispatch = useDispatch();

  return (
    <div className="wishlistitem-container">
      <div className="wishlist-title">
        <p>
          <b>{props.value.title}</b>
        </p>
        <div className="tagbuttons">
          {props.value.tags.map((val: string, index: number) => {
            return <p className="tags">{val}</p>;
          })}
        </div>
      </div>
      <p className="wishlist-author">{props.value.author}</p>

      <p className="wishlist-price">
        <b>
          {props.value.discounted_price
            ? props.value.discounted_price
            : props.value.actual_price}
        </b>
      </p>
      <p className="wishlist-price">
        <s>{props.value.discounted_price ? props.value.actual_price : "-"}</s>
      </p>

      <img
        onClick={() => {
          dispatch(removeItemWishlist(parseInt(props.value.id)));
        }}
        src={DeleteIcon}
        alt="delete"
      />
      <button
        className="addtocart-button"
        onClick={() => {
          dispatch(addItemCart(parseInt(props.value.id)));
          dispatch(removeItemWishlist(parseInt(props.value.id)));
        }}
      >
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default Wishlistitem;
