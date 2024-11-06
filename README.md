
# Unit Converter

This is a practical fullstack project for practicing communication between a REST API and a basic WEB APP, which deals with a unit of measurement converter, in this case the main ones will be length, weight and temperature.

#### `Frontend`

This is responsible for handling data entry, making the corresponding requests to the backend and showing the results to the user.

#### `Backend`

This is responsible for handling the data sent from the web app, performing the corresponding conversions and returning the conversion result.

## Captures of Unit Converter

<div style="display: flex; justify-content: space-between;">
  <img style="border: 1px solid white" src="images/1.png" width="600" alt="Imagen 1">
  <img style="border: 1px solid white" src="images/2.png" width="600" alt="Imagen 2">
</div>

## Used Techonologies

### `Frontend`

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="React Router" />
  <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
</p>

### `Backend`

<p align="left">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express.js" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Morgan-888888?style=for-the-badge" alt="Morgan" />
  <img src="https://img.shields.io/badge/Hapi_Boom-FF7F50?style=for-the-badge" alt="Hapi Boom" />
  <img src="https://img.shields.io/badge/CORS-000000?style=for-the-badge&logo=cors&logoColor=white" alt="CORS" />
</p>

## Local Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/nmmartinezp/Unit-Converter.git
   ```
### `Backend`

Into Backend folder:

1. Install the dependences
  ```bash
   npm install
  ```
2. If necessary configure the cors into the app.js file, this is for the requests from frontend
  ```javascript
    // Open requests from frontend
    app.use(cors({
    origin: "http://localhost:5173" //frontend en Vite
    }));
  ```
3. Configure environment variable file .env to root folder
  ```.env
    SERVER_PORT = # Port -> for example 8181
  ```

### `Frontend`

Into Frontend folder:

1. Install the dependences
  ```bash
   npm install
  ```
2. Configure environment variable file .env to root folder, with routes of api
  ```.env
    VITE_API_URL=http://localhost:SERVERPORT/converter/
    VITE_API_URL_LENGTH=lengthconvert/
    VITE_API_URL_WEIGHT=weightconvert/
    VITE_API_URL_TEMPERATURE=temperatureconvert/
  ```

## Practice Project for

[![GitHub Profile](https://img.shields.io/badge/GitHub_Profile-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nmmartinezp)
