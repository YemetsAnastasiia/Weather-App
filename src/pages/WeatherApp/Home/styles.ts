import styled from "@emotion/styled"

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  flex: 1;
`

export const CityForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: 710px;
  min-height: 50px;
  height: fit-content;
  padding: 20px;
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export const InfoCardWrapper = styled.div`
  display: flex;
  flex-shrink: 1;
  background-color: #100a6b45;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  width: 420px;
  max-height: 200px;
  text-align: center;
`

export const Error = styled.div`
  width: 600px;
  padding: 20px;
  background-color: #100a6b45;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  width: 420px;
  max-height: 200px;
  text-align: center;
  color: #e61212;
  font-size: 28px;
  font-weight: bold;
`;

