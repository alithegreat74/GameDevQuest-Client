"use client";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import Image from "next/image";
import "./dashboard.css";
import Footer from "../components/Footer";
import D3Circular from "../components/D3Circular";
import D3BarChart from "../components/D3BarChart";
import D3Sunburst from "../components/D3Sunburst";
import { useState } from "react";
import LessonCard from "../components/LessonCard";

const Dashboard = () => {
  const [toggle, setToggle] = useState(1);
  const [activeTab, setActiveTab] = useState(1);

  function updateToggle(id: number) {
    setToggle(id);
    setActiveTab(id);
  }

  const activity = [
    { value: 85, label: "Quest 1" },
    { value: 60, label: "Quest 2" },
    { value: 95, label: "Quest 3" },
    { value: 45, label: "Quest 4" },
    { value: 75, label: "Quest 5" },
  ];

  const lessons = {
    name: "Adventure Path",
    children: [
      {
        name: "Main Quests",
        value: 450,
        children: [
          { name: "The Beginning", value: 100, level: "Completed" },
          { name: "Forest Trial", value: 150, level: "In Progress" },
          { name: "Mountain Summit", value: 200, level: "Locked" },
        ],
      },
      {
        name: "Side Quests",
        value: 300,
        children: [
          { name: "Herb Gathering", value: 50, level: "Completed" },
          { name: "Ancient Runes", value: 100, level: "Available" },
          { name: "Lost Artifacts", value: 150, level: "Locked" },
        ],
      },
      {
        name: "Skill Challenges",
        value: 250,
        children: [
          { name: "Combat Training", value: 75, level: "Mastered" },
          { name: "Magic Practice", value: 100, level: "Learning" },
          { name: "Stealth Tests", value: 75, level: "New" },
        ],
      },
    ],
  };
  const progressData = [
    { title: "Main Quests", progress: 75, total: 100, theme: "default" },
  ];
  return (
    <>
      <Header />
      <SeparatorLine text={"DASHBOARD"} />
      <main id="dashboard_main" className="max_width">
        <hgroup>
          <h1 className="text_gradient">Your Journal</h1>
          <p>
            This hallowed hall holds the chronicle of your journey. Here lies
            every quest undertaken and lesson mastered, etched as testament to
            your growing power. Gaze upon the path you've traveled and steel
            yourself for the challenges yet to come.
          </p>
        </hgroup>
        <nav id="tabs" className="merri font_14">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              updateToggle(1);
            }}
            className={activeTab === 1 ? "active" : ""}
          >
            Progress
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              updateToggle(2);
            }}
            className={activeTab === 2 ? "active" : ""}
          >
            Quests
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              updateToggle(3);
            }}
            className={activeTab === 3 ? "active" : ""}
          >
            Lessons
          </a>
        </nav>
        <section id="progress_tab" className={toggle === 1 ? "active_tab" : ""}>
          <div id="level" className="dashboard_thing">
            <h2>Level</h2>
            <div className="flex_center">
              <D3Circular
                progress={65}
                total={100}
                size={140}
                strokeWidth={14}
                theme="default"
              />
            </div>
            <p className="text_center">65/100 XP</p>
          </div>
          <div id="lessons" className="dashboard_thing">
            <h2>lessons</h2>
            <div className="flex_center">
              <D3Sunburst data={lessons} width={140} height={140} />
            </div>
            <p className="text_center">3/9 completed lesson</p>
          </div>
          <div id="activity" className="dashboard_thing">
            <h2>activity</h2>
            <div className="flex_center">
              <D3BarChart data={activity} width={700} height={300} />
            </div>
          </div>
        </section>
        <section
          id="quests_tab"
          className={`flex flex_column ${toggle === 2 ? "active_tab" : ""}`}
        >
          <div id="active_quests" className="dashboard_thing">
            <h2>Active Quests</h2>
            <div>
              <table className="merriweather quests_table">
                <thead className="font_16">
                  <tr>
                    <th>Name</th>
                    <th>Difficulty</th>
                    <th>Reward(s)</th>
                    <th>Tags</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="">Walking deadman in the air</a>
                    </td>
                    <td>-</td>
                    <td className="rewards">100xp - 450xp</td>
                    <td className="quest_tags flex gap_8">
                      <span className="quest_tag">
                        <Image
                          src={"/difficulty2.svg"}
                          alt="Medium difficulty icon"
                          width={16}
                          height={16}
                        />
                        Medium
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="">Walking deadman in the air</a>
                    </td>
                    <td>-</td>
                    <td className="rewards">100xp - 450xp</td>
                    <td className="quest_tags flex gap_8">
                      <span className="quest_tag">
                        <Image
                          src={"/difficulty1.svg"}
                          alt="Easy difficulty icon"
                          width={16}
                          height={16}
                        />
                        Easy
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="">Walking deadman in the air</a>
                    </td>
                    <td>-</td>
                    <td className="rewards">100xp - 450xp</td>
                    <td className="quest_tags flex gap_8">
                      <span className="quest_tag">
                        <Image
                          src={"/difficulty2.svg"}
                          alt="Medium difficulty icon"
                          width={16}
                          height={16}
                        />
                        Medium
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="finished_quests" className="dashboard_thing">
            <h2>Finished Quests</h2>
            <div>
              <table className="merriweather quests_table">
                <thead className="font_16">
                  <tr>
                    <th>Name</th>
                    <th>Difficulty</th>
                    <th>Reward(s)</th>
                    <th>Tags</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="">Walking deadman in the air</a>
                    </td>
                    <td>-</td>
                    <td className="rewards">100xp - 450xp</td>
                    <td className="quest_tags flex gap_8">
                      <span className="quest_tag">
                        <Image
                          src={"/difficulty2.svg"}
                          alt="Medium difficulty icon"
                          width={16}
                          height={16}
                        />
                        Medium
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="">Walking deadman in the air</a>
                    </td>
                    <td>-</td>
                    <td className="rewards">100xp - 450xp</td>
                    <td className="quest_tags flex gap_8">
                      <span className="quest_tag">
                        <Image
                          src={"/difficulty1.svg"}
                          alt="Easy difficulty icon"
                          width={16}
                          height={16}
                        />
                        Easy
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="">Walking deadman in the air</a>
                    </td>
                    <td>-</td>
                    <td className="rewards">100xp - 450xp</td>
                    <td className="quest_tags flex gap_8">
                      <span className="quest_tag">
                        <Image
                          src={"/difficulty2.svg"}
                          alt="Medium difficulty icon"
                          width={16}
                          height={16}
                        />
                        Medium
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="lessons_tab" className={`flex flex_column gap_16 ${toggle === 3 ? "active_tab" : ""}`}>
          <div className="dashboard_thing flex flex_column gap_16">
            <h2>Inprogress Lessons</h2>
              <LessonCard
                lesson={{
                  id: 0,
                  title: "summon spirit",
                  shortDescription:
                    "lets do this and summon some spirit to your unity world",
                  lessonImageUrl: "/lesson.jpg",
                  userStars: 2,
                  minimumRequiredLevel: 4,
                  xp: 56,
                }}
              />
              <LessonCard
                lesson={{
                  id: 0,
                  title: "summon spirit",
                  shortDescription:
                    "lets do this and summon some spirit to your unity world",
                  lessonImageUrl: "/lesson.jpg",
                  userStars: 2,
                  minimumRequiredLevel: 4,
                  xp: 56,
                }}
              />
              <LessonCard
                lesson={{
                  id: 0,
                  title: "summon spirit",
                  shortDescription:
                    "lets do this and summon some spirit to your unity world",
                  lessonImageUrl: "/lesson.jpg",
                  userStars: 2,
                  minimumRequiredLevel: 4,
                  xp: 56,
                }}
              />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
