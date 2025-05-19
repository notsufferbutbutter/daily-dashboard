# Daily Dashboard

A simple, static dashboard web app that greets you by name, displays the current time, local weather, a random background image, an inspirational quote, and lets you manage a to‑do list—all in one place.

## Features

* **Live Clock**: Updates every second.
* **Local Weather**: Fetches current weather for your geolocation using OpenWeatherMap.
* **Personal Greeting**: Asks for your name once, then welcomes you on future visits.
* **Random Background**: Chooses a random image from the `img/` folder on each load.
* **Daily Quote**: Displays a random inspirational quote.
* **To‑Do List**: Add, remove, and persist tasks in `localStorage`.

## Project Structure

```
├── index.html        # Main HTML file
├── style.css         # Global styles
├── app.js            # Initializes all features
├── clock.js          # Clock logic
├── weather.js        # Weather fetch and display
├── quotes.js         # Quote selection
├── background.js     # Random background logic
├── todo.js           # To‑do list logic
├── img/              # Background images (e.g. frieren1.png)
└── README.md         # This documentation
```

## Prerequisites

* A modern web browser (Chrome, Firefox, Edge, Safari).
* An **OpenWeatherMap API key** (free at [https://openweathermap.org/api](https://openweathermap.org/api)).

## Setup & Usage

1. **Clone the repository**

   ```bash
   git clone https://github.com/<your-username>/morning-dashboard.git
   cd morning-dashboard
   ```

2. **Add your API key**

- Open the `weather.js` file.
- Locate the following line and replace `'YOUR_OPEN_WEATHER_API'` with your actual API key:

```javascript
const API_KEY = 'YOUR_OPEN_WEATHER_API';
```

3. **Run a local HTTP server**:

- Navigate to the project directory in your terminal.
- Open the `page.html` path file in your browser 

## Configuration

* **Background images**: Place new images in `img/` and they’ll be picked at random.
* **Quotes**: Add or edit objects in `quotes.js` to change the quote pool.
* **To‑Do Storage**: Uses `localStorage` under the key `todos`.
* **Greeting storage**: Uses `localStorage` under the key `username`.

## Deployment

You can deploy this as a static site on GitHub Pages:

1. Push to a GitHub repository named `morning-dashboard` (or any name).
2. In **Settings → Pages**, choose the `main` branch and `/ (root)` folder.
3. Save, and your site will go live at `https://<your-username>.github.io/<repo>/`.
