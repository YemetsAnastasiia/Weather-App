import WeatherCard from 'components/WeatherCard/WeatherCard';
import { useAppSelector } from 'store/hooks'
import { v4 } from 'uuid';
import {WeatherHistoryWrapper, ButtonWrapper, CardsWrapper} from './styles'
import Button from 'components/Button/Button';

function WeatherHistory (){

    const { cityHistory } = useAppSelector((state) => state.weather); // Получаем историю из Redux

    return (
      <WeatherHistoryWrapper>
        <CardsWrapper>
        {cityHistory.length === 0 && <p>No cities searched yet.</p>}
        
        {cityHistory.map((city) => (
          <WeatherCard
            key={city.id}
            cityName={city.name}
            temp={`${city.temperature.toFixed(0)}°`}
            discription={city.description}
            icon={`http://openweathermap.org/img/wn/${city.icon}@2x.png`}
          />
        ))}
        </CardsWrapper>
      <ButtonWrapper> 
        { cityHistory.length !== 0 && <Button
        name='Delete all cards'
        />}
        </ButtonWrapper> 
      </WeatherHistoryWrapper>
    );
   
  }
  
  export default WeatherHistory;
   