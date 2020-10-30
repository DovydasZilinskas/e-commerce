import React, { useContext, useEffect, useState } from "react";
import { Section, Button, Loading, Table } from "../../components";
import { UserContext } from "../../context/user.context";
import { useHistory, Link } from "react-router-dom";
import * as S from "./Products.style";

function About() {
  const user = useContext(UserContext);
  const history = useHistory();
  const [products, setProducts] = useState();

  useEffect(() => {
    if (user.state && user.state.city) {
      fetch(`http://127.0.0.1:8080/${user.state.city}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    } else {
      history.push("/");
    }
  }, [user.state, history]);

  return (
    <>
      <Section>
        <S.FlexBox>
          <S.HeadingText>
            Hello{user.state.gender && " "}
            {user.state && user.state.gender}
            {user.state.name && " "}
            {user.state && user.state.name}
            {user.state && ", "}
            {!products || products.length === 0
              ? "your products has not been found."
              : "this is your product list."}
          </S.HeadingText>
          <Link to="/">
            <Button>Go Back</Button>
          </Link>
        </S.FlexBox>
      </Section>
      <Section>
        {!products ? (
          <Loading />
        ) : !products || products.length === 0 ? (
          <S.Error>Data not found</S.Error>
        ) : (
          <Table products={products} />
        )}
      </Section>
    </>
  );
}

export default About;
