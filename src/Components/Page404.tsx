import React from "react";
import Error from "../images/error-page.png";
import { Link } from "react-router-dom";
import "./Page404.css";

const Page404 = () => {
  return (
    <div>
      <img src={Error} alt="404 page "></img>
      <h1>Page 404 Not Found</h1>
      <p>
        The Page you are looking for doesn't exist or an other error occured.
      </p>
      <p>
        Go back,or head over to
        <button className="Page404">
          <Link to="/" className="Home404">
            Home{" "}
          </Link>
        </button>
        choose a new direction.
      </p>
    </div>
  );
};

export default Page404;
