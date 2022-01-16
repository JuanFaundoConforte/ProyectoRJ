import "./App.css";
import ItemListContainer from "./componentes/Items/ItemListContainer";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <div className="card-group">
        <ItemListContainer
          name="Skis"
          price="$28000"
          description="Skis Carving marca K2"
        />
        <ItemListContainer
          name="Botas Ski"
          price="$13000"
          description="Botas de ski Salomon Flexibles"
        />
        <ItemListContainer
          name="Tabla Snowboard"
          price="$17500"
          description="Tabla Snowboard marca Burton"
        />
      </div>
    </div>
  );
}

export default App;
