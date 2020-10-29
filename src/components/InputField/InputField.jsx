import React from "react";
import * as S from "./InputField.style";

function InputField({
  value,
  placeholder,
  type,
  handleChange,
  arr,
  optionState,
}) {
  switch (type) {
    case "number":
      return (
        <S.Input
          value={value}
          type="number"
          step="0.1"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
    case "longtext":
      return (
        <S.TextArea
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        ></S.TextArea>
      );
    case "dropdown":
      return (
        <S.Dropdown onChange={handleChange} defaultValue>
          <option disabled value>
            Select
          </option>
          {arr.map((e) => (
            <option value={e.value} key={e.id}>
              {e.city}
            </option>
          ))}
        </S.Dropdown>
      );
    default:
      return (
        <S.Input
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
  }
}

export default InputField;
