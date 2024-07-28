
export const SKILLS_API =
  "https://api-eu-west-2.hygraph.com/v2/clxx583h704wj08w4kt0whrt9/master";

export const getAllSkills = `
query MyQuery {
  portfolioSkills(first: 100) {
    id
    altTag
    logo {
      url
    }
  }
}
`;


export default { SKILLS_API, getAllSkills }
