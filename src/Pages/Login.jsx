import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
   
    <div>
      <div className="flex justify-between items-center bg-[blue] text-[white]  m -[30px] p-5 border-2 border-[solid_black];">
          {/* Navbar */}
        <p>All Sports</p>
        <p>DECATHLON</p>
        <p>
          <input type="text" placeholder="FREE PROUDUCTS" />
        </p>
        <p>Delivery Location</p>
        <p>Sign In</p>
        <p>My Store</p>
        <Link to="/support">
          <button>Support</button>
        </Link>
        <Link to="/about">
          <button>Wine</button>
        </Link>
        <p>Wishlist</p>
        <p>Cart</p>
      </div>
      {/* Photo Banner  */}
      <section className=" flex justify-between items-center m-5">
        <div>
          <img
            src="https://contents.mediadecathlon.com/p2596951/38f3f538c673c9727862974a8c540f74/p2596951.jpg?format=auto&quality=70&f=320x0"
            alt=""
          />
          <p className=" text-center  ">699 $</p>
        </div>
        <div>
          <img
            src="https://contents.mediadecathlon.com/p2917181/b9f72ce4fd201c7854d388de3b27b076/p2917181.jpg?format=auto&quality=70&f=320x0"
            alt=""
          />
          <p className=" text-center  ">999 $</p>
        </div>
        <div>
          <img
            src="https://contents.mediadecathlon.com/p2273704/45979084bc75f77fb9b7c3a4efc12751/p2273704.jpg?format=auto&quality=70&f=320x0"
            alt=""
          />
          <p className=" text-center  ">499 $</p>
        </div>
      </section>
      {/* Under 99 Sales */}
      <middle>
        <div>
          <li className="flex justify-between items-center p-5  bg-[red] text-[white] ">
            <Link to="/under99">
              <ol>Under 99</ol>
            </Link>
            <Link to="/under199">
              <ol>Under 199</ol>
            </Link>
            <Link to="/under299">
              <ol>Under 299</ol>
            </Link>
            <Link to="/under399">
              <ol>Under 399</ol>
            </Link>
            <Link to="/under499">
              <ol>Under 499</ol>
            </Link>
          </li>
        </div>
      </middle>
    </div>
  );
};

export default Login;
