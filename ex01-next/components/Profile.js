import { getImageUrl } from "./utils.js";

export function Profile( {person, size} ) {
    const profile = getImageUrl({person});
    return (
        <img 
        className="Profile"
        src={profile}
        height={size}
        wifth={size}
        alt={person.name}
        />
    );
}