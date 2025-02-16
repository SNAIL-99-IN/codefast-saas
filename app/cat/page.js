"use client";

import { useState } from "react";

const RandomCatImage = () => {
  const [status, setStatus] = useState("Idle");
  const [imageUrl, setImageUrl] = useState(
    "https://media.tenor.com/dimT0JAAMb4AAAAM/cat-cute.gif"
  );

//   const fetchCatImage = () => {
//     // Asynchronous action > Need a Promise
//     // = Object that manage all asychronous actions
//     // = "I promise to return a value"
//     // Acchronous code, like query DB, ask ChatGPT, etc...
//     return fetch("https://api.thecatapi.com/v1/images/search");
//   };

  const getNewImage = () => {
    // 1. Set status to "Loading"
    // 2. Featch cat image from thecatapi.com  (could take few seconds) or retun an error
    // 3. Set status to "Success" or "Error"
    // 4. If sucess, set the image url

    setStatus("Loading");

    fetch("https://api.thecatapi.com/v1/images/search");
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data[0].url);
        setImageUrl(data[0].url);
        setTimeout(() => {
          setStatus("Sucess");
        }, 2000);
      })
      .catch(() => {
        setStatus("Opps 😅");
      });
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-lg font-bold">Async/Await Demo</h1>

      <div> STATUS : {status}</div>

      <button onClick={getNewImage} className="btn btn-primary rounded-md">
        Fetch Cat Image
      </button>

      {imageUrl && <img src={imageUrl} alt="Cute Cat" className="maxc-w080" />}
    </div>
  );
};

export default RandomCatImage;
