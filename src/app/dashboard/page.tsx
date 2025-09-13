"use client";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import Image from "next/image";
import "./dashboard.css";
import Footer from "../components/Footer";
import D3Circular from "../components/D3Circular";
import D3BarChart from "../components/D3BarChart";
import D3Sunburst from "../components/D3Sunburst";

const Dashboard = () => {
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
    { title: "Combat Skills", progress: 45, total: 100, theme: "fire" },
    { title: "Magic Arts", progress: 30, total: 100, theme: "arcane" },
    { title: "Exploration", progress: 85, total: 100, theme: "nature" },
    { title: "Crafting", progress: 60, total: 100, theme: "ice" },
  ];
  return (
    <>
      <Header />
      <SeparatorLine text={"DASHBOARD"} />
      <main className="max_width">
        <hgroup>
          <h1 className="text_gradient">Your Journal</h1>
          <p>
            This hallowed hall holds the chronicle of your journey. Here lies
            every quest undertaken and lesson mastered, etched as testament to
            your growing power. Gaze upon the path you've traveled and steel
            yourself for the challenges yet to come.
          </p>
        </hgroup>
        <nav id="lessons_tabs" className="merri font_14">
          <a href="#" className="active">
            Progress
          </a>
          <a href="#">Quests</a>
          <a href="#">Lessons</a>
        </nav>
        <section id="dashboard">
          <div id="level">
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
          <div id="lessons">
            <h2>lessons</h2>
            <div className="flex_center">
              <D3Sunburst data={lessons} width={140} height={140} />
            </div>
            <p className="text_center">3/9 completed lesson</p>
          </div>
          <div id="activity">
            <h2>activity</h2>
            <div className="flex_center">
              <D3BarChart data={activity} width={700} height={300} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
