import { readFile, writeFile } from "fs/promises";

const exec = async () => {
  console.log("Escrevendo arquivo");

  const colors = ["red", "green", "blue", "yellow"];
  const colorsTxt = colors.join("\n");

  await writeFile("./teste.txt", colorsTxt);
  console.log("Pronto!");
};

const read = async () => {
  const fileContent = await readFile("./teste.txt", { encoding: "utf-8" });

  const list = fileContent.split("\n");
  console.log(list);
};

// exec();
read();
