import React from "react";
export default function Header() {
  return (
    <header className="header flex items-center ">
      <a href="#" className="header__logo"></a>
      <nav>
        <a href="#">Categories</a>
      </nav>
      <div className="search">
        <i className="fa fa-search" />
        <input type="text" placeholder="Search for anything" />
      </div>
      <nav>
        <a href="#">Udemy for Busineess</a>
        <a href="#">Tech on Udemy</a>
      </nav>
      <div className="header__shopping">
        <a href="#">
          <i className="fa fa-shopping-cart" />
        </a>
        <div className="shopping__hover">
          <div className="shopping__menu p-6 text-center">
            <div className="mb-6">Your cart is empty.</div>
            <a href="#">Keep shopping</a>
          </div>
        </div>
      </div>
      <div>
        <button className="btn-login">Login</button>
        <button className="btn-signup">Sign Up</button>
      </div>
    </header>
  );
}
