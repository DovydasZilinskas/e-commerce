import React from "react";
import * as S from "./Button.style";

function Button({ children, handeClick, color, type }) {
  return (
    <S.Button onClick={handeClick} color={color} type={type}>
      {children}
    </S.Button>
  );
}

export default Button;
