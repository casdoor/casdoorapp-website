import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

const ScreenshotItem = ({img, title, description}) => (
  <div className={clsx("col col--6")}>
    <div className="text--center">
      <img src={img} alt={title} className={styles.screenshotImage} />
    </div>
    <div className="text--center padding-horiz--md">
      <h3 className={styles.screenshotTitle}><Translate>{title}</Translate></h3>
      <p><Translate>{description}</Translate></p>
    </div>
  </div>
);

export default function Screenshots() {
  return (
    <section className={styles.screenshots}>
      <div className="container">
        <div className="row">
          <div className="col col--12 text--center">
            <h2><Translate>Screenshots</Translate></h2>
          </div>
        </div>
        <div className="row">
          <ScreenshotItem
            img="/img/home/Android.jpg"
            title="Android"
            description="Android Home Screen"
          />
          <ScreenshotItem
            img="/img/home/iOS.png"
            title="iOS"
            description="iOS Home Screen"
          />
        </div>
      </div>
    </section>
  );
}
