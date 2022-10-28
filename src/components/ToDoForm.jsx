import React, { useState } from "react";
import styled from "styled-components";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputStyled
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter task..."
      />
      <ButtonStyled>Submit</ButtonStyled>
    </FormStyled>
  );
};

export default ToDoForm;

const FormStyled = styled.form`
  text-align: center;
  margin: 15px;
`;

const InputStyled = styled.input`
  background: #fff;
  border-radius: 5px;
  border: 1px solid crimson;

  width: 220px;
  padding: 5px;
`;

const ButtonStyled = styled.button`
  background-color: crimson;
  border-radius: 5px;
  border: 1px solid crimson;
  color: #faf8f9;
  font-weight: bold;
  padding: 5px 15px;
  margin-left: 10px;
`;
