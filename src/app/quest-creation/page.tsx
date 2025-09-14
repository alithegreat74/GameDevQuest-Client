"use client";

import React from "react";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import MDEditor from "@uiw/react-md-editor";
import TextInput from "../components/TextInput";
import Footer from "../components/Footer";

const Lesson = () => {
  const [value, setValue] = React.useState<string>("");

  const handleEditorChange: React.Dispatch<React.SetStateAction<string>> = (
    newValue
  ) => {
    setValue(newValue || "");
  };

  return (
    <>
      <Header />
      <SeparatorLine text={"Quest Creation"} />
      <main className="max_width">
        <hgroup>
          <h1 className="text_gradient">Forge Quest</h1>
          <p>
            Design a challenge, set the rewards, and release it into the world
            for other adventurers to undertake.
          </p>
        </hgroup>
        <section id="quest_creation">
          <TextInput
            label={"Quest Title"}
            placeholder={"Title..."}
            type={"text"}
            inputName={"quest-title"}
          />
          <div id="mdeditor" className="flex flex_column gap_8">
            <label htmlFor="" className="text_gradient">
              Quest Body
            </label>
            <MDEditor
              value={value}
              onChange={handleEditorChange}
              height={400}
            />
          </div>
          <div id="quest_buttons">
            <button className="secondary_btn">Cancel</button>
            <button className="main_btn">Submit</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Lesson;
