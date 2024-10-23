import React from "react";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

export default function Screenshots() {
  return (
    <section className={styles.screenshots}>
      <div className="container">
        <div className={styles.screenshotContent}>
          <div className={styles.screenshotText}>
            <h2 className={styles.screenshotTitle}>
              <Translate>Secure & Easy to Use</Translate>
            </h2>
            <p className={styles.screenshotDescription}>
              <Translate>
                Manage your two-factor authentication codes with ease and enhanced security. Casdoor Authenticator provides a seamless experience for all your TOTP needs.
              </Translate>
            </p>
            <ul className={styles.featureList}>
              <li><Translate>Quick account setup</Translate></li>
              <li><Translate>Secure code generation</Translate></li>
              <li><Translate>Cross-device synchronization</Translate></li>
              <li><Translate>User-friendly interface</Translate></li>
            </ul>
          </div>
          <div className={styles.screenshotWrapper}>
            <img
              src="/img/home/iOS.png"
              alt="Casdoor Authenticator App Screenshot"
              className={styles.screenshotImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
