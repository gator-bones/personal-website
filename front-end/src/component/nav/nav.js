import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav-box">
      <h2>NAVIGATION</h2>
      <ul>
        <li>
          <a href="/">
            <img src="./images/buttons/homeNav.png" alt="home" />
          </a>
        </li>
        <li>
          <a href="/about">
            <img src="./images/buttons/aboutNav.png" alt="about" />
          </a>
        </li>
        <li>
          <a href="/friends">
            <img src="./images/buttons/friendsNav.png" alt="friends" />
          </a>
        </li>
        <li>
          <a href="/byf_dni">
            <img src="./images/buttons/interactNav.png" alt="byf_dni" />
          </a>
        </li>
        <li>
          <a href="/guestbook">
            <img src="./images/buttons/guestbookNav.png" alt="guestbook" />
          </a>
        </li>
        <li>
          <a href="/projects">
            <img src="./images/buttons/projectNav.png" alt="projects" />
          </a>
        </li>
        <li>
          <a href="/sitemap">
            <img src="./images/buttons/sitemapNav.png" alt="sitemap" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
