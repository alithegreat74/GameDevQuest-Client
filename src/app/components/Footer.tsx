import React from "react";
import Image from "next/image";
import TextInput from "./TextInput";

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
            LINKS
            <hr />
            <a href="">All things</a>
            <a href="">There</a>
            <a href="">All the Lessons</a>
          </div>
          <div className="flex flex_column gap_8">
            FOLLOW US
            <hr />
            <a href="">Instagram</a>
            <a href="">Tweeter</a>
            <a href="">Telegram</a>
            <a href="">YouTube</a>
          </div>
          <div className="flex flex_column gap_8">
            EMAIL UPDATES
            <hr />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              obcaecati.
            </span>
            <form action="">
              <input className="w_fill" type="email" name="footer-email" id="footer_email" />
              <input type="submit" name="footer-submit" id="footer_submit" />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
