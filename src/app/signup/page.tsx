'use client';
import React, { useState } from "react";
import Image from "next/image";
import "../style/LoginSignup.css";
import "./login.css";
import TextInput from "../components/TextInput";
import SeparatorLine from "../components/SeparatorLine";
import axios from "axios";
import { API_URL } from "../../../lib/config";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [usernameInputText, setUsernameInputText] = useState("");
  const [passwordInputText, setPasswordInputText] = useState("");
  const [confirmPasswordInputText, setConfirmPasswordInputText] = useState("");
  //TODO: We need a dialogue system that pops dialogues when needed
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (confirmPasswordInputText !== passwordInputText)
      return;
    axios.post(`${API_URL()}/signup`, {
      UserIdentifier: usernameInputText,
      Password: passwordInputText
    }, {
      withCredentials: true
    }).then((response) => {
      router.push('lessons');
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <>
      <header>
        <div className="main_logo">
          <Image src="/logo.svg" alt="logo" width={50} height={52} />
          <span className="camel">G</span>ame<span className="camel">D</span>
          ev
          <span className="camel">Q</span>uest - <h1>Signup</h1>
        </div>
      </header>
      <main id="login_page">
        <h2 className="text_gradient">Every Hero Has a Beginning. <br /> <span>Let The Scrolls Record Yours.</span></h2>
        <form className="flex flex_column" action="" onSubmit={submit}>
          <TextInput
            label={"Realm of Contact"}
            placeholder={"Enter your Email..."}
            type={"text"}
            inputName={"signup_username"}
            inputText={usernameInputText}
            setInputText={setUsernameInputText}
          />
          <TextInput
            label={"Create a Sigil"}
            placeholder={"Password..."}
            type={"password"}
            inputName={"signup_password"}
            inputText={passwordInputText}
            setInputText={setPasswordInputText}
          />
          <TextInput
            label={"Repeat the Sigil"}
            placeholder={"Confirm Password..."}
            type={"password"}
            inputName={"signup_confirm_password"}
            inputText={confirmPasswordInputText}
            setInputText={setConfirmPasswordInputText}
          />
          <p className="text_gradient merri font_14">
            Forgot your password?
            <a className="purple_link" href="#">
              Seek the Oracle
            </a>
          </p>
          <input
            className="main_btn hover w-full mediaval"
            type="submit"
            value={"ENTER THE GUILD"}
          />
          <p className="text_gradient merri font_14 text_center">
            Already a member of the guild?
            <a className="purple_link" href="/login">
              Login
            </a>
          </p>
          <SeparatorLine text="or" />
          <a className="secondary_btn hover w-full" href="#">
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

export default Signup;
