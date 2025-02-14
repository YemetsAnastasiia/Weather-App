import WeatherCard from "components/WeatherCard/WeatherCard"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  WeatherHistoryWrapper,
  ButtonWrapper,
  CardsWrapper,
  NoCitiesMassager,
} from "./styles"
import Button from "components/Button/Button"
import { weatherActions } from "store/redux/weather/weatherSlice"

function WeatherHistory() {
  const dispatch = useAppDispatch()
  const { cityHistory } = useAppSelector(state => state.weather)

  const cityCards =
    cityHistory.length === 0 ? (
      <NoCitiesMassager>No cities searched yet.</NoCitiesMassager>
    ) : (
      cityHistory.map(city => (
        <WeatherCard
          key={city.id}
          cityName={city.name}
          temp={`${city.temperature.toFixed(0)}°`}
          discription={city.description}
          icon={`http://openweathermap.org/img/wn/${city.icon}@2x.png`}
        />
      ))
    )

    const deleteAllCars = () => {
      dispatch(weatherActions.deliteWeatherCards())
    }


  return (
    <WeatherHistoryWrapper>
      <CardsWrapper>{cityCards}</CardsWrapper>
      <ButtonWrapper>
        {cityHistory.length !== 0 && <Button name="Delete all cards" onClick={deleteAllCars} />}
      </ButtonWrapper>
    </WeatherHistoryWrapper>
  )
}

export default WeatherHistory
