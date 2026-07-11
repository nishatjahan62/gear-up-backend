import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import notFound from "./middlewares/notFound.js";


import routes from "./routes/index.js";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "GearUp API is running 🏋️",
  });
});

// routes
app.use("/api", routes)



app.use(notFound);
app.use(globalErrorHandler);

export default app;