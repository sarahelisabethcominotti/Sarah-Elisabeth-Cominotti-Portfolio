
export const CARDS_API = import.meta.env.VITE_CARDS_API

export const getAllCards = `
query MyQuery {
  portfolioCards(orderBy: cardId_DESC, first: 100) {
  cardId
    id
    description
    projectLink
    gitHubLink
    tag
    title
    backgroundImage {
      url
    }
  }
}
`;


export default { CARDS_API, getAllCards }
