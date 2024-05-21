import Card from "./Card.ts";

class Combinations {
  private cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  public getOutcome(): string {
    const rankCounts = this.countRanks();
    const isFlush = this.isFlush();

    if (isFlush) {
      return "Флэш";
    }


    if (this.isThreeOfAKind(rankCounts)) {
      return "Тройка";
    }

    if (this.isTwoPairs(rankCounts)) {
      return "Две пары";
    }

    if (this.isOnePair(rankCounts)) {
      return "Одна пара";
    }

    return "Старшая карта";
  }

  private countRanks(): { [rank: string]: number } {
    const ranks = this.cards.map((card) => card.rank);
    return ranks.reduce((count, rank) => {
      count[rank] = (count[rank] || 0) + 1;
      return count;
    }, {} as { [rank: string]: number });
  }

  private isFlush(): boolean {
    const suits = this.cards.map((card) => card.suit);
    return suits.every((suit) => suit === suits[0]);
  }


  private isThreeOfAKind(rankCounts: { [rank: string]: number }): boolean {
    return Object.values(rankCounts).some((count) => count === 3);
  }

  private isTwoPairs(rankCounts: { [rank: string]: number }): boolean {
    return (
      Object.values(rankCounts).filter((count) => count === 2).length === 2
    );
  }

  private isOnePair(rankCounts: { [rank: string]: number }): boolean {
    return Object.values(rankCounts).some((count) => count === 2);
  }

}

export default Combinations;
