import "./App.css";
import CardDeck from "./lib/CardDeck.ts";
import MyCard from "./components/MyCard/MyCard";
import { useState } from "react";
import Card from "./lib/Card.ts";

function App() {
  const [keepCards, setKeepCards] = useState<Card[]>([]);

  const give = () => {
    const stake = new CardDeck();
    const newDesck = stake.getCards(5);
    setKeepCards(newDesck);
  };

  return (
    <div className="playingCards faceImages">
      {keepCards.map((card, index) => {
        return (
          <>
            <MyCard rank={card.rank} suit={card.suit} key={index} />
          </>
        );
      })}

      <button onClick={give}> Раздать карты</button>
    </div>
  );
}

export default App;
