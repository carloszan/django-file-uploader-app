import { NextApiRequest } from "next";
import axios from "axios";
import fetchJson from "./fetchJson";
import { PostFileDto } from "pages/api/files";

export interface LoginDto {
  email: string;
  username: string;
  token: string;
}

export type FileDto = {
  id: string;
  name: string;
  type: string;
  file_url: string;
};

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await fetchJson<LoginDto>(process.env.API_URL! + "/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function files({ token }: { token: string }): Promise<FileDto[]> {
  return await fetchJson<FileDto[]>(process.env.API_URL! + "/api/files", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function saveFile(req: NextApiRequest, token: string) {
  return await axios.post(process.env.API_URL! + "/api/files/", req, {
    responseType: "stream",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
}
