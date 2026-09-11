import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./intro";
import Projects from "./projects";
import Experience from "./experience";
import { GitHubCalendar } from "react-github-calendar";
import GalleryBox from "./gallerybox";

export default function Home() {
  return (
    <>
      <Intro />
      <Projects />
      <div className={styles.galleryboxcontainer}>
        <GalleryBox />
      </div>
      <Experience />
    </>
  );
}
