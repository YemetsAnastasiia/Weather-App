import styled from "@emotion/styled"

export const WeatherCardWrapper = styled.div`
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

export const WeatherInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  gap: 4px;
`

export const TempBlock = styled.p`
  color: white;
  font-size: 34px;
`
export const CityNameBlock = styled.p`
  color: white;
  font-size: 16px;
`

export const DiscriptionBlock = styled.p`
  color: white;
  font-size: 16px;
`

export const WeatherIconBlock = styled.div`
  display: flex;
  position: relative;
 left: 150px; 
`

export const WeatherIcon = styled.img`
  width: 70px;
  height: 70px;
`
