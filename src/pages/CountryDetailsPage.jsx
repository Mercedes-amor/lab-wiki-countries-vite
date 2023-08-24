import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";


function CountryDetails() {

    const [countryDetail, setCountryDetail] = useState(null)

    const params = useParams()

    useEffect(() => {
        getData();
      }, [params.countryId]);
    
      const getData = async () => {
        try {
          const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries/${params.countryId}`);
          console.log("response:", response);
          setCountryDetail(response.data)
        } catch (error) {
          console.log(error);
        }
      };
    
        
        if (countryDetail === null) {
            return <h3>... loading</h3>
        }


    return (
    <div>
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Country Details</h1>
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetail.alpha2Code.toLowerCase()}.png`}alt="flag" />

        <h4>Nombre:{countryDetail.name.common}</h4>
        <h4>Capital:{countryDetail.capital}</h4>
        <h4>Area:{countryDetail.area} km </h4>

        {countryDetail.borders.map((eachBorder) => {
          
            return (
            <Link key={eachBorder} to={`/${eachBorder}`}> 
                <li >{eachBorder}</li>
           </Link>)
        })}

        
    </div>


    )

}


export default CountryDetails;
