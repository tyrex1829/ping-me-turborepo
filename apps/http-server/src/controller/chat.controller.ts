import { Request, Response } from "express";
import { prisma } from "@repo/db/prisma";

export const chat = async (req: Request, res: Response): Promise<void> => {
  const user = await prisma.user.findFirst();
  return;
};
