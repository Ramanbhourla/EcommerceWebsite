const initialState = {
  cartitems: [],
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...state,
        cartitems: [...state.cartitems, action.payload],
      };
    }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cartitems : state.cartitems.filter((data) =>{
            return data.id !== action.payload
        })
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
