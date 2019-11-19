import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";
import CartIcon from "../cart-icon/CartIcon";
import CartDrop from "../cart-dropdown/CartDrop";
function Header({ currentUser, isHidden }) {
  return (
    <div className="header">
      <Link className="logo-container" title="Homepage" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" title="Shop" to="/shop">
          SHOP
        </Link>
        <Link className="option" title="Contact" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin" title="Sign in" className="option">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {isHidden ? null : <CartDrop />}
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser }, cart: { isHidden } }) => ({
  currentUser,
  isHidden
});

export default connect(mapStateToProps, {})(Header);
