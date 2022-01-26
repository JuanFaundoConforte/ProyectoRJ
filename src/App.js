import "./App.css";
import ItemDetailConrainer from "./componentes/ItemDetailContainer/ItemDetailConrainer";
import ItemListContainer from "./componentes/ItemsLisConteiner/ItemListContainer";
import Navbar from "./componentes/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <div className=" card-group justify-content-center">
        <ItemListContainer />
      </div>
      <hr></hr>
      <div className="card-group justify-content-center">
        <ItemDetailConrainer />
      </div>
    </div>
  );
}

export default App;
