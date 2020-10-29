import React, { useContext, useEffect, useState } from "react";
import { Section, Button, Loading } from "../../components";
import { UserContext } from "../../context/user.context";
import { useHistory, Link } from "react-router-dom";
import * as S from "./Products.style";

function About() {
  const user = useContext(UserContext);
  const history = useHistory();
  const [products, setProducts] = useState();

  if (!user.state) {
    history.push("/");
  }

  useEffect(() => {
    if (user.state && user.state.city) {
      fetch(`http://127.0.0.1:8080/${user.state.city}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
  }, [user.state]);

  return (
    <>
      <Section>
        <S.FlexBox>
          <h1>
            Hello {user.state && user.state.name}, this is your product list.
          </h1>
          <Link to="/">
            <Button>Go Back</Button>
          </Link>
        </S.FlexBox>
      </Section>
      <Section>
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
