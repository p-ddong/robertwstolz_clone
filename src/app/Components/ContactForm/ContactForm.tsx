import React from "react";
import Image from "next/image";
import "./ContactForm.scss";
const ContactForm = () => {
  return (
    <div className="contact_form">
      <div className="img_container ">
        <Image
          src="https://d3k81ch9hvuctc.cloudfront.net/company/Uh942H/images/42d0309b-3cee-42b6-a9bd-631172fd99d3.jpeg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="form">
        <div className="title">
          <h1>Stay in touch!</h1>
          <p>
            {" "}
            Join our community of Loden enthusiasts & take $50 off your first
            coat
          </p>
        </div>
        <form>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Email" />
          <button>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
