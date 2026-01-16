import { useState, useEffect } from "react";
import MovieCard from "../Compenentes/MovieCard";
import { getPopularMovies, searchMovies } from "../service/api";
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadPopularMovies();
    }, []);

    const loadPopularMovies = async () => {
        try {
            setLoading(true);
            const popularMovies = await getPopularMovies();
            setMovies(popularMovies);
            setError(null);
        } catch (err) {
            setError("Failed to load movies");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            try {
                setLoading(true);
                const results = await searchMovies(searchQuery);
                setMovies(results);
                setError(null);
            } catch (err) {
                setError("Failed to search movies");
                console.error(err);
            } finally {
                setLoading(false);
            }
        } else {
            loadPopularMovies();
        }
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value === "") {
            loadPopularMovies();
        }
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="Search_form">
                <input
                    type="text"
                    placeholder="search for movies .."
                    className="search-input"
                    value={searchQuery}
                    onChange={handleInputChange}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>

            {loading && <p className="loading">Loading movies...</p>}
            {error && <p className="error">{error}</p>}

            <div className="movies-container">
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={{
                            id: movie.id,
                            title: movie.title,
                            release_date: movie.release_date,
                            url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;