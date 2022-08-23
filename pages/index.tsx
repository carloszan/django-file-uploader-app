import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { NavBar } from "../components/navbar";
import { Spinner } from "../components/spinner";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const Home: NextPage = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    await delay(1000);
    setLoading(false);
  }

  return (
    <div>
      <Head>
        <title>File Uploader</title>
        <meta name="description" content="Technical Assessment by Propylon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <div className="container mx-auto">
        <Dropdown file={file} onChange={setFile} />

        {loading ? (
          <Spinner />
        ) : (
          <>
            {file ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleClick}
              >
                Upload
              </button>
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Home;

function Dropdown({ file, onChange = () => {} }: any) {
  const [bigFileWarning, setBigFileWarning] = useState(false);

  return (
    <div className="flex justify-center items-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col justify-center items-center pt-5 pb-6">
          <svg
            aria-hidden="true"
            className="mb-3 w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            ></path>
          </svg>
          {file ? (
            <h1>{file.name}</h1>
          ) : (
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
          )}
          <p
            className={`text-xs ${
              bigFileWarning ? "text-red-500" : "text-gray-500"
            } dark:text-gray-400`}
          >
            Maximum: 2Mb
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setBigFileWarning(false);

            const TWO_MBs = 2097152;
            const files = e.target.files;

            if (!files) return;

            if (files.length <= 0) return;

            if (files[0].size > TWO_MBs) {
              setBigFileWarning(true);
              onChange(undefined);
              return;
            }

            onChange(files[0]);
          }}
        />
      </label>
    </div>
  );
}
