import { useState } from "react";
import Store from "./components/Store";

function App() {
  const [storeItem, setStoreItem] = useState([
    {
    tittle: "Cartas de Fuego",
    price: 10,
    },
    {
      tittle: "Cartas de Agua",
      price: 20,
    },
    {
      tittle: "Cartas de Nieve",
      price: 30,
    },
  ]);


  return (
    <div>
      <Store items={storeItem} onItemAdd={itemData => {
        console.log("Data", itemData);
      }} />
    </div>
  );
}

export default App;
