import { wrapperKeyboard, keys } from "@/tools/hangmanSources"
import { Button } from "@/tools/StyledComponent";

export default function Keyboard () {
    return (
    <div style={wrapperKeyboard}>
      {keys.map((letter) => (
        <Button isActive={true} key={letter} style={{ padding: "1rem", fontSize: "1rem" }}>
          {letter.toUpperCase()}
        </Button>
      ))}
    </div>
    );
}