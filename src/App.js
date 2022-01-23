import "./App.css";
import ItemListContainer from "./componentes/ItemsLisConteiner/ItemListContainer";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <div className="card-group justify-content-center" >
        <ItemListContainer />
      </div>
    </div>
  );
}

export default App;
