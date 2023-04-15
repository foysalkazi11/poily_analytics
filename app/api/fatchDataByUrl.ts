import React from "react";
const fetchDataByUrl = async (url: string) => {
  const res = await fetch(url);
  return res;
};
export default fetchDataByUrl;
