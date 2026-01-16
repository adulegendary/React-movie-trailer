# Movie App

A modern React movie application with search, favorites, and trailer viewing functionality powered by The Movie Database (TMDB) API.

## Features

- 🎬 Browse popular movies
- 🔍 Search for movies by title
- ❤️ Add movies to favorites (saved in localStorage)
- 🎥 Watch movie trailers (YouTube embed)
- 📱 Responsive design with optimized grid layout

## Setup

1. Clone the repository
```bash
git clone <your-repo-url>
cd React_first_Project
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file
```bash
cp .env.example .env
```

4. Get your TMDB API key
   - Visit [TMDB API Settings](https://www.themoviedb.org/settings/api)
   - Sign up for a free account if you don't have one
   - Request an API key
   - Add it to your `.env` file:
   ```
   VITE_TMDB_API_KEY=your_actual_api_key_here
   ```

5. Run the development server
```bash
npm run dev
```

## Technologies Used

- **React 19** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **TMDB API** - Movie data and trailers
- **Context API** - Global state management for favorites
- **localStorage** - Persistent favorites storage

## Project Structure

```
src/
├── Compenentes/         # Reusable components
│   ├── MovieCard.jsx    # Movie card with poster and favorite button
│   ├── NavBar.jsx       # Navigation bar
│   └── TrailerModal.jsx # Modal for YouTube trailers
├── pages/               # Page components
│   ├── Home.jsx         # Home page with movie grid
│   └── favorite.jsx     # Favorites page
├── context/             # React Context
│   └── MovieContext.jsx # Favorites state management
├── service/             # API services
│   └── api.js           # TMDB API calls
└── css/                 # Stylesheets
```

## License

MIT
