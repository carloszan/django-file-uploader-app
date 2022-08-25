import type { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "libs/session";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405);
    return;
  }

  req.session.destroy();

  res.statusCode = 200;
  res.send({});
}

export default withIronSessionApiRoute(handler, sessionOptions);
