import { useState } from "react";
import "./Homepage.css";
import Product from "../Components/Product";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import addProduct from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
// import Cartdetails from "../Components/Cartdetails";

function Homepage() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.allproducts);

  const [loading, setLoading] = useState(true);
  const fetchproducts = () => {
    fetch("http://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => dispatch(addProduct(data)));
      
  };
  useEffect(() => {
    fetchproducts();
  });

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  if (loading) return <h1 style={{textAlign:"center",marginTop:"2rem"}}>Loading...</h1>;

  return (
    <div className="homepage-container">
      <div className="productlist-cart">
        <div className="productlist">
          {products.map((val: any, index: number) => {
            return <Product key={index} obj={val} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default Homepage;
