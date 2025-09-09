'use client';
import React, { useEffect, useState, ReactNode } from "react";
import Header from "../components/Header";
import SeparatorLine from "../components/SeparatorLine";
import ReactMarkdown, {Components} from "react-markdown";
import Image from "next/image";
import "./lesson.css";
import Footer from "@/app/components/Footer";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { API_URL } from "../../../lib/config";
import refreshSession from "../../../lib/refreshSession";
import rehypeRaw from "rehype-raw";
import { WarningCard, NoteCard, ErrorCard, Props } from "../components/MarkdownCards";
import rehypeSanitize from "rehype-sanitize";
type LessonDto = {
  id:number,
  title: string,
  description: string,
}
interface CustomComponents extends Components {
  warning?: React.ComponentType<{ children?: React.ReactNode }>;
  note?: React.ComponentType<{ children?: React.ReactNode }>;
  error?: React.ComponentType<{ children?: React.ReactNode }>;
}
const Lesson = () => {
  const markdownComponents: CustomComponents = {
  img: ({ node, ...props }) => (
    <img {...props} style={{ maxWidth: "100%", height: "auto" }} />
  ),
  iframe: ({ node, ...props }) => (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <iframe {...props} style={{ aspectRatio: "16 / 9", border: 0 }} />
    </div>
  ),
  warning: ({ children }) => <WarningCard>{children}</WarningCard>,
  note: ({ children }) => <NoteCard>{children}</NoteCard>,
  error: ({ children }) => <ErrorCard>{children}</ErrorCard>,
};
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
          rehypePlugins={[rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
          components={markdownComponents}
        >
          {
            useServerData?
              pageData!==null?pageData.description:"Error while getting data from server":
              `# Markdown Example Block\n\nThis is a paragraph explaining the content. You can write **bold text** and *italic text* here.  \n\n## Image Example\n\n![Sample Image](/Lesson1.jpg)\n\n## Video Example\n\n<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" \ntitle=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; \nclipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n## Lists\n\n- Item one\n- Item two\n- Item three\n\n1. First step\n2. Second step\n3. Third step\n\n## Blockquote\n\n> This is a blockquote example.\n\n## Warning Example\n<Warning>Be careful</Warning>\n\n## Error Example\n<Error>Be careful</Error>\n\n## Note Example\n<Note>Be careful</Note>`
          }
        </ReactMarkdown>
      </main>
      <Footer />
    </>
  );
};

export default Lesson;
