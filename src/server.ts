import app from "./app.js";
// import config from "./config/index.js";
import {prisma} from "./lib/prisma.js";

async function main() {
  await prisma.$connect();
  console.log("✅ Database connected");

  app.listen(5000, () => {
    console.log(`🚀 GearUp server running on port ${5000}`);
  });
}

main().catch((err) => {
  console.error("❌ Failed to start server:", err);
  process.exit(1);
});