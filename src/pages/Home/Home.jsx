import React, { useState, useEffect, useContext } from "react";
import { InputField, Section, Button } from "../../components";
import * as S from "./Home.style";
import { useHistory } from "react-router-dom";
import { LocationContext } from "../../context/location.context";

function Home() {
  const location = useContext(LocationContext);
  const [postCode, setPostCode] = useState();
  const [error, setError] = useState(false);
  const history = useHistory();

  useEffect(() => setPostCode(location.state), [location.state]);

  return (
    <>
      <Section>
        <h1>Select Your Store</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (postCode) {
              setError(false);
              location.setState(postCode);
              history.push("/about");
            } else {
              setError(true);
            }
          }}
        >
          {error && (
            <S.Error>
              Post Code is incorrect. Please check and try again.
            </S.Error>
          )}

          <InputField
            type="dropdown"
            arr={[
              { city: "Kaunas" },
              { city: "Vilnius" },
              { city: "Siauliai" },
            ]}
            handleChange={(e) => setPostCode(e.target.value)}
          />
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
