'use client';
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import LessonCard from "../components/LessonCard";
import axios from "axios";
import "./lessons.css";
import { API_URL } from "../../../lib/config";
import { useAuth } from "../components/AuthContext";
import { LessonCardDto } from "../components/LessonCard";

const Lessons = () => {
  const useServerData:boolean = false;
  const [pageData, setPageData] = useState<LessonCardDto[] | null>(null);
  const [noDataText, setNoDataText] = useState("Loading...")
  const { accessToken } = useAuth();
  const dummyLesson:LessonCardDto={
    id:1,
    title:'test',
    shortDescription:'description',
    lessonImageUrl:'/Lesson1.jpg',
    userStars:3,
    xp:5,
    minimumRequiredLevel:1
  }
  async function fetchDataFromServer() {
    axios.get(`${API_URL()}/getalllessons`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then((response) => {
      setPageData(response.data);
    }).catch((error) => {
      setNoDataText(`There was a problem on gettin the data from the server ${error}`);
    })
  }
  useEffect(() => {
    if(!useServerData)
      return;
    if(!accessToken)
    {
      setNoDataText("Please Log in or sign up");
      setPageData(null);
      return;
    }
    fetchDataFromServer();
  }, [accessToken,useServerData])

  if (pageData == null && useServerData) {
    return (
      <p>{noDataText}</p>
    );
  }
  return (
    <>
      <Header />
      <SeparatorLine text={"LESSONS"} />
      <main>
        <hgroup>
          <h1 className="text_gradient">Hall of Scrolls</h1>
          <p>
            Welcome, brave adventurer. Here lie the sacred scrolls, each holding
            secrets of game creation — ready to be mastered.
          </p>
        </hgroup>
        <nav id="lessons_tabs" className="merri font_14">
          <a href="#" className="active">
            All Scrolls
          </a>
          <a href="#">In-Progress</a>
          <a href="#">Completed</a>
        </nav>
        <section id="lessons_container" className="flex flex_column gap_16">
          {
            useServerData?
            pageData?.map((lesson: LessonCardDto) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))
            :
            <LessonCard key={dummyLesson.id} lesson={dummyLesson} />
          }
        </section>
      </main>
    </>
  );
};

export default Lessons;
