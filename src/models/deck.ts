import * as cards from './cards'

export class Deck {
    url: string;
    cards: cards.Card[];
    valid: boolean;

    constructor() {
        this.cards = [];
        this.url = "";
        this.valid = false;
    }

    addCard(card: cards.Card) {
        this.cards.push(card);
        if (this.cards.length == 8) {
            this.valid = true;
            this.url = getUrl(this.cards);
        }
    }
}

function getUrl(cardArr: cards.Card[]) {
    let url = 'https://link.clashroyale.com/deck/en?deck='
    cardArr.forEach(card => {
        url += `${card.id};`
    })
    // everything except for last extra semicolon
    return url.slice(0, -1)
}