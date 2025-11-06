import styles from "./page.module.css";
import HomePage from "@/pages/HomePage";
import { userProfile } from "@/config/userProfile";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage userProfile={userProfile} />
    </div>
  );
}
