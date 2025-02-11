import styled from "@emotion/styled"

interface MainButtonDisable {
  disabled: boolean
}

export const MainButton = styled.button`
  min-width: 120px;
 height: 60px;
  padding: 20px;
  gap: 10px;
  // условие когда кнопка будет серой,а конда синей
  background-color: ${({ disabled }) =>
    disabled ? "#bcadad" : "rgb(66, 72, 253)"};
  border: none;
  border-radius: 26px;
  font-size: 24px;
  color: rgb(224, 224, 237);

  &:disabled {
    /* background-color: #bcadad; */
    cursor: not-allowed;
    opacity: 0.6;
  }
`
