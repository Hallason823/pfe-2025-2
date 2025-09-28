import styles from "@/app/page.module.css"
import StyledComponent from "@/tools/StyledComponent";
import { hangmanParts } from "@/tools/hangmanSources";

export default function HangmanDrawing() {
    return (
        <div className={styles.hangmanDrawingWrapper}>
            {hangmanParts.map((hangmanPartsProps) => (<StyledComponent key={hangmanPartsProps.id} {...hangmanPartsProps} />))}
        </div>
    );
}