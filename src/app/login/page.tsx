import React from "react";
import Image from "next/image";
import "./login.css";

import TextInput from "../components/TextInput";

const Login = () => {
  return (
    <>
      <header>
        <div className="main_logo">
          <Image src="/logo.svg" alt="logo" width={50} height={52} />
          <span className="camel">G</span>ame<span className="camel">D</span>
          ev
          <span className="camel">Q</span>uest - <h1>Login</h1>
        </div>
      </header>
      <main id="login_page">
        <h2 className="text_gradient">Only The Worthy May Enter</h2>
        <form action="">
          <TextInput
            label={"Adventurer Name"}
            placeholder={"Username or Email..."}
            type={"text"}
            inputName={"login_username"}
          ></TextInput>
          <TextInput
            label={"Secret Sigil"}
            placeholder={"Password..."}
            type={"password"}
            inputName={"login_password"}
          ></TextInput>
          <p className="text_gradient merri font_14">
            Forgot your password?
            <a className="purple_link" href="#">
              Seek the Oracle
            </a>
          </p>
          <input
            className="main_btn mediaval"
            type="submit"
            value={"ENTER THE GUILD"}
          />
          <p className="text_gradient merri font_14 text_center">
            Are you a new adventurer?
            <a className="purple_link" href="#">
              SignUp
            </a>
          </p>
          <div className="separator_line flex_center">
            <span className="line_gradient"></span>
          </div>
        </form>
      </main>
    </>
  );
};

export default Login;
