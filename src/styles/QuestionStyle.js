import styled from 'styled-components';

export const QuestionContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const QuestionText = styled.h2`
  margin-bottom: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionButton = styled.button`
  background-color: #dea53e;
  font-size: 20px;
  color: black;
  padding: 10px;
  margin: 5px 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s ease-in;

  &:hover {
    background-color: #e8c07d;
    font-weight: 600;
    transition: 1s ease-in;
    font-size: 19px;
    box-shadow: 1px 1px black;
  }
`;
