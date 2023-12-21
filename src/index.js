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
      <h1 style={style}>fast react pizza co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>6 creative dishes to choose from , all organic , all delicious</p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={Pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are working on our menu please come back later</p>
      )}

      {/* <Pizza
        name="pizza spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/Spinaci.jpg"
        price={10}
      />
      <Pizza
        name="pizza margherita"
        ingredients="Tomato and mozarella"
        photoName="pizzas/margherita.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  if (pizzaObj.soldOut) return null;
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <li>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out " : pizzaObj.price}</span>
      </li>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours;
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour < openHours || hour > closeHours;
  console.log(isOpen);

  // if (hour < openHours || hour > closeHours) alert("we are currently closed");
  // else alert("sorry we are closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} openHours={openHours} />
      ) : (
        <p>
          we are happy to welcome you between {openHours}:00 and {closeHours}
          :00
        </p>
      )}
    </footer>
  );
}

function Order({ closeHours, openHours }) {
  <div className="order">
    <p>
      we are open between {openHours}:00 and {closeHours}:00
    </p>
    <button className="btn">order</button>
  </div>;
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
