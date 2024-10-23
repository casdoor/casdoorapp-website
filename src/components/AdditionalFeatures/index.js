import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faExchangeAlt, faMobileAlt, faQrcode, faShieldAlt, faSync, faUserLock, faWifi} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import Translate, {translate} from "@docusaurus/Translate";

const features = [
  {
    title: translate({
      message: "Easy Account Setup",
    }),
    description: translate({
      message: "Quickly add accounts by scanning QR codes or manual entry for seamless TOTP integration.",
    }),
    icon: faQrcode,
  },
  {
    title: translate({
      message: "Account Synchronization",
    }),
    description: translate({
      message: "Securely sync your accounts across devices with Casdoor's central service.",
    }),
    icon: faSync,
  },
  {
    title: translate({
      message: "Enhanced Security",
    }),
    description: translate({
      message: "Protect your accounts with time-based one-time passwords for multi-factor authentication.",
    }),
    icon: faShieldAlt,
  },
  {
    title: translate({
      message: "Time-Based Codes",
    }),
    description: translate({
      message: "Generate secure, time-based one-time passwords that change every 30 seconds.",
    }),
    icon: faClock,
  },
  {
    title: translate({
      message: "Multi-Device Support",
    }),
    description: translate({
      message: "Access your TOTP codes on multiple devices, ensuring you're always protected.",
    }),
    icon: faMobileAlt,
  },
  {
    title: translate({
      message: "Privacy-Focused",
    }),
    description: translate({
      message: "Your security is our priority. All data is encrypted and stored securely.",
    }),
    icon: faUserLock,
  },
  {
    title: translate({
      message: "Offline Mode",
    }),
    description: translate({
      message: "Generate TOTP codes without an internet connection, ensuring access anytime, anywhere.",
    }),
    icon: faWifi,
  },
  {
    title: translate({
      message: "Import & Export",
    }),
    description: translate({
      message: "Easily import accounts from other authenticator apps or export your data for backup.",
    }),
    icon: faExchangeAlt,
  },
];

function Feature({title, description, icon}) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
      <h3 className={styles.featureTitle}><Translate>{title}</Translate></h3>
      <p className={styles.featureDescription}><Translate>{description}</Translate></p>
    </div>
  );
}

export default function AdditionalFeatures() {
  return (
    <section className={styles.additionalFeatures}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <Translate>Additional Features</Translate>
        </h2>
        <div className={styles.featureGrid}>
          {features.map((feature, idx) => (
            <Feature key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
