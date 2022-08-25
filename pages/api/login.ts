import { User } from "pages/api/user";
import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "libs/session";

interface LoginDto {
  email: string;
  username: string;
  token: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse<LoginDto>) {
  if (req.method !== "POST") {
    res.status(405);
    return;
  }

  const { email, password } = JSON.parse(req.body);

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(2000);

  const loginDto: LoginDto = {
    email: email,
    username: "admin",
    token: "abcdef",
  };

  const user: User = {
    isLoggedIn: true,
    token: loginDto.token,
    username: loginDto.username,
  };

  req.session.user = user;

  await req.session.save();

  res.status(200).json(loginDto);
}

export default withIronSessionApiRoute(handler, sessionOptions);
