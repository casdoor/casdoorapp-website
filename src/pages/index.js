import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import AdditionalFeatures from "@site/src/components/AdditionalFeatures";
import Screenshots from "@site/src/components/Screenshots";
import TOTPIntro from "@site/src/components/TOTPIntro";
import DownloadSection from "@site/src/components/DownloadSection";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <Heading as="h1" className="hero__title">
              <Translate>{siteConfig.title}</Translate>
            </Heading>
            <p className="hero__subtitle">
              <Translate>{siteConfig.tagline}</Translate>
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/overview">
                <Translate>Get Started</Translate>
              </Link>
              <Link
                className="button button--primary button--lg download-button"
                to="https://github.com/casdoor/casdoor-app/releases">
                <Translate>Download</Translate>
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <img src="/img/home/iOS.png" alt="Casdoor Authenticator App Screenshot" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AdditionalFeatures />
        <Screenshots />
        <TOTPIntro />
        <DownloadSection />
      </main>
    </Layout>
  );
}
