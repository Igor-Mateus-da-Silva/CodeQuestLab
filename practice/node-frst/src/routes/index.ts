import express from "express";
import produtosRouter from "./produtos";

const router = express.Router();

router.use("/produtos", produtosRouter);

router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

router.get("/", (req, res) => {
  const nome: string = "Igor";
  const age: number = 28;
  res.json({ nome, age });
});

export default router;
