import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. Waited forty minutes for a table, the server lost my order, and they billed me before the food arrived. Monday, never again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review + "\n", "utf8");
console.log(review);
