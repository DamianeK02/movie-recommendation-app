import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import config from './config.js';

function App() {
  const [step, setStep] = useState(0);
  const [preferences, setPreferences] = useState({
    genre: '',
    rating: 0,
    startDate: '',
    endDate: ''
  });
  const [movies, setMovies] = useState([]);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferences({
      ...preferences,
      [name]: value
    });
  };

  const handleGenreChange = (e) => {
    const { value } = e.target;
    setPreferences({
      ...preferences,
      genre: value
    });
  };

  const handleRatingChange = (rating) => {
    setPreferences({
      ...preferences,
      rating: rating
    });
  };

  const handleSubmit = () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: config.apiKey,
        include_adult: 'false',
        include_video: 'false',
        language: 'en-US',
        page: '1',
        sort_by: 'popularity.desc',
        with_genres: preferences.genre,
        'vote_average.lte': preferences.rating * 2,
        'primary_release_date.gte': preferences.startDate,
        'primary_release_date.lte': preferences.endDate
      },
      headers: { accept: 'application/json' }
    };

    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
        setStep(step + 1); // Przejdź do następnego kroku po otrzymaniu odpowiedzi
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="App">
      <div className="container">
      {step === 0 && (
        <div>
          <h2>Looking for perfect movie?</h2>
          <p>Take a quick journey to be matched with a movie based on your preferences.</p>
          <button onClick={handleNextStep}>Start</button>
        </div>
      )}
      {step === 1 && (
        <div>
          <h2>Step 1: Choose Genre</h2>
          <div className="genres">
            <div className="column">
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="28"
                  checked={preferences.genre === '28'}
                  onChange={handleGenreChange}
                />
                <span>Action</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="35"
                  checked={preferences.genre === '35'}
                  onChange={handleGenreChange}
                />
                <span>Comedy</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="80"
                  checked={preferences.genre === '80'}
                  onChange={handleGenreChange}
                />
                <span>Crime</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="10749"
                  checked={preferences.genre === '10749'}
                  onChange={handleGenreChange}
                />
                <span>Romance</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="12"
                  checked={preferences.genre === '12'}
                  onChange={handleGenreChange}
                />
                <span>Adventure</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="10751"
                  checked={preferences.genre === '10751'}
                  onChange={handleGenreChange}
                />
                <span>Family</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="16"
                  checked={preferences.genre === '16'}
                  onChange={handleGenreChange}
                />
                <span>Animation</span>
              </label>
            </div>
            <div className="column">
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="99"
                  checked={preferences.genre === '99'}
                  onChange={handleGenreChange}
                />
                <span>Documentary</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="18"
                  checked={preferences.genre === '18'}
                  onChange={handleGenreChange}
                />
                <span>Drama</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="36"
                  checked={preferences.genre === '36'}
                  onChange={handleGenreChange}
                />
                <span>History</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="27"
                  checked={preferences.genre === '27'}
                  onChange={handleGenreChange}
                />
                <span>Horror</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="14"
                  checked={preferences.genre === '14'}
                  onChange={handleGenreChange}
                />
                <span>Fantasy</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="878"
                  checked={preferences.genre === '878'}
                  onChange={handleGenreChange}
                />
                <span>Science Fiction</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="genre"
                  value="53"
                  checked={preferences.genre === '53'}
                  onChange={handleGenreChange}
                />
                <span>Thriller</span>
              </label>
            </div>
          </div>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div className="rating">
          <h2>Step 2: Choose Rating</h2>
          {[1, 2, 3, 4, 5].map(rating => (
            <span
              key={rating}
              className={`star ${rating <= preferences.rating ? 'selected' : ''}`}
              onClick={() => handleRatingChange(rating)}
            >
              &#9733;
            </span>
          ))}
          <br/>
          <button onClick={handlePreviousStep}>Previous</button>
          <button onClick={handleNextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Choose Date Range</h2>
          <label>
            Start Date:
            <input
              type="date"
              name="startDate"
              value={preferences.startDate}
              onChange={handleChange}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="endDate"
              value={preferences.endDate}
              onChange={handleChange}
            />
          </label>
          <button onClick={handlePreviousStep}>Previous</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {step === 4 && (
        <div>
          <h2>Step 4: Movie List</h2>
          {movies.length > 0 ? (
            <div className="movies-list">
              {movies.map((movie, index) => (
                <div key={index} className="movie">
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-details">
                    <h3>{movie.title}</h3>
                    <p><strong>Overview:</strong> {movie.overview}</p>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Vote Average:</strong> {movie.vote_average}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No movies available</p>
          )}
          <button onClick={handlePreviousStep}>Previous</button>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
