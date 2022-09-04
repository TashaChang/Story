import React, { useState, useEffect } from "react";
import Search from "./Search";
import Footer from "./Footer";
import Card from "./Card";

function App() {
  const apiKEY = "29595407-11713799413afca38ab90b1a7";
  const [image, setImage] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${apiKEY}&q=${term}&image_type=photo&pretty=true&per_page=18&editors_choice=true&order=latest`
    )
      .then((res) => res.json())
      .then((data) => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div>
      <Search
        loading={(text) => {
          setTerm(text);
        }}
      />
      {!isloading && image.length === 0 && <h1>Sorry... No Images Found</h1>}
      {isloading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="box">
          {image.map((i, index) => (
            <Card key={index} image={i} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
