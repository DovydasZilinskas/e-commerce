import React, { useEffect, useState, useContext } from "react";
import { InputField, Section, Button } from "../../components";
import { useHistory } from "react-router-dom";
import * as S from "./Home.style";
import { UserContext } from "../../context/user.context";

function Home() {
  const user = useContext(UserContext);
  const [city, setCity] = useState();
  const [cities, setCities] = useState([]);
  const [error, setError] = useState(false);
  const [name, setName] = useState();
  const [gender, setGender] = useState();
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
              user.setState({ city, name, gender });
              history.push("/products");
            } else {
              setError(true);
            }
          }}
        >
          <InputField
            type="text"
            placeholder="Name"
            handleChange={(e) => setName(e.target.value)}
          />
          <div onChange={(e) => setGender(e.target.value)}>
            <InputField type="radio" value="Mr" name="gender" /> Male
            <InputField type="radio" value="Ms" name="gender" /> Female
          </div>

          {error && <S.Error>Please select a city.</S.Error>}
          {cities && (
            <InputField
              type="dropdown"
              cities={cities}
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
