import { useState } from "react";

function Activity({ visiblity, children, onClose }) {
  if (!visiblity) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState("");
  const [modal, setModal] = useState(false);
  return (
    <>
      <h1>Hello world {value}</h1>
      <button onClick={() => setValue(value - 1)}>Kurang</button>
      <button onClick={() => setValue(value + 1)}>Tambah</button>
      <button onClick={() => setValue(value * 2)}>Kali 2</button>
      <button onClick={() => setValue(value ** 2)}>Pangkat 2</button>

      <h2>{text}</h2>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={() => setText("")}>Clear</button>

      <button onClick={() => setModal(true)}>Modal</button>

      <Activity visiblity={modal} onClose={() => setModal(false)}>
        <div className="modal-body">
          <h1>Modal</h1>
          <p>Apakah anda yakin ingin keluar ?</p>
          <div className="modal-actions">
            <button className="btn-cancel" onClick={() => setModal(false)}>
              Batal
            </button>
            <button className="btn-confirm" onClick={() => { alert("Berhasil keluar!"); setModal(false); }}>
              Keluar
            </button>
          </div>
        </div>
      </Activity>
    </>
  );
}
