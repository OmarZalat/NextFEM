"use client";

import styles from "./page.module.css";
import Image from "next/image";
import arrow from "../public/images/icon-arrow.svg";
import LeafletMap from "./components/map/page";
import Head from "next/head";
import { DomainAPI } from "./apis/domainAPI";
import { useState } from "react";
export default function Home() {
  const [inputDomain, setInputDomain] = useState("");

  const handleInputChange = (event) => {
    setInputDomain(event.target.value);
  };

  const handleSubmit = async () => {
    const data = await DomainAPI();
    console.log(data);
  };

  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.search_section}>
            <h2>IP Address Tracker</h2>
            <div className={styles.search_section_wrapper}>
              <input
                className={styles.address_tracker_input}
                placeholder="Search for any IP address or domain"
                value={inputDomain}
                onChange={handleInputChange}
              ></input>
              <button className={styles.submit_button} onClick={handleSubmit}>
                <Image
                  className={styles.submit_button_arrow}
                  src={arrow}
                ></Image>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.map_section}>
          <LeafletMap />
        </div>
      </div>
    </>
  );
}
