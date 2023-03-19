import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [products, setProducts] = React.useState([]);


  React.useEffect(() => {
    fetch('/products') //URL de listado de productos
    .then((response) => response.json())
    .then((data) => {
       console.log(data);
       setProducts(data); //
    })
    .catch((err) => {
       console.log(err.message);
    });  }, []);


  console.log("Products", products);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {products.map((product) => (<div>{product.name}</div>))}
      </header>
    </div>
    );
}

export default App;
