import React from "react";
import Error from "../images/404.png";
import { Link } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
  return (
    <div className="errorpage">
     <div className="image-error"><img src={Error} alt="404 page" width="80%" height="100%"></img></div>
     <div className="error-content">
       <h2>OOPS! PAGE NOT FOUND</h2>
       <p style={{fontSize:"1.4rem",width:"50%"}}>
       The page you were looking for could not be found.It might have been removed 
       ,renamed or did not exist.
        <button className="Page404">
          <Link to="/" className="link-remove">
            Home{" "}
          </Link>
        </button>
      </p> 
       </div>
    </div>
  );
};

export default Page404;
