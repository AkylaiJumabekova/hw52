import Card from "./Card.ts";

class Combinations {
  private cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  public getOutcome(): string {
    const rankCounts = this.countRanks();
    const isFlush = this.isFlush();
    const isStraight = this.isStraight();

    if (this.isRoyalFlush()) {
      return "Роял-флэш";
    }

    if (isFlush && isStraight) {
      return "Стрит-флэш";
    }

    if (this.isFourOfAKind(rankCounts)) {
      return "Каре";
    }

    if (this.isFullHouse(rankCounts)) {
      return "Фулл-хаус";
    }

    if (isFlush) {
      return "Флэш";
    }

    if (isStraight) {
      return "Стрит";
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

  private isStraight(): boolean {
    const values = this.cards.map(card => this.rankToValue(card.rank));
    values.sort((a, b) => a - b);
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i + 1] !== values[i] + 1) {
        return false;
      }
    }
    return true;
  }

  private rankToValue(rank: string): number {
    const values: { [key: string]: number } = {
      '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7,
      '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14
    };
    return values[rank] ?? 0;
  }

  private isRoyalFlush(): boolean {
    return this.isStraight() && this.isFlush() && this.cards.some(card => card.rank === 'A');
  }

  private isFourOfAKind(rankCounts: { [rank: string]: number }): boolean {
    return Object.values(rankCounts).some((count) => count === 4);
  }

  private isFullHouse(rankCounts: { [rank: string]: number }): boolean {
    const values = Object.values(rankCounts);
    return values.includes(3) && values.includes(2);
  }

  private isThreeOfAKind(rankCounts: { [rank: string]: number }): boolean {
    return Object.values(rankCounts).some((count) => count === 3);
  }

  private isTwoPairs(rankCounts: { [rank: string]: number }): boolean {
    return Object.values(rankCounts).filter((count) => count === 2).length === 2;
  }

  private isOnePair(rankCounts: { [rank: string]: number }): boolean {
    return Object.values(rankCounts).some((count) => count === 2);
  }
}

export default Combinations;
