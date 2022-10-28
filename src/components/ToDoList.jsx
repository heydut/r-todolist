import React from "react";
import ToDo from "./ToDo";
import styled from "styled-components";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <ToDoStyled>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <ButtonStyled onClick={handleFilter}>Clear Completed</ButtonStyled>
    </ToDoStyled>
  );
};

export default ToDoList;

const ToDoStyled = styled.div`
  margin: 25px 15px 15px 15px;
`;

const ButtonStyled = styled.button`
  background-color: crimson;
  border-radius: 5px;
  border: 1px solid crimson;
  color: #faf8f9;
  cursor: pointer;
  font-weight: bold;

  margin-top: 15px;
  padding: 5px 15px;
`;
