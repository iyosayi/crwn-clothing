import React from "react";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/selectors/users";
import { selectCartHidden } from "../../redux/selectors/cart";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "../../styled-components/HeaderContainer";
import CartIcon from "../cart-icon/CartIcon";
import CartDrop from "../cart-dropdown/CartDrop";

function Header({ currentUser, isHidden }) {
  return (
    <HeaderContainer>
      <LogoContainer title="Homepage" to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink title="Shop" to="/shop">
          SHOP
        </OptionLink>
        <OptionLink title="Contact" to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin" title="Sign in" className="option">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {isHidden ? null : <CartDrop />}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden
});

export default connect(mapStateToProps, {})(Header);
