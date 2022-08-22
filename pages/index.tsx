import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { FileDto } from "./api/files";

const Home: NextPage = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR<FileDto[]>("/api/files", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const fileList = data.map(({ id, name, type, url }) => {
    return (
      <li key={id}>
        <div className="columns-3 space-y-4">
          <div>{name}</div>
          <div>{type}</div>
          <div>
            <a href={url} className="text-blue-500">
              Url
            </a>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <Head>
        <title>File Uploader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto">
        <ul>
          <div className="columns-3 space-y-4">
            <div className="font-medium">Name</div>
            <div className="font-medium">Type</div>
            <div className="font-medium">Url</div>
          </div>

          {fileList}
        </ul>
      </div>
    </div>
  );
};

export default Home;
