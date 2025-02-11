import { AsyncThunk } from "@reduxjs/toolkit";

export interface WeatherSliceData {
    id: string;
    name: string;
    temperature: number;
    description: string;
    icon: string;
  }
  
  export interface WeatherSliceinitialState {
    currentCity: WeatherSliceData | null;
    cityHistory: WeatherSliceData[];
    error: any;  
    status: "default" | "loading" | "success" | "error"    
  }


    export interface WeatherErrorResponse {
      message?: string;
    }
  