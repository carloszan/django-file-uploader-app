import fetchJson from "./fetchJson";

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
