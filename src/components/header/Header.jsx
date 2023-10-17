import React, { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";
import "./style.scss";
const Header = () => {
  const [show, setShow] = useState("top");
  const [scrollYEnd, setScrollYEnd] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const HeaderController = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > scrollYEnd && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
      setScrollYEnd(window.scrollY);
    } else {
      setShow("top");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", HeaderController);
    return () => {
      window.removeEventListener("scroll", HeaderController);
    };
  }, [scrollYEnd]);

  const handleSearchQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 0);
    }
  };

  const openSearchBar = () => {
    setShowSearch(true);
    setMobileMenu(false);
  };

  const openMobileMenu = () => {
    setShowSearch(false);
    setMobileMenu(true);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </div>
        <ul className="list_items">
          <li className="list_item" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="list_item" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li className="list_item">
            <HiOutlineSearch onClick={openSearchBar} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearchBar} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="serach for a movie or tv show"
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={handleSearchQuery}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
