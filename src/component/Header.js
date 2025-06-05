import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const contextData = useContext(UserContext)
  const cartItems = useSelector((store) => store.cart.items)

  console.log('cartItems : ', cartItems);
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
        />
      </div>
      <div className="nav-items">
        <ul>
        <li>
            Online Status : {onlineStatus ? '**' : '--'}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li style={{font:20}}>

            <Link to="/cart"> Cart ## {cartItems.length}</Link>
            
           </li>
          <button
            className="login"
            onClick={() =>
              setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnName}
          </button>
          <li>{contextData.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
