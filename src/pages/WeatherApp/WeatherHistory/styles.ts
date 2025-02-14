import styled from "@emotion/styled"

export const WeatherHistoryWrapper = styled.div`
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

export const NoCitiesMassager = styled.p `
  display: flex;
  flex-shrink: 1; 
  background-color: hsla(244, 83%, 23%, 0.436);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.7);
  width: 420px;
  max-height: 200px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
`
