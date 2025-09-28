import styles from "@/app/page.module.css"
import { keys } from "@/tools/hangmanData"
import { Button } from "@/tools/StyledComponent";

export default function Keyboard ({ guessedLetters, disabled, onKeyClick }) {
    return (
    <div className={styles.wrapperKeyboard}>
      {keys.map((letter) => {
        const isActive = !guessedLetters.includes(letter);
        const isDisabled = disabled || !isActive;
        return (
          <Button isActive={isActive} key={letter} className={styles.button} disabled={!isActive} disabled={isDisabled} onClick={() => onKeyClick(letter)}>
            {letter.toUpperCase()}
          </Button>
        )
      })}
    </div>
    );
}