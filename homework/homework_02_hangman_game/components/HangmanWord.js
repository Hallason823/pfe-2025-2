"use client";

import styles from "@/app/page.module.css"

export default function HangmanWord ({ word, guessedLetters }) {
    if (!word) {return <div className={styles.loading}>Loading...</div>;}
    return (
        <div className={styles.wrapperWords}>
            {word.split("").map((letter, index) => (
                <span className={styles.letterBox} key={index}>
                    {guessedLetters.includes(letter.toUpperCase()) ? letter : "-"}
                </span>
                ))}
        </div>
    );
}