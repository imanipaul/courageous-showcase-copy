import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Video from "./components/Video";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

import { data } from "./data/data";

import { useEffect, useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");
  const [shuffledData, setShuffledData] = useState([]);
  const [shuffled, setShuffled] = useState(false);

  let dataMutated = JSON.parse(JSON.stringify(data));

  useEffect(() => {
    let storageArray = JSON.parse(sessionStorage.getItem("shuffledArray"));

    if (storageArray) {
      setShuffledData(storageArray);
      setShuffled(true);
    } else {
      shuffleData(dataMutated);
    }
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

    sessionStorage.setItem("shuffledArray", JSON.stringify(dataArray));
  };

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} />
      <Switch>
        <Route exact path="/" key={12}>
          <Homepage
            setCurrentPage={setCurrentPage}
            shuffled={shuffled}
            data={data}
            shuffledData={shuffledData}
          />
        </Route>
        {shuffledData.map((item, i) => (
          <Route exact path={`/${item.theme}`} key={i}>
            <Video
              shuffledData={shuffledData}
              data={shuffledData[i]}
              allData={data}
              currentPage={currentPage}
              value={i}
              setCurrentPage={setCurrentPage}
            />
          </Route>
        ))}
      </Switch>
      <Footer currentPage={currentPage} />
    </div>
  );
}

export default App;
