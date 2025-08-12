import Image from "../../node_modules/next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <nav className="flex_center gap_16 purple_link" style={{padding: "1rem"}}>
        <a href="/login">login</a>
        <a href="/signup">signup</a>
        <a href="/lessons">lessons</a>
        <a href="/lesson">lesson</a>
      </nav>
    </main>
  );
}
