import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import fetchJson from "libs/fetchJson";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.log(err);
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
