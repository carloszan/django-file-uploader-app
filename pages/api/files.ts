// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withIronSessionApiRoute } from "iron-session/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "libs/session";
import { FileDto, files } from "libs/api";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FileDto[] | null>
) {
  if (!req.session.user) {
    return res.status(403).send(null);
  }

  const response: FileDto[] = await files({ token: req.session.user.token });
  res.status(200).json(response);
}

export default withIronSessionApiRoute(handler, sessionOptions);
