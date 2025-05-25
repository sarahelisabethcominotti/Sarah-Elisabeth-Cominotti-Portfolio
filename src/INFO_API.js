
export const INFO_API = import.meta.env.VITE_INFO_API
 
export const getAllInfo = `
query MyQuery {
    generalInfo (where: { id: "cmb21edy4befb07mfinu70p08" }) {
      profilePicture {
        url
      }
    }
  }
`;


export default { INFO_API, getAllInfo }
