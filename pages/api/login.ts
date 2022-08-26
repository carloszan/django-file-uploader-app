import { User } from "pages/api/user";
import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "libs/session";
import { LoginDto, login } from "libs/api";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginDto | { message: string }>
) {
  if (req.method !== "POST") {
    res.status(405);
    return;
  }

  const { email, password }: { email: string; password: string } = JSON.parse(
    req.body
  );

  try {
    const {
      email: emailResponse,
      token: tokenResponse,
      username: usernameResponse,
    } = await login({ email, password });

    const loginDto: LoginDto = {
      email: emailResponse,
      username: usernameResponse,
      token: tokenResponse,
    };

    const user: User = {
      isLoggedIn: true,
      token: loginDto.token,
      username: loginDto.username,
    };

    req.session.user = user;

    await req.session.save();

    res.status(200).json(loginDto);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

export default withIronSessionApiRoute(handler, sessionOptions);
