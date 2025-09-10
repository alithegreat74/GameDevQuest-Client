"use client";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import "./quests.css";

const Lessons = () => {
  return (
    <>
      <Header />
      <SeparatorLine text={"LESSONS"} />
      <main>
        <hgroup>
          <h1 className="text_gradient">Quests Board</h1>
          <p>
            Welcome, brave adventurer. Here lie the sacred scrolls, each holding
            secrets of game creation — ready to be mastered.
          </p>
        </hgroup>
        <nav id="lessons_tabs" className="merri font_14">
          <a href="#" className="active">
            All Quests
          </a>
          <a href="#">In-Progress</a>
          <a href="#">Completed</a>
        </nav>
        <section id="quests">
          <table id="quests_table" className="merriweather">
            <thead>
              <tr>
                <th>Name</th>
                <th>Difficulty</th>
                <th>Reward(s)</th>
                <th>Tags</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Walking deadman in the air</td>
                <td>-</td>
                <td>100xp - 450xp</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default Lessons;
