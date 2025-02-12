import styled from "@emotion/styled";

export const WeatherHistoryWrapper = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* padding: 30px; */
margin-top: 20px;
`

export const CardsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-height: 600px; 
flex-grow: 1;
overflow-y: auto;
margin-bottom: 50px;
margin-left: 20px;
padding: 10px;
gap: 20px;

`

export const ButtonWrapper = styled.div`
position: sticky; 
  bottom: 10px; 
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

`