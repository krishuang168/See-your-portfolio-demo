export interface Asset {
  assetType: string;
  note: string;
  ticker: string;
  price: number;
  quantity: number;
}

export interface Portfolio {
  [key: string]: Asset;
}
