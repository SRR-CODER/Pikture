import { useEffect, useState } from "react";
import Footer from "./footer.js";
import ReactLoading from "react-loading";

function App() {
  const [img, setImg] = useState("");
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(true);
  const Access_Key = "it6kDzNMvhnsZG6BwghuJq0HhZoYDFofPwpcyA13diE";

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${Access_Key}`
    );

    const dataj = await data.json();
    const result = dataj.results;
    console.log(result);
    setRes(result);
  };
  useEffect(() => {
    fetchRequest();
  }, []);

  const Submit = () => {
    fetchRequest();
    setImg("");
  };

  return (
    <>
      {loading === false ? (
        <div className="App">
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search Anything!!!!!"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <button type="submit" onClick={Submit}>
              Search
            </button>
          </div>
          <div className="flex-layout">
            {res.map((val) => {
              return (
                <img
                  key={val.id}
                  src={val.urls.small}
                  alt={val.alt_description}
                />
              );
            })}
          </div>

          {/* Footer Section */}
          <Footer />
        </div>
      ) : (
        <div className="loader-outer">
          <ReactLoading type="cylon" color="brown"
                  height="100vh" width="100%" className="loading"/>
        </div>
      )}
    </>
  );
}

export default App;
