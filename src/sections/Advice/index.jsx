import { useEffect, useState } from "react"

function AdviceSection() {

  const url = "https://api.adviceslip.com/advice";
  const [loading, setLoading] = useState(true);
  const [slip, setSlip] = useState();
  const [favouriteSlips, setFavouriteSlips] = useState([]);

  
  const loadSlip = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setSlip(jsonData);
  };

  const saveSlip = async () => {
    if(!favouriteSlips.includes(slip)) setFavouriteSlips([...favouriteSlips, slip])
  };


  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(url);
        const jsonData = await response.json();
        

        setSlip(jsonData);
  };

  fetchData();
}, [url]);


  return (
    <section>
      <h2>Advice Section</h2>
      <section className="adivce-slip">
        {slip && (
          <div>
            <h3>advice #{slip.slip.id}</h3>
            <p>{slip.slip.advice}</p>
            <button onClick={loadSlip}>Get More Advice</button>
            <button onClick={saveSlip}>Save to Favourties</button>
          </div>
        )}


      </section>

      <section className="favourite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favouriteSlips.map((slip, index) => (
            <li key={index}>
              <h3>advice #{slip.slip.id}</h3>
              <p>{slip.slip.advice}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default AdviceSection


