import React from "react";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

export default function TOTPIntro() {
  return (
    <section className={styles.totpIntro}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <h2><Translate>What is TOTP?</Translate></h2>
            <p>
              <Translate>
                TOTP (Time-based One-Time Password) is a widely used algorithm that generates temporary, single-use passwords.
                It enhances security by providing a second factor of authentication, typically used in addition to a regular password.
                TOTP codes change every 30 seconds, making them highly secure against unauthorized access.
              </Translate>
            </p>
            <ul>
              <li><Translate>Enhances account security</Translate></li>
              <li><Translate>Time-based, changing every 30 seconds</Translate></li>
              <li><Translate>Widely supported by many services and apps</Translate></li>
              <li><Translate>Easy to use with mobile authenticator apps</Translate></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
