import { wrapperWords } from "@/tools/hangmanSources";

export default function HangmanWord () {
    const word = "REACT";
    const guessedLetters = ["s", "T"];
    return (
        <div style={wrapperWords}>
            {word.split("").map((letter, index) => (
                <span style={{ borderBottom: "0.1rem solid black" }} key={index}>
                <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}> {letter} </span>
                </span>
                ))}
        </div>
    );
}