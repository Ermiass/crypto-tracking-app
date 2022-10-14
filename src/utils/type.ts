export interface Rep {
    image?: string,
    name?: string,
    description?: string,
    market_cap_rank?: number,
    market_data?:string,
    id?:string,
    coin?: {coin: string,
      image?: {large: string}
      name?: string,
      description?: {en: string}
      market_cap_rank?: number,
      market_data?: {current_price:string,market_cap:string},
      id?: string,}
  }
 export  interface contexttype {
  children: React.ReactNode
 }
//  export interface User  {username: string, uid: string, email: string}
//  export interface CryptoType {
  
//   currency:string,
//   setCurrency:(value: string | any) => void,
//   symbol: string
//   coins: any[],
//   user: User,
//   setUser:(value: User | null | any) => void, 
//   loading: boolean,
//   getCoins:() => void,
//   alert:{open: boolean,  message: string, type: string |any }
//   setAlert:(value: any) => void
//  watchlist:never[],
// }


