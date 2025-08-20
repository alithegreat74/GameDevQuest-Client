import React from "react";
import Header from "../../../components/Header";
import SeparatorLine from "../../../components/SeparatorLine";
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
            <div className="flex_center gap_8">
              <span className="font_16_14">
                <b>4</b>
              </span>
              <progress id="test_progress" value={4} max={10}></progress>
              <span className="font_16_14">10</span>
            </div>
          </div>
        </section>
        <article id="test_section">
          <form action="">
            <p id="question" className="text_read">
              <span>1.</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              inventore quam culpa magni illo architecto dolorem itaque nam
              ipsam odio eligendi perferendis molestiae, quod nobis voluptatem,
              dolor amet magnam et.
            </p>
            <div id="answers" className="flex flex_column">
              <label>
                <input type="radio" name="question1" value="a" />
                <span>Answer A</span>
              </label>
              <label>
                <input type="radio" name="question1" value="b" />
                <span>Answer B</span>
              </label>
              <label>
                <input type="radio" name="question1" value="c" />
                <span>Answer C</span>
              </label>
              <label>
                <input type="radio" name="question1" value="d" />
                <span>Answer D</span>
              </label>
            </div>
          </form>
          <div id="test_buttons" className="flex_center">
            <button className="main_btn">BACK</button>
            <button className="main_btn">NEXT</button>
          </div>
        </article>
      </main>
    </>
  );
};

export default Lesson;
