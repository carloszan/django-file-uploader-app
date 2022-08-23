import Head from "next/head";
import { useState } from "react";
import { NavBar } from "../components/navbar";
import { Spinner } from "../components/spinner";

export default function Login() {
  const [loading, setLoading] = useState(false);

  async function handleButton() {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    setLoading(true);
    await delay(1000);
    setLoading(false);
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
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
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
