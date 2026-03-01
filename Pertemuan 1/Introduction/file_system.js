import fs from "fs";

fs.writeFile(
  "hello.txt",
  "Hello, from Node JS tutorial by Reksa Ariansyah!",
  (err) => {
    if (err) throw err;
    console.log("File has been created!");
  },
);

fs.readFile("./hello.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log("File content: " + data);
});
