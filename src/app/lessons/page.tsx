import React from "react";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";

import "./lessons.css";
import Image from "next/image";

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
        <section id="lessons_container" className="flex flex_column">
          <div className="lesson_card">
            <Image
              src={"/Lesson.jpg"}
              alt={"Summoning Sprite with Unity"}
              width={300}
              height={200}
            />
            <div className="lesson_details">
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
                <span className="lesson_tag">
                  <Image
                    src={"/difficulty2.svg"}
                    alt={"difficulty1"}
                    width={20}
                    height={20}
                  />
                  Medium
                </span>
              </div>
              <h2>Summoning Sprites with Unity</h2>
              <div className="lesson_progress flex">
                <progress value={40} max={100}></progress> 40% Completed
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit accusamus quo quam, quibusdam dolores quae vero
                eveniet iste, voluptas sed laboriosam alias exercitationem!
                Neque cum facere mollitia nemo, ducimus natus.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Lessons;
