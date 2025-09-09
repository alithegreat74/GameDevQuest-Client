'use client';
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import ReactMarkdown from "react-markdown";

import "./lesson.css";
import Footer from "@/app/components/Footer";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { API_URL } from "../../../lib/config";
import refreshSession from "../../../lib/refreshSession";

type LessonDto = {
  id:number,
  title: string,
  description: string,
}

const Lesson = () => {
  const useServerData:boolean=false;
  const searchParams = useSearchParams();
  const lessonId = searchParams.get('id');
  const [pageData,setPageData] = useState<LessonDto | null>(null);

  async function getDataFromServer(){
    if(lessonId===null || lessonId === '')
      return;

    try{
      const response = await axios.get(`${API_URL()}/getlesson/${lessonId}`, {withCredentials:true});
      setPageData(response.data);
    }
    catch(e:any)
    {
      if (e.response?.status === 401) {

        const refreshed = await refreshSession();
        if (refreshed) {
          try{
            const response = await axios.get(`${API_URL()}/getlesson/${lessonId}`, {
            withCredentials: true
          });
          setPageData(response.data);
          }
          catch(e:any){
            console.log(e);
          }
          return;
        }
      }
    }
  }
  useEffect(()=>{
    getDataFromServer();
  },[lessonId])


  return (
    <>
      <Header />
      <SeparatorLine text={!useServerData?"Lesson 1":pageData!==null?pageData.title:"invalid title"} />
      <main>
        <ReactMarkdown 
          components={{
            img: ({node, ...props}) => (
              <img
                {...props}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            ),
          }}
        >
          {
            useServerData?
              pageData!==null?pageData.description:"Error while getting data from server":
              `# Lorem Ipsum\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  \nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  \n\n## Subheading\n\n![Sample Image](/Lesson1.jpg)\n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  \nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n- Item one\n- Item two\n- Item three\n\n1. First step\n2. Second step\n3. Third step\n\n**Bold text** and *italic text* for emphasis.\n\n> This is a blockquote example.`
          }
        </ReactMarkdown>
      </main>
      <Footer />
    </>
  );
};

export default Lesson;
