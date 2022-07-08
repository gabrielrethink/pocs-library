/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";

import Card from "../components/card";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Card
            description="POC para avaliar a viabilidade de criar um componment de progress bar"
            squad="Tech Squad"
            developer="Fernando"
            title="Progress Bar"
            route="progressBar"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
