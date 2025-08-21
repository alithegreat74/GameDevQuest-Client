import React from "react";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import LessonCard from "../components/LessonCard";

import "./lessons.css";

const Lessons = () => {
  return (
    <>
      <Header />
      <SeparatorLine text={"LESSONS"} />
      <main>
        <hgroup>
          <h1 className="text_gradient">Hall of Scrolls</h1>
          <p>
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
        <section id="lessons_container" className="flex flex_column gap_16">
          <LessonCard />
          <LessonCard />
        </section>
      </main>
    </>
  );
};

export default Lessons;
