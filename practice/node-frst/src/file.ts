import { readFile, unlink, writeFile } from "fs/promises";

const exec = async () => {
  const fileName = "./teste.txt";
  const fileContent = await readFile(fileName, { encoding: "utf-8" });

  const list = fileContent.split("\n");
  list.push("Hello World");

  const listTxt = list.join("\n");

  await writeFile(fileName, listTxt);
  console.log("Pronto!");
};

const deleteFile = async () => {
  await unlink("./teste.txt");
};

exec();
