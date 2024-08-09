import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const user = await prisma.user.create({
        data: {
          email,
          password,
        },
      });

      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
