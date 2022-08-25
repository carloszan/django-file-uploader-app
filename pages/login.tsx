import Head from "next/head";
import { useState } from "react";
import useUser from "libs/useUser";
import { NavBar } from "../components/navbar";
import { Spinner } from "../components/spinner";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutateUser } = useUser({ redirectTo: "/", redirectIfFound: true });

  async function handleButton() {
    setLoading(true);

    const data = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .finally(() => setLoading(false));

    mutateUser(data);
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <NavBar />

      <div className="container bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col mx-auto">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          {loading ? (
            <Spinner />
          ) : (
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleButton}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </>
  );
}
