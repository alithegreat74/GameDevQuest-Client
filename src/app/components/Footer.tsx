import React from "react";
import Image from "next/image";
import TextInput from "./TextInput";
import SeparatorLine from "./SeparatorLine";

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <div className="main_logo">
          <Image src="/logo.svg" alt="logo" width={50} height={52} />
          <span className="camel">G</span>ame<span className="camel">D</span>
          ev
          <span className="camel">Q</span>uest
        </div>
        <div id="footer_links">
          <div className="flex flex_column gap_8">
            <span>QUICK LINKS</span>
            <hr />
            <a href="">All things</a>
            <a href="">There</a>
            <a href="">All the Lessons</a>
          </div>
          <div className="flex flex_column gap_8">
            <span>HELP</span>
            <hr />
            <a href="">Contact Us</a>
            <a href="">Report a Bug</a>
            <a href="">Support</a>
          </div>
          <div className="flex flex_column gap_8">
            <span>COMPANY</span>
            <hr />
            <a href="">About Us</a>
            <a href="">Partnership</a>
          </div>
          <div className="flex flex_column gap_8">
            <span>SOCIAL</span>
            <hr />
            <a href="">GitHub</a>
            <a href="">Linkedin</a>
            <a href="">Telegram</a>
            <a href="">YouTube</a>
          </div>
        </div>
      </div>
        <p><small>Copyright © 2025 <span>G</span>ame<span>D</span>ev<span>Q</span>uest Team</small></p>
    </footer>
  );
};

export default Footer;
