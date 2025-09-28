"use client";

import { useEffect, useState } from "react";
import { words } from "@/tools/hangmanData";

function checkGameResult(wordToGuess, guessedLetters, incorrectGuesses) {
    const isLoser = incorrectGuesses.length >= 6;
    if (!wordToGuess) return {isLoser, isWinner: false};
    const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter));
    return {isLoser, isWinner};
}

export default function useHangmanGame() {
    const [wordToGuess, setWordToGuess] = useState(null);
    const [guessedLetters, setGuessedLetters] = useState([]);
    useEffect(() => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
    ''  }, []);
    const incorrectGuesses = guessedLetters.filter((letter) => wordToGuess && !wordToGuess.includes(letter));
    const { isLoser, isWinner } = checkGameResult(wordToGuess, guessedLetters, incorrectGuesses);
    const addGuessedLetter = (letter) => {
    if (!letter.match(/^[A-Z]$/) || guessedLetters.includes(letter) || isWinner || isLoser) return;
    setGuessedLetters((prev) => [...prev, letter]);
    };
    const restartGame = () => {
        setWordToGuess(words[Math.floor(Math.random() * words.length)]);
        setGuessedLetters([]);
    };
    useEffect(() => {
        const handler = (e) => {
            const key = e.key.toUpperCase();
            if (!key.match(/^[A-Z]$/)) return;
            e.preventDefault();
            addGuessedLetter(key);
        };
        document.addEventListener("keypress", handler);
        return () => {document.removeEventListener("keypress", handler);};
    }, [guessedLetters]);
    return {wordToGuess, guessedLetters, incorrectGuesses, addGuessedLetter, isLoser, isWinner, restartGame};
}