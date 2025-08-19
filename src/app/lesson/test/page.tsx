import React from "react";
import Header from "../../components/Header";
import SeparatorLine from "../../components/SeparatorLine";
import Image from "next/image";

import "./test.css";

const Lesson = () => {
  return (
    <>
      <Header />
      <SeparatorLine text={"LESSON 1 - TEST"} />
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
              <p className="eyebrow_text">Main Test</p>
              <h1 className="text_gradient">Summoning Sprites with Unity</h1>
            </hgroup>
            <progress value={4} max={10}></progress>
          </div>
        </section>
      </main>
    </>
  );
};

export default Lesson;
