import bcrypt from "bcryptjs";
import { prisma } from "../src/lib/prisma.js";

async function main() {
  const hashedPassword = await bcrypt.hash("admin01", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: { password: hashedPassword, role: "ADMIN" },
    create: {
      name: "GearUp Admin",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log(" Seed completed.");
  console.log("Admin Email:", admin.email);
  console.log("Admin Password: admin01");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });