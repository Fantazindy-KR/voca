import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setdata(data);
      });
  }, [url]);
  return data;
}

export default useFetch;
