import React from "react";
import * as S from "./Section.style";

function Section({ children, fullWidth, background, maxWidth, align }) {
  return (
    <S.Section background={background} maxWidth={maxWidth} align={align}>
      {fullWidth ? children : <S.Wrapper>{children}</S.Wrapper>}
    </S.Section>
  );
}

export default Section;
