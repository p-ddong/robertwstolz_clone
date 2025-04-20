export type ClothingItem = {
    id:number;
    img: string;
    name: string;
    size: string[];
    color: string;
    fabric: string;
    sale: boolean;
    price: number;
    isInCart?:boolean;
    quantity?:number;
  };