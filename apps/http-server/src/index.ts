import express from "express";
import cors from "cors";
import { index_router } from "./routes/index.routes";

const app: express.Application = express();

app.use(express.json());
app.use(cors());

app.get("/", (req: express.Request, res: express.Response): void => {
  res.status(200).json({
    msg: `Server is running fine`,
  });
  return;
});

app.use("/api", index_router);

app.listen(3001);
