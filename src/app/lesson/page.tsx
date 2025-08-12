import React from "react";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import Image from "next/image";

import "./lesson.css";

const Lesson = () => {
  return (
    <>
      <Header />
      <SeparatorLine text={"LESSON 1"} />
      <main>
        <section id="hero_section" className="flex flex_column gap_16">
          <div id="lesson_img">
            <div className="lesson_tags flex gap_16">
              <span className="lesson_tag">
                <Image
                  src={"/difficulty1.svg"}
                  alt={"difficulty1"}
                  width={20}
                  height={20}
                />
                Easy
              </span>
            </div>
            <hgroup>
              <h1 className="text_gradient">Summoning Sprites with Unity</h1>
              <p className="font_16_14">
                Learn to conjure animated sprites that dance through your world.
                Learn to conjure animated sprites that dance through your world.
              </p>
            </hgroup>
          </div>
        </section>
      </main>
    </>
  );
};

export default Lesson;
