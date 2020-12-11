import "./App.css";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";
import Video from "./components/Video";
import Homepage from "./components/Homepage";

import { data } from "./data/data";

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Links from "./components/Links";

function App() {
  // let dataMutated = data;
  const [currentPage, setCurrentPage] = useState("homepage");
  const [shuffledData, setShuffledData] = useState([]);
  const [shuffled, setShuffled] = useState(false);

  let dataMutated = JSON.parse(JSON.stringify(data));

  useEffect(() => {
    shuffleData(dataMutated);
    console.log("data", data);
    console.log("data mutated", dataMutated);
  }, []);

  const shuffleData = (dataArray) => {
    for (let i = dataArray.length - 1; i > 0; i--) {
      const val = Math.floor(Math.random() * i);
      const hold = dataArray[i];
      dataArray[i] = dataArray[val];
      dataArray[val] = hold;
    }
    setShuffledData(dataArray);
    setShuffled(true);

    console.log("data", data);
    console.log("data mutated", dataMutated);
    console.log("shuffledData", shuffledData);

    // setShuffled(true);
  };

  function pickVideoPage() {
    let path = window.location.pathname;

    if (path === "/Family") {
      return (
        <Video
          data={data[0]}
          allData={data}
          currentPage={currentPage}
          value={0}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Equality") {
      // setCurrentPage(1);
      return (
        <Video
          data={data[1]}
          allData={data}
          currentPage={currentPage}
          value={1}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Beauty") {
      // setCurrentPage(2);
      return (
        <Video
          data={data[2]}
          allData={data}
          currentPage={currentPage}
          value={2}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Innovation") {
      // setCurrentPage(3);
      return (
        <Video
          data={data[3]}
          allData={data}
          currentPage={currentPage}
          value={3}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Perseverance") {
      // setCurrentPage(4);
      return (
        <Video
          data={data[4]}
          allData={data}
          currentPage={currentPage}
          value={4}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Dedication") {
      // setCurrentPage(5);
      return (
        <Video
          data={data[5]}
          allData={data}
          currentPage={currentPage}
          value={5}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Stewardship") {
      // setCurrentPage(6);
      return (
        <Video
          data={data[6]}
          allData={data}
          currentPage={currentPage}
          value={6}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Service") {
      // setCurrentPage(7);
      return (
        <Video
          data={data[7]}
          allData={data}
          currentPage={currentPage}
          value={7}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Mobility") {
      // setCurrentPage(8);
      return (
        <Video
          data={data[8]}
          allData={data}
          currentPage={currentPage}
          value={8}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Caregiving") {
      // setCurrentPage(9);
      return (
        <Video
          data={data[9]}
          allData={data}
          currentPage={currentPage}
          value={9}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Progress") {
      // setCurrentPage(10);
      return (
        <Video
          data={data[10]}
          allData={data}
          currentPage={currentPage}
          value={10}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/Wonder") {
      // setCurrentPage(11);
      return (
        <Video
          data={data[11]}
          allData={data}
          currentPage={currentPage}
          value={11}
          setCurrentPage={setCurrentPage}
        />
      );
    } else if (path === "/") {
      console.log("home??");
      return (
        <Homepage
          setCurrentPage={setCurrentPage}
          shuffled={shuffled}
          data={data}
        />
      );
    }
  }

  return (
    <HelmetProvider>
      <div className="App">
        <Header setCurrentPage={setCurrentPage} />
        {pickVideoPage()}
        {/* {currentPage !== "homepage" && (
          <Links data={data} currentPage={currentPage} />
        )} */}
        <Footer currentPage={currentPage} />
      </div>
    </HelmetProvider>
  );
}

export default App;
