import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import { signIn, signOut } from "../../../store/actions";

import Logo from "./Logo";
import { Navigation, Links, LoginBtn } from "./styles";

function Nav({ isAuthed, signIn, signOut }) {
  const navigate = useNavigate();
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
      list.current.parentElement.style.borderBottom = "none";
    } else {
      e.target.ariaLabel = "Show Links";
      list.current.classList.add("mobile-links");
      list.current.parentElement.style.borderBottom = "2px solid white";
    }
  };

  const handleSignIn = () => {
    signIn();
    navigate("/");
  };

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  return (
    <Navigation className="middle-flex">
      {isAuthed ? (
        <>
          <button
            aria-label="show links"
            onClick={(e) => handleToggle(e)}
            className="links-toggler"
          >
            ≡
          </button>

          <Logo />

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

          <button aria-label="Logout" onClick={handleSignOut}>
            <img
              src="/assists/images/authed-user.png"
              alt="User pic"
              className="authed-user"
            />
          </button>
        </>
      ) : (
        <>
          <Logo />
          <LoginBtn onClick={handleSignIn}>Login</LoginBtn>
        </>
      )}
    </Navigation>
  );
}

export default connect((state) => ({ isAuthed: state.auth }), {
  signIn,
  signOut,
})(Nav);
