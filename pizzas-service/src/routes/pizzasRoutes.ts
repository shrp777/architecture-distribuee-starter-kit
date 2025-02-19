import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import getAllPizzasHandler from "../handlers/pizzas/getAllPizzasHandler";
import getPizzaByIdHandler from "../handlers/pizzas/getPizzaByIdHandler";

const routes = new Hono();

routes.get("/:id", ...getPizzaByIdHandler);

routes.get("/", ...getAllPizzasHandler);

//All other routes should return -> Method not allowed
routes.all("*", async (c) => {
  throw new HTTPException(405);
});

export default routes;
