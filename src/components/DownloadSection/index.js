import React from "react";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

export default function DownloadSection() {
  return (
    <section className={styles.downloadSection}>
      <div className="container">
        <h2>
          <Translate>Download the app</Translate>
        </h2>
        <p>
          <Translate>Get started with Casdoor Authenticator App today!</Translate>
        </p>
        <div className={styles.downloadButtons}>
          <Link
            className={`${styles.primaryButton} button--lg button`}
            to="https://github.com/casdoor/casdoor-app/releases/latest">
            <Translate>Download for Android</Translate>
          </Link>
          <Link
            className={`${styles.secondaryButton} button--lg button`}
            to="https://github.com/casdoor/casdoor-app">
            <Translate>View on GitHub</Translate>
          </Link>
        </div>
      </div>
    </section>
  );
}
