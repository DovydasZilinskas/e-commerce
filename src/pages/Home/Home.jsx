import React from "react";
import { Button, Section } from "../../components";

function Home() {
  return (
    <>
      <Section background="#eee" maxWidth="max">
        Welcome to my boilerplate
      </Section>
      <Section>
        <Button color="primary" handeClick={() => alert("Labas bl")}>
          Click me
        </Button>
        <Button color="secondary" handeClick={() => alert("Viso gero nx")}>
          Don't Click me
        </Button>
      </Section>
      <Section background="#bbb">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae,
        dolorem. Ipsam quaerat itaque quasi sequi necessitatibus, labore eius
        vitae ad quo iure odit porro non aliquid reprehenderit magnam et
        distinctio?
      </Section>
    </>
  );
}

export default Home;
