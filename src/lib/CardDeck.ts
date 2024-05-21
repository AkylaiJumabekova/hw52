import Card from "./Card";

class CardDeck {
  private cards: Card[];

  constructor() {
    this.cards = [];
    const suits = ["hearts", "diams", "clubs", "spades"];
    const ranks = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    for (const suit of suits) {
      for (const rank of ranks) {
        this.cards.push(new Card(rank, suit));
      }
    }

    console.log(this.cards);
  }

  public getCard(): Card {
    const random = Math.floor(Math.random() * this.cards.length);
    return this.cards.splice(random, 1)[0];
  }

  public getCards(howMnay: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < howMnay; i++) {
      cards.push(this.getCard());
    }
    return cards;
  }
}
