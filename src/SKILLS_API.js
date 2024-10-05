
export const SKILLS_API = import.meta.env.VITE_SKILLS_API
 
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
