import React from "react";
import Header from "../../components/Header";
import SeparatorLine from "../../components/SeparatorLine";
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
              <p className="eyebrow_text">Unity Development</p>
              <h1 className="text_gradient">Summoning Sprites with Unity</h1>
              <p className="font_16_14">
                Learn to conjure animated sprites that dance through your world.
                Learn to conjure animated sprites that dance through your world.
              </p>
            </hgroup>
          </div>
        </section>
        <article className="text_read">
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            temporibus commodi alias vero est modi error hic, repellat accusamus
            nesciunt magnam harum labore expedita at. Necessitatibus laboriosam
            repellendus cupiditate perspiciatis! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Voluptatibus, earum illum explicabo
            sed facilis architecto odit hic ducimus aliquid! Blanditiis
            reprehenderit, laborum est sint
          </p>
          <aside className="note">
            <span>Note:</span>
            <p className="text_read">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              asperiores earum eum officia deserunt tempora impedit veritatis a
              perferendis incidunt voluptatem corrupti fugit ex modi placeat,
              itaque blanditiis sed. Eligendi.
            </p>
          </aside>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            voluptate optio minus minima inventore quaerat assumenda pariatur,
            explicabo voluptatibus quia fugit modi at sapiente debitis quae
            recusandae. Maxime, odio! Pariatur. Corporis consequatur repudiandae
            a molestiae dolor reiciendis eum architecto, sunt facilis rerum aut
            sed assumenda voluptatum aperiam cum asperiores. Velit ducimus nobis
            officia expedita magni itaque. Laudantium voluptas tenetur facilis.
          </p>
        </article>
      </main>
    </>
  );
};

export default Lesson;
