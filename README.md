# Autotext Frontend Weather App

A React-based weather report application that fetches data from the OpenWeatherMap API. This app accepts a city name as input and displays the current weather conditions if the city is found. It also handles errors gracefully by showing a "city not found" message or notifying the user if there is no internet connection.

---

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation and Running Locally](#installation-and-running-locally)
- [Project Structure and Components](#project-structure-and-components)
- [Environment Variables](#environment-variables)

---

## Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The Autotext Frontend Weather App demonstrates how to integrate an external API into a React application. Users can enter a city name to fetch weather data from the OpenWeatherMap API. If the city exists, the app displays detailed weather information; if not, it shows an appropriate error message. Additionally, the app detects internet connectivity issues and informs the user accordingly.

---

## Features

- **City Weather Report:** Enter a city name to get current weather information.
- **API Integration:** Retrieves real-time weather data from the OpenWeatherMap API.
- **Error Handling:**  
  - Displays an error message if the city is not found.
  - Notifies the user when there is no internet connection.
- **Responsive User Interface:** Built with React for a dynamic and smooth user experience.

---

## Installation and Running Locally

Follow these steps to set up the project on your local machine:

1. **Clone the React App (if starting from scratch):**
   ```bash
   git clone https://github.com/amitsingh-1811/autotext_frontend.git

2. **Install dependencies**
   ```bash
   npm install
3. ***Setup environment variables***
   Create a .env file in the root directory and add your OpenWeatherMap API key:
   ```bash
   REACT_APP_WEATHER_API_KEY=your_api_key_here
4. ***Start the development server***
   ```bash
   npm start
  The application will be available at http://localhost:3000.

## Project structure and components
  The project organised as follows:
  ```bash
  autotext_frontend/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── App.js              // Main component handling user input and rendering WeatherReport component.
│   ├── WeatherReport.js    // Component that fetches weather data, manages loading and error states.
│   ├── ShowData.js         // Component that displays the fetched weather details.
│   ├── index.js            // Application entry point.
│   ├── App.css             // Styles for the main application.
│   ├── WeatherReport.css   // Styles for the WeatherReport component.
│   └── ShowData.css        // Styles for the ShowData component.
├── .env                    // Contains environment variables (e.g., API key).
├── package.json            // Project configuration and scripts.
└── README.md               // This documentation file.

```
## Environment Variables
  This project uses an environment variable to securely store the OpenWeatherMap API key. Create a .env file in the root directory with the following content:
  ```bash
  REACT_APP_WEATHER_API_KEY=your_api_key_here
```
Replace your_api_key_here with your actual API key from OpenWeatherMap.

