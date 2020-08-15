import cartActionTypes from './cart-types'
const INITIAL_STATE = {
    hidden : true
}

const CartReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_HIDDEN_CART:
            return{
                ...state,
                hidden: !state.hidden
            }
    
        default:
            return state
    }
}

export default CartReducer