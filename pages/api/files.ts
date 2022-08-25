// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withIronSessionApiRoute } from "iron-session/next";
import type { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "libs/session";

export type FileDto = {
  id: string;
  name: string;
  type: string;
  url: string;
};

function handler(req: NextApiRequest, res: NextApiResponse<FileDto[] | null>) {
  if (!req.session.user) {
    return res.status(403).send(null);
  }

  const files: FileDto[] = [
    { id: "1", name: "image1.png", type: "png", url: "abc" },
    { id: "2", name: "image2.jpg", type: "jpg", url: "def" },
  ];
  res.status(200).json(files);
}

export default withIronSessionApiRoute(handler, sessionOptions);
