import React, { useEffect, useState, useContext } from "react";
import { InputField, Section, Button } from "../../components";
import { useHistory } from "react-router-dom";
import * as S from "./Home.style";
import { LocationContext } from "../../context/location.context";

function Home() {
  const location = useContext(LocationContext);
  const [city, setCity] = useState();
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://127.0.0.1:8080/cities`)
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
      })
      .catch((err) => alert(err.message + " Check your connection."));
  }, []);

  return (
    <>
      <Section>
        <h1>Select Your Store</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (city) {
              setError(false);
              location.setState(city);
              history.push("/products");
            } else {
              setError(true);
            }
          }}
        >
          {error && <S.Error>Please select a city.</S.Error>}
          {cities && (
            <InputField
              type="dropdown"
              arr={cities}
              handleChange={(e) => setCity(e.target.value)}
            />
          )}

          <S.InputBlock>
            <Button type="submit" color="primary">
              Next
            </Button>
          </S.InputBlock>
        </form>
      </Section>
    </>
  );
}

export default Home;
