export function getImageUrl({person, size = "l"}) {
    const full_path = `https://i.imgur.com/${person.path}${size}.jpg`;
    return full_path;
}