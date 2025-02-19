import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";

import getAllPizzasHandler from "../handlers/pizzas/getAllPizzasHandler";
import getPizzaByIdHandler from "../handlers/pizzas/getPizzaByIdHandler";

const routes = new Hono();

routes.get("/:id", ...getPizzaByIdHandler);

routes.get("/", ...getAllPizzasHandler);

//Erreur 405 (Method not allowed) retournée pour toutes les autres routes
routes.all("*", async (c) => {
  throw new HTTPException(405);
});

export default routes;
