import React from "react";
import Image from "next/image";
import Star from "../components/Star";

export type LessonCardDto = {
  id:number,
  title: string,
  shortDescription: string,
  lessonImageUrl:string,
  userStars:number,
  minimumRequiredLevel:number,
  xp: number
}


const LessonCard = ({lesson}:{lesson:LessonCardDto}) => {
  return (
    <div className="lesson_card">
      <Image
        src={lesson.lessonImageUrl}
        alt={"Summoning Sprite with Unity"}
        width={300}
        height={200}
      />
      <div className="lesson_details flex flex_column justify_between">
        <div className="flex justify_between">
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
          <div className="lesson_stars flex_center">
            <Star rating={lesson.userStars} />
          </div>
        </div>
        <h2>{lesson.title}</h2>
        <p>
          {lesson.shortDescription}
        </p>
        <div className="lesson_bottom flex justify_between align_end">
          <div className="quest_tags flex gap_16">
            <span className="quest_tag">
              <Image
                src={"/quest_level.svg"}
                alt={"required reward"}
                width={20}
                height={20}
              />
              Level {lesson.minimumRequiredLevel}
            </span>
            <span className="quest_tag">
              <Image
                src={"/quest_reward.svg"}
                alt={"reward"}
                width={20}
                height={20}
              />
              {lesson.xp}xp
            </span>
          </div>
          <button className="main_btn">
            <Image src={"/stabbed-note.svg"} alt={"quest"} width={20} height={20} />
            Start Quest
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
