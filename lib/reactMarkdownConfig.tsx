import { Components } from "react-markdown";
import { WarningCard, NoteCard, ErrorCard, Props } from "@/app/components/MarkdownCards";
export const sanitizeSchema = {
  tagNames: [
    'a','p','strong','em','ul','ol','li','blockquote','code','pre',
    'img','iframe','h1','h2','h3','h4','h5','h6','warning','note','error'
  ],
  attributes: {
    a: ['href','title','target','rel'],
    img: ['src','alt','title','width','height','loading','decoding'],
    iframe: [
      'src','title','allow','allowfullscreen','referrerpolicy','loading',
      'width','height','frameborder'
    ],
    warning: [], note: [], error: []
  },
  protocols: {
    a: { href: ['http','https','mailto','tel'] },
    img: { src: ['http','https','data'] },
    iframe: { src: ['https'] }
  }
} as const;
interface CustomComponents extends Components {
  warning?: React.ComponentType<{ children?: React.ReactNode }>;
  note?: React.ComponentType<{ children?: React.ReactNode }>;
  error?: React.ComponentType<{ children?: React.ReactNode }>;
}
export const markdownComponents: CustomComponents = {
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