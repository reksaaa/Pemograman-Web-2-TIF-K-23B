import { book } from "./books";

export default function App() {
  const name = "Muhammad Reksa Ariansyah";
  const age = 20;

  const date = new Date();

  const hours = date.getHours();

  const customStyle = {
    color: "",
  };

  function showAlert() {
    alert(`Hallo nama saya ${name} dan umur saya ${age} tahun`);
  }

  let greeting = "";

  if (hours < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (hours < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }

  return (
    <div>
      <h1 className="title">Hello ini project saya</h1>
      <h1 style={customStyle}>{greeting}</h1>
      <h2>Nama saya {name}</h2>
      <h3>Umur saya {age}</h3>

      {age > 30 ? <h4>Bapak-bapak</h4> : <h4>Remaja</h4>}

      <h2>Books Favorite</h2>

      <ol>
        {book.map((b) => (
          <li key={b.title}>
            <h3>{b.title}</h3>
            <img src={b.img} alt={b.title} width={150} height={200} />
          </li>
        ))}
      </ol>

      <button onClick={showAlert}>Click me</button>
    </div>
  );
}
