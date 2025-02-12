import { WeatherCardProps } from "./types"
import {
  WeatherCardWrapper,
  WeatherInfoBlock,
  TempBlock,
  CityNameBlock,
  DiscriptionBlock,
  WeatherIconBlock,
  WeatherIcon,
} from "./styles"

function WeatherCard({ cityName, temp, discription, icon }: WeatherCardProps) {
  return (
    <WeatherCardWrapper>
      <WeatherInfoBlock>
        <TempBlock>{temp}</TempBlock>
        <CityNameBlock>{cityName}</CityNameBlock>
        <DiscriptionBlock>{discription}</DiscriptionBlock>
      </WeatherInfoBlock>
      <WeatherIconBlock>
        <WeatherIcon src={icon} className="card-image" />
        {/*  {children} */}
      </WeatherIconBlock>
    </WeatherCardWrapper>
  )
}

export default WeatherCard
