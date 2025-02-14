import styled from "@emotion/styled"

interface MainButtonDisable {
  disabled: boolean
}

export const MainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  height: 40px;
  // условие когда кнопка будет серой,а конда синей
  background-color: ${({ disabled }) => (disabled ? "#bcadad" : "#5274db")};
  border: none;
  border-radius: 24px;
  font-size: 16px;
  color: white;

  &:disabled {
    /* background-color: #bcadad; */
    cursor: not-allowed;
    opacity: 0.6;
  }
`
