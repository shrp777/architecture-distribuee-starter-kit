export type Pizza = {
  id: number;
  name: string;
  ingredients: Array<string>;
  price: number;
  base: "Tomate" | "Crème" | "Nature";
};
