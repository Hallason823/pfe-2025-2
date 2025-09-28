import styles from "@/app/page.module.css"

export default function HangmanWord () {
    const word = "REACT";
    const guessedLetters = ["s", "T"];
    return (
        <div className={styles.wrapperWords}>
            {word.split("").map((letter, index) => (
                <span className={styles.letterBox} key={index}>
                    <span style={{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>
                        {letter}
                    </span>
                </span>
                ))}
        </div>
    );
}