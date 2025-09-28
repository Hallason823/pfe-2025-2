import styles from "./page.module.css";
import HangmanDrawing from "@/components/HangmanDrawing"
import HangmanWord from "@/components/HangmanWord"
import Keyboard from "@/components/Keyboard"

export default function Home() {
  return (
    <div className={styles.page} style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <h1>Hangman Game</h1>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </div>
  );
}
