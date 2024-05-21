import "./App.css";
import CardDeck from "./lib/CardDeck.ts";
import MyCard from "./components/MyCard/MyCard";
import { useState } from "react";
import Card from "./lib/Card.ts";
import Combinations from "./lib/Combinations.ts";

function App() {
  const [keepCards, setKeepCards] = useState<Card[]>([]);

  const [answer, setAnswer] = useState<string>("");

  const give = () => {
    const stake = new CardDeck();
    const newDesck = stake.getCards(5);
    const pokerCombinations = new Combinations(newDesck);

    setKeepCards(newDesck);
    setAnswer(pokerCombinations.getOutcome());
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

      <div><h4>Комбинация: {answer} </h4></div>
    </div>
  );
}

export default App;
