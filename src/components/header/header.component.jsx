import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import { signOutStart } from "../../redux/user/user.actions";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer,
} from "./header.styles";
const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLinkContainer to="/shop">Shop</OptionLinkContainer>
      <OptionLinkContainer to="/shop">Contact</OptionLinkContainer>
      {currentUser ? (
        <OptionLinkContainer as="div" onClick={signOutStart}>
          Sign Out
        </OptionLinkContainer>
      ) : (
        <OptionLinkContainer to="/signin">Sign In</OptionLinkContainer>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
