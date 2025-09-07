import React from "react";
import Menu from "../components/svgs/Menu";
import Image from "next/image";

const Lessons = () => {
  return (
    <>
      <header id="header" className="flex_between">
        <Menu />
        <div id="header_profile" className="flex_center gap_16">
          <Image
            id="header_profile_image"
            src={"/theMan.png"}
            alt="profile"
            width={48}
            height={48}
          />
          <div className="flex flex_column gap_8 merri">
            <p>Man on the Moon</p>
            <span className="font_14">Developer</span>
          </div>
          <Image src={"/dropDown.svg"} alt="drop" width={20} height={7} />
          <div id="header_profile_dropdown">
            <div className="flex flex_column gap_16">
              <div className="flex_between">
                <span>LVL 4</span>
                <div className="flex flex_column">
                  <span>30%</span>
                  <small>30/100</small>
                </div>
              </div>
              <progress value={30} max={100} aria-label="Experience progress"></progress>
              <a href="#" className="main_btn hover">
                profile
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Lessons;
