import React from "react";
import Footer from "./Footer";

const Faq = () => {
  return (
    <div> 
      <h2 className="faqTittle">FAQ</h2>
      <div className="faqboday">
        <h5>Shipping</h5><hr />
        
      
        We ship worldwide.
        <br />
        <br />
        Shipping Costs :
        <br />
        <br />
         INDIA shipping is Free. Shipping
        for the rest of the world is a flat rate $20.49.
        <br /> <br />
        Delivery Times.
        <br />
        Rest of World: 5 - 21 days.
        <br />
        Please note that delivery of orders paid via PayPal eCheque will take an
        additional 4 to 9 business days to allow for the eCheque transfer
        period.
        <br />
        Depending on your location, import tax and duties may apply. These are
        the responsibility of the recipient. Please check with your local
        customs office for more information.
        <br />
        <br /> <br />
        <h6>Returns</h6><hr />
        <br />
        <b>What is your returns / exchange policy?</b>
        <br />
        Customer satisfaction is important to Own The Night. Any unused / unworn
        shirts can be returned within 14 days of delivery. If a product is
        defective, it will be exchanged for a new product at no additional
        charge. Refund / exchange is not guaranteed and is subject to a review
        of the returned product. Own The Night cannot take responsibility for
        return postage fees, unless you have been shipped the wrong size or
        item. In this case, you will be reimbursed for your return postage fee.
        Please use the Size Guide on each individual product page to make sure
        you get the right size first time round! You might want to consider
        sending it via recorded delivery, as Own The Night cannot take
        responsibility for any returned items which are undelivered.
      </div> <br />
      <Footer />
    </div>
  );
};

export default Faq;
