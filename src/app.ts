import express, { Application, Request, Response } from "express";
import cors from "cors";
// import { AuthRoutes } from "./modules/auth/auth.routes.js";
// import globalErrorHandler from "./middlewares/globalErrorHandler.js";
// import notFound from "./middlewares/notFound.js";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "GearUp API is running 🏋️" });
});

// app.use("/api/auth", AuthRoutes);

// app.use(notFound);
// app.use(globalErrorHandler);

export default app;