import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [registerinfo, setRegisterinfo] = useState({
    fname: "",
    lname: "",
    email: "",
    city: " ",
    state: "",
    zip: "",
  });

  const getinputData = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setRegisterinfo(() => {
      return {
        ...registerinfo,
        [name]: value,
      };
    });
    // console.log(registerinfo)
  };

   const successRegisterInfo =()=>{
      toast(`Thanks for Registeration ${registerinfo.fname} ${registerinfo.lname}. Now You can Continue your purchasing`)
   }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <form className="registerform">
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationDefault01">First name</label>
                <input
                  type="text"
                  name="fname"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="First name"
                  onChange={getinputData}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="validationDefault02">Last name</label>
                <input
                  type="text"
                  name="lname"
                  className="form-control"
                  id="validationDefault02"
                  onChange={getinputData}
                  placeholder="Last name"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="validationDefaultUsername">Email</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend2">
                      @
                    </span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    id="validationDefaultUsername"
                    placeholder="Email"
                    aria-describedby="inputGroupPrepend2"
                    onChange={getinputData}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="validationDefault03">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="City"
                  onChange={getinputData}
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault04">State</label>
                <input
                  type="text"
                  name="state"
                  className="form-control"
                  id="validationDefault04"
                  placeholder="State"
                  onChange={getinputData}
                  required
                />
              </div>
              <div className="col-md-3 mb-3">
                <label htmlFor="validationDefault05">Zip</label>
                <input
                  type="text"
                  name="zip"
                  className="form-control"
                  id="validationDefault05"
                  placeholder="Zip"
                  onChange={getinputData}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck2"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck2">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <button className="btn btn-primary" type="submit" onClick={()=> successRegisterInfo()}>
              Register
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
