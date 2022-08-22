// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type FileDto = {
  id: string;
  name: string;
  type: string;
  url: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FileDto[]>
) {
  const files: FileDto[] = [
    { id: "1", name: "image1.png", type: "png", url: "abc" },
    { id: "2", name: "image2.jpg", type: "jpg", url: "def" },
  ];
  res.status(200).json(files);
}
