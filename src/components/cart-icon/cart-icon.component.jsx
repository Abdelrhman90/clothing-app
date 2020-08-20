import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import { createStructuredSelector } from "reselect";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { toggleHiddenCart } from "../../redux/cart/cart-actions";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleHiddenCart, itemCount }) => (
  <div className="cart-icon" onClick={toggleHiddenCart}>
    <ShoppingCartIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleHiddenCart: () => dispatch(toggleHiddenCart()),
});

const mapStatsToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStatsToProps, mapDispatchToProps)(CartIcon);
