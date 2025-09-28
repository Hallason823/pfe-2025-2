import styles from "@/app/page.module.css"
import StyledComponent from "@/tools/StyledComponent";
import { hangmanParts } from "@/tools/hangmanData";

export default function HangmanDrawing({ numberOfGuesses }) {
    return (
        <div className={styles.hangmanDrawingWrapper}>
            {hangmanParts.slice(0, 4+numberOfGuesses).map((hangmanPartsProps) => (<StyledComponent key={hangmanPartsProps.id} {...hangmanPartsProps} />))}
        </div>
    );
}