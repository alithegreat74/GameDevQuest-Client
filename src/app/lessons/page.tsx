import React from "react";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";

import "./lessons.css";

const Lessons = () => {
  return (
    <>
      <Header />
      <SeparatorLine text={"LESSONS"} />
      <main>
        <hgroup>
          <h1 className="text_gradient">Hall of Scrolls</h1>
          <p className="font_18">
            Welcome, brave adventurer. Here lie the sacred scrolls, each holding
            secrets of game creation — ready to be mastered.
          </p>
        </hgroup>
        <nav id="lessons_tabs" className="merri font_14">
          <a href="#" className="active">
            All Scrolls
          </a>
          <a href="#">In-Progress</a>
          <a href="#">Completed</a>
        </nav>
      </main>
    </>
  );
};

export default Lessons;
