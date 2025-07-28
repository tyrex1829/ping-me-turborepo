import { Request, Response } from "express";
import { prisma } from "@repo/db/prisma";

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  const user = await prisma.user.create({
    data: {
      username,
      password,
    },
  });

  res.status(200).json({
    msg: `Signup`,
    user,
  });

  return;
};

export const signin = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    msg: `SignIN`,
  });
  return;
};

export const me = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    msg: `Me`,
  });
  return;
};
