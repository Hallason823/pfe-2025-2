//import Image from "next/image";
//import styles from "./page.module.css";

import { Profile } from "@/components/Profile"
import { TodoList } from "@/components/TodoList";
import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/Card"
//https://react.dev/learn/passing-props-to-a-component000000000000000000000000
//uuid online
//react.dev/learn/rendering-lists
//npmjs

export default function Home() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile 
      person = {{name: "Katherine Johnson", path: "MK3eW3A"}}
      size={300}
      />
      <hr />
      <TodoList />
      <hr />
      <Avatar/>
    </section>
  );
}
