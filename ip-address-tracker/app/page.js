import styles from "./page.module.css";
import Image from "next/image";
import img from "../public/images/pattern-bg-desktop.png";
export default function Home() {
  return (
    <>
      {/* <img src="/images/pattern-bg-desktop.png"></img> */}
      <Image src={img}></Image>
    </>
  );
}
