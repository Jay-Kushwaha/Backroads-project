import { sociallinks, pagelinks } from "../data";
import React from "react";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pagelinks.map((e) => {
          const { id, href, text } = e;
          return (
            <li key={id}>
              <a href={href} rel="noreferrer" className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {sociallinks.map((e) => {
          const { id, href, icon } = e;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
