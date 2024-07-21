# Movie Recommendation App

## Overview
Movie Recommendation App is a React-based web application that helps users find movies based on their preferences. Users can select a genre, desired rating, and date range, and the app fetches a list of movies that match these criteria from The Movie Database (TMDb) API.

## Features
- **Genre Selection**: Choose from various genres like Action, Comedy, Crime, Romance, Adventure, Family, Animation, Documentary, Drama, History, Horror, Fantasy, Science Fiction, and Thriller.
- **Rating Selection**: Select a desired rating from 1 to 5 stars.
- **Date Range Selection**: Specify a date range to filter movies by their release dates.
- **Movie List**: View a list of movies that match the selected criteria, complete with details like title, overview, release date, and vote average.

## Installation

### Prerequisites
- Node.js
- npm

### Steps
1. **Clone the repository**:
    ```bash
    git clone https://github.com/DamianeK02/movie-recommendation-app.git
    cd movie-recommendation-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up the API key**:
   - Open `config.js`.
   - Replace `'your_tmdb_api_key'` with your actual TMDb API key:
    ```javascript
    const config = {
      apiKey: 'your_tmdb_api_key'
    };
    
    export default config;
    ```

4. **Run the application**:
    ```bash
    npm start
    ```

## Project Structure
```bash
movie-recommendation-app
│ README.md
│ package.json
│ .gitignore
│
├───public
│ index.html
│ favicon.ico
│
├───src
│ App.js
│ App.css
│ config.js
│ index.js
```

## Usage
1. Open the application in your browser.
2. Click on the **Start** button to begin the movie selection process.
3. Follow the steps to select your genre, rating, and date range.
4. View the list of movies that match your preferences.

## Dependencies
- **React**: A JavaScript library for building user interfaces.
- **axios**: A promise-based HTTP client for the browser and Node.js.
- **TMDb API**: The Movie Database (TMDb) API for fetching movie data.

## Contributing
If you wish to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push your branch to your forked repository.
4. Create a pull request with a description of your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- The Movie Database (TMDb) for providing the movie data API.
