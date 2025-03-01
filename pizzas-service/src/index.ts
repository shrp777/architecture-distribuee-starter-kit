import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { secureHeaders } from "hono/secure-headers";
import pizzasRoutes from "./routes/pizzasRoutes";
import { HTTPException } from "hono/http-exception";

const app = new Hono();

app.use("/*", cors()); //autorise les requêtes de toute provenance externe
app.use(prettyJSON());
app.use(logger());
app.use(secureHeaders());

//retourne une réponse au format JSON pour toutes les erreurs 404
app.notFound((c) => {
  return c.json({ message: "Error" }, 404);
});

app.route("/pizzas", pizzasRoutes);

app.get("/", (c) => {
  return c.json({ message: "Pizzas API" });
});

//Erreur 405 (Method not allowed) retournée pour toutes les autres routes
app.all("*", async (c) => {
  throw new HTTPException(405);
});

export default app;
