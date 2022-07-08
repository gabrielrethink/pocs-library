/* eslint-disable react/no-unescaped-entities */
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RA - POC's Library</title>
        <meta name="description" content="Rethink Academy POC's Library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.top_menu}>
        <Link href={`/`}>
          <h1>Home</h1>
        </Link>
        <Link href={`/`}>
          <h1>POC's Library</h1>
        </Link>

        <div></div>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
