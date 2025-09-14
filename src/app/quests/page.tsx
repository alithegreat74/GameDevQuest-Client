"use client";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import Image from "next/image";
import "./quests.css";
import Footer from "../components/Footer";

const Lessons = () => {
  return (
    <>
      <Header />
      <SeparatorLine text={"QUESTS"} />
      <main className="max_width">
        <hgroup>
          <h1 className="text_gradient">Quests Board</h1>
          <p>
            Heed the call, brave adventurer! Guilds across the land seek aid
            with these tasks. Glory and treasure await those bold enough to
            succeed.
          </p>
        </hgroup>
        <nav id="tabs" className="merri font_14">
          <a href="#" className="active">
            All Quests
          </a>
          <a href="#">In-Progress</a>
          <a href="#">Completed</a>
        </nav>
        <section id="quests">
          <table id="quests_table" className="merriweather">
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
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Lessons;
