import * as cards from './cards'

export interface Deck {
    url: string,
    cards: cards.Card[],
}

// Perhaps we should create a class here...

function getUrl(cardArr: cards.Card[]) {
    let url = ' https://link.clashroyale.com/deck/en?deck='
    cardArr.forEach(card => {
        url += `${card.id};`
    })
    // everything except for last extra semicolon
    return url.slice(0, -1)
}