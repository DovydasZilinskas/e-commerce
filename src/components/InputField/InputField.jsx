import React from "react";
import * as S from "./InputField.style";

function InputField({ placeholder, type, handleChange }) {
  switch (type) {
    case "number":
      return (
        <S.Input
          type="number"
          step="0.1"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
    case "longtext":
      return (
        <S.TextArea
          placeholder={placeholder}
          onChange={handleChange}
        ></S.TextArea>
      );
    default:
      return (
        <S.Input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
  }
}

export default InputField;
