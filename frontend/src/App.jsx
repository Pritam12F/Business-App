import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";
import axios from "axios";
import { CreateCard } from "./components/CreateCard";

function App() {
  const [card, setCard] = useState([]);
  const [toUpdate, setToUpdate] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      const array = res.data;
      setCard([...array]);
    });
  }, [toUpdate]);

  return (
    <>
      <CreateCard toUpdate={toUpdate} setToUpdate={setToUpdate}></CreateCard>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {card.map((el) => {
          return (
            <Cards
              key={el._id}
              name={el.name}
              description={el.description}
              interests={el.interests}
              linkedin={el.linkedin}
              twitter={el.twitter}
              toUpdate={toUpdate}
              setToUpdate={setToUpdate}
            ></Cards>
          );
        })}
      </div>
    </>
  );
}

export default App;
