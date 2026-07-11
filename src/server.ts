import app from "./app.js";
import config from "./config/index.js";
import { prisma } from "./lib/prisma.js";

async function main() {
  await prisma.$connect();
  console.log(" Database connected");

  app.listen(config.port, () => {
    console.log(` GearUp server running on port ${config.port}`);
  });
}

main().catch(async (err) => {
  console.error(" Failed to start server:", err);

  await prisma.$disconnect();

  process.exit(1);
});