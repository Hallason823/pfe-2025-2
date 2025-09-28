import StyledComponent from "@/tools/StyledComponent";
import { hangmanParts } from "@/tools/hangmanSources";

export default function HangmanDrawing() {
    return (
        <div style = {{ position: "relative", display : "flex", flexDirection: "column", alignItems: "center"}}>
            {hangmanParts.map((hangmanPartsProps) => (<StyledComponent key={hangmanPartsProps.id} {...hangmanPartsProps} />))}
        </div>
    );
}