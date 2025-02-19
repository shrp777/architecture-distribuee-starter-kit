import { createFactory } from "hono/factory";
import { HTTPException } from "hono/http-exception";
import type { Pizza } from "../../entities/Pizza";
import pizzasCollection from "../../static-data/pizzas";

const factory = createFactory();

export default factory.createHandlers(async (c) => {
  try {
    const id: number | undefined = Number(c.req.param("id"));

    if (!id) {
      throw new Error("Missing id");
    }

    const pizza: Pizza | undefined = pizzasCollection.find((p) => p.id === id);

    if (!pizza) {
      throw new Error(`Pizza does not exist`);
    }
    return c.json({ pizza: pizza }, 200);
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === `Pizza does not exist`) {
        throw new HTTPException(404);
      }
      if (error.message === `Missing id`) {
        throw new HTTPException(400);
      }
    }
    throw new HTTPException(500);
  }
});
