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