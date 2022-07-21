import { React, useState, useEffect } from "react";
import Store from "./components/Store";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//mis Items
function App() {
  const [loading, setLoading] = useState(true);
  const [storeItem, setStoreItem] = useState([
    {
    title: "Cartas de Fuego",
    color: "Azul",
    potencia: 7,
    price: 10,
    image: "https://i.imgur.com/k4PcEsi.png",
    },
    {
      title: "Cartas de Fuego",
      color: "Morado",
      potencia: 6,
      price: 10,
      image: "https://i.imgur.com/XXWngyc.png",
    },
    {
      title: "Cartas de Fuego",
      color: "Amarillo",
      potencia: 2,
      price: 10,
      image: "https://i.imgur.com/YW85vmO.png",
    },
    {
      title: "Cartas de Nieve",
      color: "Rojo",
      potencia: 2,
      price: 10,
      image: "https://i.imgur.com/CquTQxU.png",
    },
    {
      title: "Cartas de Nieve",
      color: "Naranja",
      potencia: 3,
      price: 10,
      image: "https://i.imgur.com/RtK7sWG.png",
    },
    {
      title: "Cartas de Nieve",
      color: "Amarillo",
      potencia: 7,
      price: 10,
      image: "https://i.imgur.com/mtPQbXa.png",
    },
    {
      title: "Cartas de Agua",
      color: "Verde",
      potencia: 2,
      price: 10,
      image: "https://i.imgur.com/mPvXovV.png",
    },
    {
      title: "Cartas de Agua",
      color: "Morado",
      potencia: 4,
      price: 10,
      image: "https://i.imgur.com/mTXJ8rb.png",
    },
    {
      title: "Cartas de Agua",
      color: "Azul",
      potencia: 5,
      price: 10,
      image: "https://i.imgur.com/Fovn0Zh.png",
    },
    {
      title: "Cartas de Agua",
      color: "Amarillo",
      potencia: 10,
      price: 20,
      image: "https://imgur.com/g2jIKoT.png",
    },
  ]);

  useEffect(() => {
    axios.get('').then(({data}) => {
      setLoading(false);
      setStoreItem(data);
    });
  }, [storeItem])

  const StoreView = <Store
    items={storeItem}
    loading={loading}
    onItemAdd={itemData => {
      setStoreItem([...storeItem, itemData])
    }}
  />

  return (
    <div>
      <Store
        items={storeItem}
        loading={loading}
        onItemAdd={itemData => {
          setStoreItem([...storeItem, itemData])
        }}
      />
    </div>
  );
}

export default App;
