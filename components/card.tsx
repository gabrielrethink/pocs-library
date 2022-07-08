import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const card = ({
  description,
  squad,
  developer,
  title,
  route,
}: {
  description: string;
  squad: string;
  developer: string;
  route: string;
  title: string;
}) => {
  return (
    <Link href={`/${route}`}>
      <div className={styles.card}>
        <h2 className={styles.card_title}>{title}</h2>
        <div className={styles.card_body}>
          <p className={styles.card_description}>{description}</p>
        </div>
        <hr />
        <div className={styles.card_footer}>
          <div className={styles.card_data}>
            <Image width={30} height={30} src="/squad.svg" alt="squad icon" />
            <p>{squad}</p>
          </div>
          <div className={styles.card_data}>
            <Image
              width={30}
              height={30}
              src="/developer.svg"
              alt="squad icon"
            />
            <p>{developer}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default card;
