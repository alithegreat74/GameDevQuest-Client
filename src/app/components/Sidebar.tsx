import React from "react";
import Image from "next/image";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <div className="main_logo">
        <Image src="/logo.svg" alt="logo" width={45} height={46} />
        <span className="camel">G</span>
        <span className="camel">D</span>
        <span className="camel">Q</span>
      </div>
      <nav id="sidebar_links" className="flex flex_column">
        <a className="sidebar_logout" href="/test">Logout</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/quest-creation">Quest Creation</a>
        <a href="/login">Login</a>
        <a href="/signup">Signup</a>
        <a href="/lessons">Lessons</a>
        <a href="/lesson">Lesson</a>
        <a href="/quests">Quests</a>
        <a href="/quest">Quest</a>
        <a href="/test">Test</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
