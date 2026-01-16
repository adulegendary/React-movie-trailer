import "../css/Favorites.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../Compenentes/MovieCard"

function Favorite() {
    const { favorites } = useMovieContext();

    if (favorites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No favorite movies yet</h2>
                <p>Start adding movies to your favorites!</p>
            </div>
        );
    }

    return (
        <div className="favorites">
            <h2>Your Favorite Movies</h2>
            <div className="movies-container">
                {favorites.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Favorite