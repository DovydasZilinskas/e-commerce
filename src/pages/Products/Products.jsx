import React, { useContext, useEffect, useState } from "react";
import { Section, Button, Loading } from "../../components";
import { LocationContext } from "../../context/location.context";
import { useHistory, Link } from "react-router-dom";
import * as S from "./Products.style";

function About() {
  const location = useContext(LocationContext);
  const history = useHistory();
  const [products, setProducts] = useState();

  if (!location.state) {
    history.push("/");
  }

  useEffect(() => {
    if (location.state) {
      fetch(`http://127.0.0.1:8080/${location.state}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [location.state]);

  return (
    <>
      <Section>
        <S.FlexBox>
          <h1>Product List</h1>
          <Link to="/">
            <Button>Go Back</Button>
          </Link>
        </S.FlexBox>
      </Section>
      <Section>
        {/* <h2>
          {location.state &&
            location.state.charAt(0).toUpperCase() + location.state.slice(1)}
        </h2> */}

        <S.Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price / 100} Eur</td>
                </tr>
              ))}
          </tbody>
        </S.Table>
        {!products ? (
          <Loading />
        ) : !products || products.length === 0 ? (
          <S.Error>Data not found</S.Error>
        ) : (
          ""
        )}
      </Section>
    </>
  );
}

export default About;
