import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BiCircle } from "react-icons/bi";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const { cartitems } = useSelector((state) => state.CartReducer);
  const [totalCount, setTotalcount] = useState();
  const history = useHistory();
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    phonenumber: "",
  });

  useEffect(() => {
    let count = 0;
    cartitems.map((cartitem) => {
      count = count + cartitem.price;
    });
    setTotalcount(count);
  });

  const placeOrder = () => {
    toast(`Please Login for Order Products ${inputData.fname} ${inputData.lname}`, {position:"top-center"});
  };

  const Loginpage = () => {
    return history.push('/login');
  };

  const getinputData = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputData((e) => {
      return{
        ...inputData,
        [name] : value,
      }
    });
    // console.log(inputData);
  };
  return (
    <div className="container">
      <div className="totalcartitems">
        <span className="checkout">CHECKOUT </span>
        <span className="checkoutopn">
          <small>have an account ?</small>
        </span> 
        <button  type="button" className="btn btn-light" onClick={()=>Loginpage()}>Login</button>
      </div>
      <div className="row">
        <div className="col-8">
          <div className="checkoutbody">
            <h6 className="SHIPPINGADDRESS">SHIPPING ADDRESS </h6>
            <br />
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">First Name</label>
                  <input
                    autoComplete="off"
                    type="text"
                    name="fname"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="First Name"
                    onChange={getinputData}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Last Name</label>
                  <input
                    autoComplete="off"
                    type="text"
                    name="lname"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Last Name"
                    onChange={getinputData}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  autoComplete="off"
                  typeof="address"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                  onChange={getinputData}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress2">Address 2</label>
                <input
                  type="text"
                  name="address2"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartment, studio, or floor"
                  onChange={getinputData}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input
                    type="text"
                    name="city"
                    className="form-control"
                    id="inputCity"
                    onChange={getinputData}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputState">State</label>
                  <select
                    name="state"
                    id="inputState"
                    className="form-control"
                    onChange={getinputData}
                  >
                    <option >Choose...</option>
                    <option>Punjab</option>
                    <option>Himachal Pardesh</option>
                    <option>Utrakhand</option>
                    <option>Delhi</option>
                    <option>Rajasthan</option>
                  </select>
                </div>
                <br />
                <div className="form-group col-md-6">
                  <label htmlFor="phonenumber">Phone Number</label>
                  <input
                    type="number"
                    name="phonenumber"
                    className="form-control"
                    id="phonenumber"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-4">
          <h6 className="SHIPPINGADDRESS"> ORDER SUMAMARY</h6> <br />
          <h6 className=""> IN YOUR CART ({cartitems.length} )</h6>
          {cartitems.map((data) => {
            return (
              <div className="ordersummary" key={data.id}>
                <img
                  src={data.imgsrc}
                  alt={data.name}
                  className="checkoutimg"
                />
                <span>{data.name}</span>
                <span>({data.price})</span>
              </div>
            );
          })}
          <p>TOTAL AMOUNT : {totalCount} ₹</p>
          <br />
          <small>Payment mood field is required </small>
          <br />
          <small>
            <BiCircle /> Payment with Card
          </small>
          <br />
          <small>
            <BiCircle /> Cash on delivery
          </small>
          <br />
          <button onClick={() => placeOrder()} className="PlaceOrderbtn">
            
            Place Order
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
