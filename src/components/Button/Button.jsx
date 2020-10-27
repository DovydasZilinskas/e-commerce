import React from "react";
import * as S from "./Button.style";

function Button({ children, handeClick, color }) {
  return (
    <S.Button onClick={handeClick} color={color}>
      {children}
    </S.Button>
  );
}

export default Button;
