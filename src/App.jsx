import "./App.css";
export default function App() {
  const today = new Date();
  const oy = today.getMonth()
  const yil = today.getFullYear()
  const sana = today.getDate()
  const random = Math.floor(Math.random() * 100)
  return (
    <div className="div1">
      <div className="card1">
        <h1>
          Hello my name is: <span>Ismoil</span>{" "}
        </h1>
        <h1>
          This is the day: <span>{sana}.{oy}.{yil}</span>
        </h1>
        <h1>A random number from 0 to 100:</h1>
        <h2>{random}</h2>
      </div>
    </div>
  );
}
