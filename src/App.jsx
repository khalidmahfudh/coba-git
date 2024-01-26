import Dosen from "./components/Dosen";
import Mahasiswa from "./components/Mahasiswa";
import Staff from "./components/Staff";

function App() {
  return <div className="Container">
    <Mahasiswa/>
    <Dosen />
    <Staff />
  </div>;
}

export default App;