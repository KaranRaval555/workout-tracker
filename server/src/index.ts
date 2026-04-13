import express from "express";
import authRouter from "../src/shell/auth.ts";
import "dotenv/config";
import cors from "cors";

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log("server listening for connections on port: ", PORT);
});
