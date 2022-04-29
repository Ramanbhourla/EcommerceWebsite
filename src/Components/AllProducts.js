import React from "react";
import { useDispatch } from "react-redux";


const AllProducts = ({ ProductData }) => {
  const dispatch = useDispatch();
  
  const getCartItem =(products)=>{
    // console.log(products)

      return dispatch({type: 'ADD_TO_CART', payload:products});
  }

  return (
    <div className="container">  
      <div className="row">
        {ProductData.map((curEle) => {
          return (
              <div className="col-md-2" key={curEle.id} >
                <div className="m-2-p-2">
                  <img
                     className="card-img-top"
                    src={curEle.imgsrc} 
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{curEle.name}</h5>
                    <p>{curEle.discription}</p>
                    <span className="card-text">{curEle.price}</span><span className="size"><select>
                      <option value={'L'}>M</option>
                      <option value={'L'}>L</option>
                      <option value={'L'}>XL</option>
                      <option value={'L'}>XXL</option>
                    </select></span>
                    
                    <div className="wishlist" onClick={()=> getCartItem(curEle)}>ADDCART</div>
                  </div>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProducts;
