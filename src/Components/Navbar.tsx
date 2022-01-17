import "./Navbar.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
function Navbar() {
  return (
    <div className="navbar">
      <div className="heading">
        <Link className="link-remove" to="/">
          Redux shopping Cart
        </Link>
      </div>
      <div className="menu">
        <Link to="/cart">
          <ShoppingCartIcon className="cart" />
        </Link>
        <Link to="/wishlist">
          <FavoriteBorderIcon className="wishlist" />
        </Link>
      </div>
      {/* <div className="count">
       
      </div> */}
    </div>
  );
}

export default Navbar;
