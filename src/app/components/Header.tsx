import React from "react";
import Menu from "../components/svgs/Menu";
import Image from "next/image";


const Lessons = () => {
  return (
    <>
      <header id="header" className="flex_between">
        <Menu />
        <a href="#" id="header_profile" className="flex_center gap_16">
          <Image id="header_profile_image" src={"/theMan.png"} alt="profile" width={48} height={48}/>
          <div className="flex flex_column gap_8 merri">
            <p>Man on the Moon</p>
            <span className="font_14">Developer</span>
          </div>
          <Image src={"/dropDown.svg"} alt="drop" width={20} height={7} />
        </a>
      </header>
    </>
  );
};

export default Lessons;
