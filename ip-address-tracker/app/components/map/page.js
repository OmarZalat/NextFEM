import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../map/map.module.css";
import { DomainAPI } from "@/app/apis/domainAPI";

export default function LeafletMap() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    async function fetchDomainData() {
      const data = await DomainAPI();
      console.log(data);
      setApiData(data);
    }

    fetchDomainData();
  }, []);

  // console.log(apiData?.isp);

  useEffect(() => {
    // Import Leaflet dynamically on the client-side
    const L = require("leaflet");
    // Your Leaflet map initialization code here
    var map = L.map("map").setView([33.8938, 35.5018], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
  }, []);

  return (
    <>
      <div id="map" className={styles.map_wrapper}></div>
    </>
  );
}
