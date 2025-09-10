// lib/prisma.ts
import path from "path";
import dotenv from "dotenv";
import { PrismaClient } from "./generated/prisma";

// Load root .env explicitly
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
