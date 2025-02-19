import { createFactory } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import type { Pizza } from "../../entities/Pizza";
import pizzasCollection from "../../data/pizzas";

const factory = createFactory();

export default factory.createHandlers(async (c) => {
  try {
    const pizzas = pizzasCollection;
    return c.json({ pizzas: pizzas }, 200);
  } catch (error) {
    throw new HTTPException(500);
  }
});
