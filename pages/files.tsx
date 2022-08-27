import Link from "next/link";
import useUser from "libs/useUser";
import Head from "next/head";
import useSWR from "swr";
import { FileDto } from "libs/api";
import { NavBar } from "components/navbar";

export default function Files() {
  const { data, error } = useSWR<FileDto[]>("/api/files");
  const { user } = useUser({ redirectTo: "/login" });

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const fileList = data.map(({ id, name, type, file_url }) => {
    return (
      <li key={id}>
        <div className="columns-3 space-y-4">
          <div>{name}</div>
          <div>{type}</div>
          <div className="text-blue-500">
            <Link href={file_url ?? ""}>Url</Link>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <Head>
        <title>File Uploader</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

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
}
