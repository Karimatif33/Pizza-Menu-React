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
    soldOut: true,
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
        <>
          <p></p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We Stile workink on our menu </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : "" }`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHour = 8;
  const closeHour = 23;
  const isOpen = hours >= openHour && hours <= closeHour;
  const timeNow = new Date().toLocaleTimeString();
  return (
    <footer className="footer">
      {
        <Order
          hours={hours}
          openHour={openHour}
          closeHour={closeHour}
          isOpen={isOpen}
          timeNow={timeNow}
        />
      }
    </footer>
  );
}

function Order({ hours, openHour, closeHour, isOpen, timeNow }) {
  return (
    <div className="order">
      {isOpen === true ? (
        <p>we're currently open ! {timeNow} </p>
      ) : (
        <p> sorry we're closed ! {timeNow} : 00 PM</p>
      )}
      <div>
        {isOpen === true ? (
          <p>we're close At {closeHour} : 00 PM </p>
        ) : (
          <p> we're open At {openHour} : 00 AM</p>
        )}
      </div>
      <button className="btn"> Order Now </button>
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
