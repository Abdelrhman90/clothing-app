import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingCartIcon} from '../../assets/shopping-bag.svg'

import {toggleHiddenCart} from '../../redux/cart/cart-actions'
import './cart-icon.styles.scss'


const CartIcon = ({toggleHiddenCart}) => (
    <div className="cart-icon" onClick = {toggleHiddenCart}>
        <ShoppingCartIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleHiddenCart : () => dispatch(toggleHiddenCart())
})

export default connect(null, mapDispatchToProps)(CartIcon)