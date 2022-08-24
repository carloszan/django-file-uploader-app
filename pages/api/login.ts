// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type LoginDto = {
  email: string;
  username: string;
  token: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginDto>
) {
  if (req.method !== "POST") {
    res.status(405);
    return;
  }

  const { email, password } = JSON.parse(req.body);

  const user: LoginDto = {
    email: email,
    username: password,
    token: "abcdef",
  };
  res.status(200).json(user);
}
