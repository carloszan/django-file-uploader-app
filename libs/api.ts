import fetchJson from "./fetchJson";

export interface LoginDto {
  email: string;
  username: string;
  token: string;
}

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    return await fetchJson<LoginDto>(process.env.API_URL! + "/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return {
    email,
    username: "admin",
    token: "abc",
  };
}
