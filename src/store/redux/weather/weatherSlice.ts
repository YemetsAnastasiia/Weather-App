import axios, { AxiosError } from "axios"
import {
    WeatherErrorResponse,
  WeatherSliceData,
  WeatherSliceinitialState,
} from "./types"

import { createAppSlice } from "store/createAppSlice"
import { v4 } from "uuid"

const weatherInitialState: WeatherSliceinitialState = {
  currentCity: null,
  cityHistory: [],
  error: undefined,
  status: "default",
}
// API ключ
const APP_ID = "a8ba3cb30484c5beed1b9691ca576c99"

export const weatherSlice = createAppSlice({
  name: "WEATHER",
  initialState: weatherInitialState,
  reducers: create => ({
    getWeather: create.asyncThunk(
      async (cityName: string, thunkApi) => {
        try {
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}&units=metric`
          const response = await axios.get(apiUrl)

          
          // Формируем данные о текущем городе
          const weatherData: WeatherSliceData = {
            id: v4(),
            name: response.data.name,
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
          }

          return weatherData // Возвращаем полученные данные
        } catch (error) {
            const axiosError = error as AxiosError<WeatherErrorResponse>;
            const errorMessage = axiosError.response?.data?.message || "City not found. Please try again.";
            return thunkApi.rejectWithValue(errorMessage); 
        }
      },
      {
        pending: (state: WeatherSliceinitialState) => {
          state.status = "loading" // Статус загрузки
          state.error = null // Сбрасываем ошибки
        },
        fulfilled: (state: WeatherSliceinitialState, action: any) => {
          state.currentCity = action.payload // Сохраняем текущий город
          state.cityHistory.push(action.payload) // Добавляем город в историю
          state.status = "success" // Устанавливаем статус успеха
        },
        rejected: (state: WeatherSliceinitialState, action: any) => {
          state.error = action.payload // Сохраняем ошибку
          state.status = "error" // Устанавливаем статус ошибки
        },
      },
    ),
    clearError: create.reducer((state: WeatherSliceinitialState) => {
      state.error = null
    }),
  }),
  selectors: {
    weatherData: (state: WeatherSliceinitialState) => state,
  },
})

export const weatherActions = weatherSlice.actions
export const weatherSelectors = weatherSlice.selectors
