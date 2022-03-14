import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>
        <Link to="/">voca</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">
          add voca
        </Link>
        <Link to="/create_day" className="link">
          add date
        </Link>
      </div>
    </div>
  );
}

export default Header;
