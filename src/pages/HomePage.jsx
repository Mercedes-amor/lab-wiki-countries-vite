import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [allCountries, setAllCountries] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-countries-api.herokuapp.com/countries")
      .then((response) => {
        console.log("response:", response.data);
        setAllCountries(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (allCountries === null) {
    return <h2>loading...</h2>;
  }

  return (
    <div>
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
        WikiCountries: Your Guide to the World
      </h1>

      {allCountries.map((eachCountry) => {
        return (
          <li key={eachCountry.name.common}>
            <Link to={`/${eachCountry.alpha3Code}`}>
                <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="flag" />
              <br />
              {eachCountry.name.common} 
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default HomePage;
