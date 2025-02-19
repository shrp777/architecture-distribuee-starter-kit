import type { Pizza } from "../entities/Pizza";

const pizzasCollection: Array<Pizza> = [
  {
    id: 1,
    name: "Margherita",
    ingredients: ["Basilic", "Mozzarella"],
    base: "Tomate",
    price: 7
  },
  {
    id: 2,
    name: "Marinara",
    ingredients: ["Origan", "Ail"],
    base: "Tomate",
    price: 6
  }
];

export default pizzasCollection;
