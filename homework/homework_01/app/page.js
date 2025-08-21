//import Image from "next/image";
//import styles from "./page.module.css";

import { Profile } from "@/components/Profile"

export default function Home() {
  return (
    <section style={{ textAlign: 'center' }}>
      <h1>Site created for the Front-End Programming course</h1>
      <hr />
      <Profile />
    </section>
  );
}