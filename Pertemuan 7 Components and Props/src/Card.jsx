export default function Card(props) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "12px",
        padding: "12px",
        marginBlock: "10px",
      }}
    >
      <h2>{props.name}</h2>
      <img src={props.image} alt="" width={200} height={200} />
      <p>{props.description}</p>
      <h4>Award</h4>
      <ol>
        {props.awards.map((item) => (
          <li>{item}</li>
        ))}
      </ol>

      <button
        onClick={() => alert(`${props.name}\n${props.description}`)}
        style={{ marginTop: "10px" }}
      >
        Show Detail
      </button>
    </div>
  );
}
