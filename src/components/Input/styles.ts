import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`;

export const InputElement = styled.input`
  width: 450px;
  height: 40px;
  padding: 20px;
  outline: none;
  border: 1px solid white;
  border-radius: 24px;
  font-size: 16px;
  color: white;
  background-color: #a19f9f41;

  &::placeholder {
    color: #a19f9f;
  }
`;


export const ErrorMessage = styled.div `
height: 18px;
color: red;
font-size: 18px;
`
