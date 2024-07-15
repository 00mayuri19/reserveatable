import React from "react";
import "./Reserve a table.css";
const Reserve=()=>{
    return (
        <div className="contact-form" id="contact">
      <div className="w-left">
        <div className="awesome">
          <span className="span">Reserve a Table</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="c-right">
        <form>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="No of people" className="user" placeholder="number of people"/>
          <button for="occasion"><h1>Occasion</h1></button>
   <select id="occasion">
      <option className="o"><h2>Birthday</h2></option>
      <option className="o"><h2>Anniversary</h2></option>
      <option className="o"><h2>Engagement</h2></option>
   </select>
          <input type="datetime-local"name="user-date" className="user"placeholder="Select Date Of Booking"/>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
    );
};
export default Reserve;
