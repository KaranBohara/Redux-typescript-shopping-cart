import { useDispatch } from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { addItemCart } from "../redux/actions/cartActions";
import { removeItemWishlist } from "../redux/actions/wishlistActions";

function Wishlistitem(props: { key: number; value: any }) {
  const dispatch = useDispatch();

  return (
    <div className="wishlist-product-container">
      <div className="product-image-box"><img style={{marginTop:"1rem"}} src={props.value.image} alt={props.value.title}></img>
      </div>
      <div className="product-title">
        <p>
        <b>{props.value.title}</b>
        </p>
      </div>
      <p className="product-category">{props.value.category}</p>
      
      <p className="product-price">
        <b>
            ${props.value.price}
        </b>
      </p>
      <div className="cart-delete-container">
        <LocalMallIcon className="carticon" onClick={() => {
          dispatch(addItemCart(parseInt(props.value.id)));
          dispatch(removeItemWishlist(parseInt(props.value.id)));
        }}/>
      <DeleteForeverIcon className="deleteicon" onClick={() => {
          dispatch(removeItemWishlist(parseInt(props.value.id)));
        }}/>
      </div>
      
    </div>
  );
}

export default Wishlistitem;
