//import Image from "next/image";
//import styles from "./page.module.css";

import { Profile } from "@/components/Profile"
import { TOdoList } from "@/components/TodoList";

export default function Home() {
  return (
    <div>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <TOdoList />  
    </div>
  );
}
