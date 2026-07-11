import app from "./app.js";
import config from "./config/index";
import {prisma} from "./lib/prisma";

async function main() {
  await prisma.$connect();
  console.log("✅ Database connected");

  app.listen(config.port, () => {
    console.log(`🚀 GearUp server running on port ${config.port}`);
  });
}

main().catch((err) => {
  console.error("❌ Failed to start server:", err);
  process.exit(1);
});