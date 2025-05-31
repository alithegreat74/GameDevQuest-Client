import React from "react";
import Image from "next/image";
import "./login.css";

import TextInput from "../components/TextInput";

const Login = () => {
  return (
    <>
      <header>
        <div className="main_logo">
          <Image src="/logo.svg" alt="car model" width={50} height={52} />
          <span className="camel">G</span>ame<span className="camel">D</span>
          ev
          <span className="camel">Q</span>uest - <h1>Login</h1>
        </div>
      </header>
      <main id="login_page">
        <h2 className="text_gradient">Only The Worthy May Enter</h2>
        <form action="/">
          <TextInput></TextInput>
        </form>
      </main>
    </>
  );
};

export default Login;
