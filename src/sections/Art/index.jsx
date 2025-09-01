import { useEffect, useState } from "react";

function ArtsSection() {
  const url = "https://boolean-uk-api-server.fly.dev/art";
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setFilteredData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <section>
          <h2>Arts Section</h2>
          <div className="scroll-container">
            <ul className="art-list">
              {filteredData.map((artPiece, index) => (
                <li key={index}>
                  <div className="frame">
                    <img
                      src={url.slice(0, -4) + artPiece.imageURL}
                    />
                  </div>
                  <h3>{artPiece.title}</h3>
                  <p>Artist: {artPiece.artist}</p>
                  <h4>Publication History:</h4>
                  <ul>
                    {artPiece.publicationHistory.map((publicationHistory, index) => (
                      <li key={index}>{publicationHistory}</li> 
                    ))} 
                  </ul>
                </li>
                ))}
            </ul>
          </div>
        </section>

      </div>
    </section>
  )
}

export default ArtsSection
