import React from "react";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import LessonCard from "../components/LessonCard";

const Lesson = () => {
  return (
    <>
      <Header />
      <SeparatorLine text={"LESSON"} />
      <main>
        <hgroup>
          <h1 className="text_gradient">ُSummoning Sprites with Unity</h1>
          <p className="font_18">
            Learn to conjure animated sprites that dance through your world.
            Learn to conjure animated sprites that dance through your world.
          </p>
        </hgroup>
        <section
          id="lessons_container"
          className="flex flex_column gap_16"
        ></section>
      </main>
    </>
  );
};

export default Lesson;
