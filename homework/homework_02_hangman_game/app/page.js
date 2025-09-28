"use client";

import styles from "./page.module.css";
import HangmanDrawing from "@/components/HangmanDrawing"
import HangmanWord from "@/components/HangmanWord"
import Keyboard from "@/components/Keyboard"
import useHangmanGame from "@/hooks/useHangmanGame";

export default function Home() {
  const { wordToGuess, guessedLetters, incorrectGuesses, addGuessedLetter, isLoser, isWinner, restartGame } = useHangmanGame();
  return (
    <div className={styles.page} style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <h1>Hangman Game</h1>
      {isWinner && (<p className={`${styles.resultMessage} ${styles.winner}`}>Congratulations! You won!</p>)}
      {isLoser && (<p className={`${styles.resultMessage} ${styles.loser}`}>Mission failed! You lost. The word was: <strong>{wordToGuess}</strong></p>)}
      <HangmanDrawing numberOfGuesses={incorrectGuesses.length} />
      <HangmanWord word={wordToGuess} guessedLetters={guessedLetters} />
      <Keyboard guessedLetters={guessedLetters} disables={isLoser || isWinner} onKeyClick={addGuessedLetter} />
      <button onClick={restartGame} className={styles.restartButton}>Restart Game</button>
    </div>
  );
}