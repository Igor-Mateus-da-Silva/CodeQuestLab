import { writeFile } from "fs/promises";

const exec = async () => {
  console.log("Escrevendo arquivo");

  const colors = ["red", "green", "blue", "yellow"];
  const colorsTxt = colors.join("\n");

  await writeFile("./teste.txt", colorsTxt);
  console.log("Pronto!");
};

exec();
