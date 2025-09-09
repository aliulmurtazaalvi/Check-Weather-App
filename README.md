# Weather App

A sleek and responsive React application that fetches and displays real-time weather information for any city using the Weatherstack API. Users can enter a city name to view current weather details, including temperature, weather conditions, humidity, wind speed, and more, all presented in a modern, visually appealing interface.

## Features
- **Real-Time Weather Data**: Fetches current weather information for any city using the Weatherstack API.
- **Customizable Search**: Enter a city name to instantly retrieve weather details.
- **Responsive Design**: Optimized for both desktop and mobile devices with a gradient background and smooth animations.
- **Detailed Weather Info**: Displays temperature, weather description, local time, humidity, wind speed, and "feels like" temperature.
- **Error Handling**: Shows a "No Data Found" message for invalid city names or API errors.
- **Modern UI**: Features a glassmorphism-inspired design with a dynamic gradient background and Tailwind CSS for styling.

## Technologies Used
- **React**: For building the user interface with component-based architecture and state management using `useState`.
- **JavaScript (ES6)**: For handling API requests and dynamic rendering.
- **Tailwind CSS**: For responsive and utility-first styling.
- **CSS**: Custom styles with a dynamic gradient background and animations.
- **Weatherstack API**: For fetching real-time weather data.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd weather-app
   ```

2. **Install Dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

3. **Set Up Weatherstack API Key**:
   - Sign up at [Weatherstack](https://weatherstack.com/) to obtain an API key.
   - The API key is embedded in `App.jsx` for this project (`access_key=35441bfaa1c563968ba93b7af97ae246`). For production, consider storing the API key in an environment variable (e.g., `.env` file) for security.

4. **Start the Development Server**:
   ```bash
   npm start
   ```
   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage
1. Launch the application.
2. Enter a city name in the search input field.
3. Click the **Search** button to fetch the current weather data.
4. View the weather details, including temperature, weather description, local time, humidity, wind speed, and "feels like" temperature.
5. If an invalid city is entered, a "No Data Found" message will appear.

## Project Structure
```
weather-app/
├── src/
│   ├── App.jsx             # Main React component for the weather app
│   ├── App.css             # Custom styles with gradient background and animations
│   ├── main.jsx            # Entry point for the React app
│   └── index.css           # Tailwind CSS and global styles
├── public/
│   ├── index.html          # HTML template
│   └── favicon.ico         # Favicon
├── package.json            # Project dependencies and scripts
└── README.md               # This file
```

## Screenshots
*To be added: Include screenshots of the application in desktop and mobile views.*

## API Usage
This project uses the [Weatherstack API](https://weatherstack.com/) to fetch real-time weather data. Ensure you have a valid API key and comply with Weatherstack's usage limits (e.g., free tier limits). For production, store the API key in an environment variable:
```bash
# .env
REACT_APP_WEATHERSTACK_API_KEY=your_api_key
```
Then update `App.jsx` to use `process.env.REACT_APP_WEATHERSTACK_API_KEY`.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request on GitHub.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/).
- Powered by [Weatherstack API](https://weatherstack.com/).
- Inspired by the need for a simple, user-friendly weather checking tool.

## Contact
- **Email**: alialvi.se44@gmail.com
- **GitHub**: [aliulmurtazaalvi](https://github.com/aliulmurtazaalvi)