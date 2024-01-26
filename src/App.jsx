import Staff from "./components/Staff";

function App() {
  return <div className="Container">
    <h3>Data Mahasiswa</h3>
    <ul>
      <li>Khalid Mahfudh : 150504044</li>
      <li>John Doe : 150504064</li>
      <li>Balmond : 150504012</li>
    </ul>
    <Staff/>
  </div>;
}

export default App;