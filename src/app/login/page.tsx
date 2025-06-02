import React from "react";
import Image from "next/image";
import "./login.css";

import TextInput from "../components/TextInput";
import SeparatorLine from "../components/SeparatorLine";

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
        <form className="flex flex_column" action="">
          <TextInput
            label={"Adventurer Name"}
            placeholder={"Username or Email..."}
            type={"text"}
            inputName={"login_username"}
          />
          <TextInput
            label={"Secret Sigil"}
            placeholder={"Password..."}
            type={"password"}
            inputName={"login_password"}
          />
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
          <SeparatorLine text="or" />
          <a className="secondary_btn " href="#">
            <Image
              src={"/google.svg"}
              alt={"google"}
              width={24}
              height={24}
            ></Image>
            Login with Google
          </a>
        </form>
      </main>
    </>
  );
};

export default Login;
