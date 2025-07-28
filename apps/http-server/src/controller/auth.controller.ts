import { Request, Response } from "express";

export const signup = async (req: Request, res: Response): Promise<void> => {
  res.status(200).json({
    msg: `Signup`,
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
