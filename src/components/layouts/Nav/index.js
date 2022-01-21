import React from "react";

import { Navigation, Links } from "./styles";

export default function Nav() {
  const list = React.useRef();

  const linksText = [
    "home",
    "search",
    "watchlist",
    "originals",
    "movies",
    "series",
  ];

  const handleToggle = (e) => {
    if (list.current.classList.contains("mobile-links")) {
      e.target.ariaLabel = "Hide Links";
      list.current.classList.remove("mobile-links");
    } else {
      e.target.ariaLabel = "Show Links";
      list.current.classList.add("mobile-links");
    }
  };

  return (
    <Navigation className="middle-flex">
      <button
        aria-label="show links"
        onClick={(e) => handleToggle(e)}
        className="links-toggler"
      >
        ≡
      </button>

      <a href="/">
        <img
          src="/assists/images/logo.svg"
          alt="Disney logo"
          className="logo"
        />
      </a>

      <Links className="links middle-flex" ref={list}>
        {linksText.map((link) => (
          <li key={link}>
            <a href="/" className="middle-flex">
              <img src={`/assists/images/icons/${link}-icon.svg`} alt="" />
              <span>{link.toUpperCase()}</span>
            </a>
          </li>
        ))}
      </Links>

      <a href="/">
        <img
          src="/assists/images/authed-user.png"
          alt="User pic"
          className="authed-user"
        />
      </a>
    </Navigation>
  );
}
