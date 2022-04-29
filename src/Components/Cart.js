import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const Cart = () => {
  const { cartitems } = useSelector((state) => state.CartReducer);
  const [cartPrice, setCartPrice] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    let temp = 0;
    cartitems.forEach((cartitem) => {
      temp = temp + cartitem.price;
    });

    setCartPrice(temp);
  }, [cartitems]);

  

  const removeFromCart = (id) => {
    return dispatch({ type: "REMOVE_FROM_CART" , payload : id });
  };

  return (
    <>
    { (cartitems.length > 0 ) ?  <div>
      <div className="cart">
        <h5 className="totalcartitems">
          Total Cart Products {cartitems.length}
        </h5>
        <div className="cartitems">
          {cartitems.map((data) => {
            return (
              <div key={data.id}>
                <img
                  src={data.imgsrc}
                  alt="pic"
                  className="cartImg"
                />
                <span className="itemdetail">{data.name}</span>
                <span className="itemprice"></span>
                <div className="itemdiscription">{data.discription}</div>
                <button
                  className="Cartbutton"
                  onClick={() => removeFromCart(data.id)}
                >
                  Remove item 
                </button>
                <div className="itemIncrDcre">
                </div>
                <p className="itemsubtotal">{data.price}</p>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="totalprice"> Total Price :- {cartPrice} ₹</div>
        <Link className="buttonchk" to={'/checkout'}  >CheckOut </Link>
        
      </div>
      <hr/>
    </div> : <div className="cartpage">No cart item  added</div>
   } 
  </>
    
  );
};

export default Cart;
