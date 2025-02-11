import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { CityName } from "./type";
import { v4 } from "uuid";
import { HomeWrapper, CityForm, WeatherCard , InputWrapper} from './styles';
import { weatherActions } from "store/redux/weather/weatherSlice";
import Spinner from "components/Spinner/Spinner";

const APP_ID = "a8ba3cb30484c5beed1b9691ca576c99"; 

// URL с динамическим запросом
const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${APP_ID}&units=metric`;



function Home() {
    const dispatch = useAppDispatch();

    // Получаем состояние из Redux (статус, ошибка и данные о текущем городе)
  const { status, error, currentCity } = useAppSelector((state) => state.weather); 

  
    const formik = useFormik({
      initialValues: {
        city: "",
      } as CityName,
      onSubmit: (values) => {
        // Передаем название города для получения погоды
        dispatch(weatherActions.getWeather(values.city));
      },
    });
  
    return (
      <HomeWrapper>
        {/* Форма для ввода города */}
        <CityForm onSubmit={formik.handleSubmit}>
          <InputWrapper>
          <Input
            name="city"
            placeholder="Enter city name"
            value={formik.values.city}
            onChange={formik.handleChange}
          />
          </InputWrapper>
          <Button name="Search" type="submit" />
         
        </CityForm>
  
        {/* Статус загрузки */}
        
         {status === "loading" && <Spinner/>}
  
        {/* Ошибка при запросе */}
        {status === "error" && <p style={{ color: "red" }}>Error: {error}</p>}
  
        {/* Отображаем карточку погоды, если данные получены успешно */}
        {status === "success" && currentCity && (
          <WeatherCard>
            <h2>{currentCity.name}</h2>
            <p>Temperature: {currentCity.temperature}°C</p>
            <p>{currentCity.description}</p>
  
            {/* Отображаем иконку погоды */}
            {currentCity.icon && (
              <img
                src={`http://openweathermap.org/img/wn/${currentCity.icon}.png`}
                alt={currentCity.description}
              />
            )}
          </WeatherCard>
        )}
      </HomeWrapper>
    );
  }
  
  export default Home;