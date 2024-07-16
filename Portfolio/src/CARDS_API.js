
export const CARDS_API =
  "https://api-eu-west-2.hygraph.com/v2/clxx583h704wj08w4kt0whrt9/master";

export const getAllCards = `
query MyQuery {
  portfolioCards(orderBy: cardId_DESC) {
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
