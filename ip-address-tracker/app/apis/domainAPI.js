import React from "react";

export async function DomainAPI(inputDomain) {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_3FlGzchv0Zf6SYLOo6wDj5cYVmN5x&ipAddress=${inputDomain}`
  );

  const data = await response.json();
  return data;
}
