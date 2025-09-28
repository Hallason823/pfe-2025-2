import styles from "@/app/page.module.css"
import { keys } from "@/tools/hangmanSources"
import { Button } from "@/tools/StyledComponent";

export default function Keyboard () {
    return (
    <div className={styles.wrapperKeyboard}>
      {keys.map((letter) => (
        <Button isactive={true} key={letter} style={{ padding: "1rem", fontSize: "1rem" }}>
          {letter.toUpperCase()}
        </Button>
      ))}
    </div>
    );
}