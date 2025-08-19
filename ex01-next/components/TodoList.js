const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

export function TodoList() {
    const name = "Hedy Lamarr"
    return (
        <>
        <h1>
            {name}&apos;s Todos for {formatDate(today)}
        </h1>
        <img
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr"
        className="photo"
        />
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse smart movies</li>
            <li>Improve the spectrum technology</li>
        </ul>
        </>
    );
}