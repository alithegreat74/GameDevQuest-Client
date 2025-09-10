'use client';
import React, { useEffect, useState } from "react";
import Menu from "../components/svgs/Menu";
import Image from "next/image";
import axios from "axios";
import { API_URL } from "../../../lib/config";
import refreshSession from "../../../lib/refreshSession";

type XpDto = {
  xp: number,
  levelUpXp: number,
  level: number
};

const Lessons = () => {

  const [serverData, setServerData] = useState<XpDto|null>(null);
  async function fetchDataFromServer(){
    try{
      const response = await axios.get(`${API_URL()}/getxp`, {withCredentials:true});
      setServerData(response.data);
    }
    catch (error: any) {
      if (error.response?.status === 401) {
        const refreshed = await refreshSession();
        if (refreshed) {
          const response = await axios.get(`${API_URL()}/getxp`, {
            withCredentials: true
          });
          setServerData(response.data);
          return;
        }
      }
    }
  }

  useEffect(()=>{ 
    fetchDataFromServer();
  },[])

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
                <span>{serverData!==null?`LVL ${serverData.level}`:'loading...'}</span>
                <div className="flex flex_column">
                  <span>{serverData!==null?`${serverData.xp/serverData.levelUpXp}%`:'loading...'}</span>
                  <small>{serverData!==null?`${serverData.xp}/${serverData.levelUpXp}`:'loading...'}</small>
                </div>
              </div>
              <progress value={serverData!==null?serverData.xp:0} max={serverData!==null?serverData.levelUpXp:0} aria-label="Experience progress"></progress>
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
