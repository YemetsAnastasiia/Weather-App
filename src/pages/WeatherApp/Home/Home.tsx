import Button from "components/Button/Button"
import Input from "components/Input/Input"
import Spinner from "components/Spinner/Spinner"
import WeatherCard from "components/WeatherCard/WeatherCard"

import { useFormik } from "formik"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { CityName } from "./type"
import {
  HomeWrapper,
  CityForm,
  InputWrapper,
  SpinnerWrapper,
  ResultWrapper,
  Error,
} from "./styles"

import { weatherActions } from "store/redux/weather/weatherSlice"

function Home() {
  const dispatch = useAppDispatch()

  const { status, error, currentCity } = useAppSelector(state => state.weather)

  const formik = useFormik({
    initialValues: {
      city: "",
    } as CityName,
    onSubmit: values => {
      dispatch(weatherActions.getWeather(values.city))
    },
  })

  return (
    <HomeWrapper>
      <CityForm onSubmit={formik.handleSubmit}>
        <InputWrapper>
          <Input
            name="city"
            placeholder="Enter city name"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          <Button name="Search" type="submit" />
        </InputWrapper>
      </CityForm>
      <ResultWrapper>
        <SpinnerWrapper>{status === "loading" && <Spinner />}</SpinnerWrapper>
        {status === "error" && <Error>{error}</Error>}
        {status === "success" && currentCity && (
          <WeatherCard
            key={currentCity.id}
            cityName={currentCity.name}
            temp={`${currentCity.temperature.toFixed(0)}°`}
            discription={currentCity.description}
            icon={`http://openweathermap.org/img/wn/${currentCity.icon}.png`}
          />
        )}
      </ResultWrapper>
    </HomeWrapper>
  )
}

export default Home
