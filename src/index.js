import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1>Fast Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2> Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ): <p>We Stile workink on our menu </p>}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHoure = 23 ;
  const isOpen = hour >= openHour && hour <= closeHoure;
  const timeNow = new Date().toLocaleTimeString()
  // if (hour >= openHour && hour <= closeHoure) alert("we're currently open !");
  // else alert("sorry we're closed");
  return (
    <footer className="footer">
      {
        /* {new Date().toLocaleTimeString()}. We're currnetly open ! */
        <div className="order">
          {/* {(isOpen === true && (
            <p>we're currently open !{openHour} : 00 AM </p>
          )) ||
            (isOpen !== true && (
              <a>sorry we're closed ! {closeHoure} : 00 PM</a>
            ))} */}
            {
             
             
             isOpen === true ? <p>we're currently open ! {timeNow} : 00 AM </p> : <a> sorry we're closed ! {timeNow} : 00 PM</a>

            }
           <div>
           {
              isOpen === true ? <p>we're close At {closeHoure} : 00 AM </p> : <a> we're open At {openHour} : 00 AM</a>

            }
            </div> 
          <button className="btn"> Order Now </button>
        </div>
      }
    </footer>
  );
  // return React.createElement('footer', null, "We're currnetly open !")
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
